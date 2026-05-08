"""
SecureShare — minimal Flask backend.

Endpoints
---------
POST   /upload         multipart "file" → { id, filename, size, uploaded_at, pin }
GET    /files          → list of file metadata
POST   /download       JSON { "pin": "12345" } → file stream (auto-deletes)
DELETE /delete/<id>    → remove file + metadata

Run:
    pip install -r requirements.txt
    python app.py
"""
import os
import sqlite3
import threading
import time
import random
import uuid
from datetime import datetime
from flask import Flask, request, jsonify, send_file, abort
from flask_cors import CORS
from werkzeug.utils import secure_filename

# ---------- Config ----------
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
UPLOAD_DIR = os.path.join(BASE_DIR, "uploads")
DB_PATH = os.path.join(BASE_DIR, "database", "secureshare.db")
ALLOWED_EXT = {"pdf", "png", "jpg", "jpeg", "docx", "txt"}
BLOCKED_EXT = {"exe", "bat", "sh", "msi", "cmd", "scr"}
MAX_BYTES = 50 * 1024 * 1024   # 50 MB
DELETE_AFTER_DOWNLOAD_SECS = 5 # auto-delete shortly after download

os.makedirs(UPLOAD_DIR, exist_ok=True)
os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)

app = Flask(__name__)
app.config["MAX_CONTENT_LENGTH"] = MAX_BYTES
CORS(app)  # allow the React dev server

# ---------- DB helpers ----------
def db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    with db() as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS files (
                id           INTEGER PRIMARY KEY AUTOINCREMENT,
                filename     TEXT    NOT NULL,
                stored_name  TEXT    NOT NULL,
                size         INTEGER NOT NULL,
                uploaded_at  TEXT    NOT NULL,
                pin          TEXT    NOT NULL UNIQUE
            )
        """)

init_db()

# ---------- Utils ----------
def is_allowed(filename: str) -> bool:
    ext = filename.rsplit(".", 1)[-1].lower() if "." in filename else ""
    return ext in ALLOWED_EXT and ext not in BLOCKED_EXT

def generate_pin() -> str:
    """Generate a unique 5-digit PIN not currently in the DB."""
    with db() as conn:
        for _ in range(50):
            pin = f"{random.randint(0, 99999):05d}"
            row = conn.execute("SELECT 1 FROM files WHERE pin = ?", (pin,)).fetchone()
            if not row:
                return pin
    raise RuntimeError("Could not generate a unique PIN")

def row_to_dict(row: sqlite3.Row) -> dict:
    return {
        "id": row["id"],
        "filename": row["filename"],
        "size": row["size"],
        "uploaded_at": row["uploaded_at"],
        "pin": row["pin"],
    }

def delete_file_record(file_id: int):
    """Remove DB row + file from disk. Safe to call multiple times."""
    with db() as conn:
        row = conn.execute("SELECT stored_name FROM files WHERE id = ?", (file_id,)).fetchone()
        if not row:
            return
        path = os.path.join(UPLOAD_DIR, row["stored_name"])
        try:
            if os.path.exists(path):
                os.remove(path)
        except OSError:
            pass
        conn.execute("DELETE FROM files WHERE id = ?", (file_id,))

def schedule_deletion(file_id: int, delay: int = DELETE_AFTER_DOWNLOAD_SECS):
    """Delete the file after `delay` seconds in a background thread."""
    def _run():
        time.sleep(delay)
        delete_file_record(file_id)
    threading.Thread(target=_run, daemon=True).start()

# ---------- Routes ----------
@app.route("/")
def health():
    return {"app": "SecureShare", "status": "ok"}

@app.post("/upload")
def upload():
    if "file" not in request.files:
        return jsonify({"error": "No file provided"}), 400
    f = request.files["file"]
    if not f or not f.filename:
        return jsonify({"error": "Empty filename"}), 400
    if not is_allowed(f.filename):
        return jsonify({"error": "File type not allowed"}), 400

    safe = secure_filename(f.filename)
    stored = f"{uuid.uuid4().hex}_{safe}"
    path = os.path.join(UPLOAD_DIR, stored)
    f.save(path)
    size = os.path.getsize(path)

    pin = generate_pin()
    uploaded_at = datetime.utcnow().isoformat() + "Z"

    with db() as conn:
        cur = conn.execute(
            "INSERT INTO files (filename, stored_name, size, uploaded_at, pin) VALUES (?,?,?,?,?)",
            (safe, stored, size, uploaded_at, pin),
        )
        file_id = cur.lastrowid

    return jsonify({
        "id": file_id,
        "filename": safe,
        "size": size,
        "uploaded_at": uploaded_at,
        "pin": pin,
    }), 201

@app.get("/files")
def list_files():
    with db() as conn:
        rows = conn.execute("SELECT * FROM files ORDER BY id DESC").fetchall()
    return jsonify([row_to_dict(r) for r in rows])

@app.post("/download")
def download_by_pin():
    data = request.get_json(silent=True) or {}
    pin = str(data.get("pin", "")).strip()
    if not pin.isdigit() or len(pin) != 5:
        return jsonify({"error": "PIN must be 5 digits"}), 400

    with db() as conn:
        row = conn.execute("SELECT * FROM files WHERE pin = ?", (pin,)).fetchone()
    if not row:
        return jsonify({"error": "Invalid PIN"}), 404

    path = os.path.join(UPLOAD_DIR, row["stored_name"])
    if not os.path.exists(path):
        delete_file_record(row["id"])
        return jsonify({"error": "File no longer available"}), 410

    # Auto-delete shortly after the response is sent
    schedule_deletion(row["id"])
    return send_file(path, as_attachment=True, download_name=row["filename"])

@app.delete("/delete/<int:file_id>")
def delete_file(file_id: int):
    delete_file_record(file_id)
    return jsonify({"ok": True})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
