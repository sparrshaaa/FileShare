# SecureShare — Flask Backend

Tiny Flask + SQLite backend for the SecureShare React app.

## Setup

```bash
cd secureshare-backend
python -m venv .venv
source .venv/bin/activate    # Windows: .venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

Server runs on **http://localhost:5000**.

## Folder layout

```
secureshare-backend/
├── app.py
├── requirements.txt
├── uploads/                 # uploaded files (auto-created)
└── database/secureshare.db  # SQLite DB (auto-created)
```

## API

| Method | Path             | Body                | Response                                              |
|--------|------------------|---------------------|-------------------------------------------------------|
| POST   | `/upload`        | multipart `file`    | `{id, filename, size, uploaded_at, pin}`              |
| GET    | `/files`         | —                   | array of file metadata                                |
| POST   | `/download`      | `{ "pin": "12345" }`| file stream (auto-deleted ~5s later)                  |
| DELETE | `/delete/<id>`   | —                   | `{ "ok": true }`                                      |

Allowed: PDF, PNG, JPG, JPEG, DOCX, TXT. Blocked: EXE/BAT/SH/MSI/CMD/SCR. Max 50 MB.

## Connect the React frontend

Set the API URL when running the Vite dev server:

```bash
VITE_API_URL=http://localhost:5000 npm run dev
```
