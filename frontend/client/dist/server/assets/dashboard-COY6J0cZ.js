import { r as reactExports, W as jsxRuntimeExports } from "./server-D9B1kj9V.js";
import { i as isAllowed, a as ALLOWED_EXT, A as ApiClient, L as LoaderCircle, f as formatBytes, b as formatDate, D as Download } from "./api-D7rgo16P.js";
import { c as createLucideIcon, t as toast, a as cn } from "./router-Cwed_ck3.js";
import { T as Trash2 } from "./trash-2-Dd90WZCS.js";
import { K as KeyRound } from "./key-round-CEwv0Bd9.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "util";
import "stream";
import "path";
import "http";
import "https";
import "url";
import "fs";
import "crypto";
import "http2";
import "assert";
import "./worker-entry-Bys9IdqU.js";
import "node:events";
import "os";
import "zlib";
import "events";
const __iconNode$a = [
  ["path", { d: "M12 13v8", key: "1l5pq0" }],
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }]
];
const CloudUpload = createLucideIcon("cloud-upload", __iconNode$a);
const __iconNode$9 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
const Copy = createLucideIcon("copy", __iconNode$9);
const __iconNode$8 = [
  [
    "path",
    {
      d: "M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6",
      key: "g5mvt7"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "m14 20 2 2 4-4", key: "15kota" }]
];
const FileCheckCorner = createLucideIcon("file-check-corner", __iconNode$8);
const __iconNode$7 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["circle", { cx: "10", cy: "12", r: "2", key: "737tya" }],
  ["path", { d: "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22", key: "wt3hpn" }]
];
const FileImage = createLucideIcon("file-image", __iconNode$7);
const __iconNode$6 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
const FileText = createLucideIcon("file-text", __iconNode$6);
const __iconNode$5 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }]
];
const File = createLucideIcon("file", __iconNode$5);
const __iconNode$4 = [
  ["path", { d: "M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8", key: "14sh0y" }],
  [
    "path",
    {
      d: "M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z",
      key: "1970lx"
    }
  ],
  ["path", { d: "M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1", key: "l4dndm" }]
];
const Files = createLucideIcon("files", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M10 16h.01", key: "1bzywj" }],
  [
    "path",
    {
      d: "M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "18tbho"
    }
  ],
  ["path", { d: "M21.946 12.013H2.054", key: "zqlbp7" }],
  ["path", { d: "M6 16h.01", key: "1pmjb7" }]
];
const HardDrive = createLucideIcon("hard-drive", __iconNode$3);
const __iconNode$2 = [
  ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr"
    }
  ]
];
const Inbox = createLucideIcon("inbox", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode);
function Dropzone({ onUploaded }) {
  const [dragOver, setDragOver] = reactExports.useState(false);
  const [progress, setProgress] = reactExports.useState(null);
  const [currentName, setCurrentName] = reactExports.useState("");
  const inputRef = reactExports.useRef(null);
  const handleFiles = reactExports.useCallback(
    async (files) => {
      if (!files || files.length === 0) return;
      const file = files[0];
      if (!isAllowed(file.name)) {
        toast.error("File type not allowed", {
          description: `Allowed: ${ALLOWED_EXT.join(", ").toUpperCase()}`
        });
        return;
      }
      try {
        setCurrentName(file.name);
        setProgress(0);
        const meta = await ApiClient.upload(file, (p) => setProgress(p));
        toast.success("File uploaded", {
          description: `Share PIN: ${meta.pin}`
        });
        onUploaded(meta);
      } catch (err) {
        toast.error("Upload failed", {
          description: err?.response?.data?.error ?? err?.message ?? "Unknown error"
        });
      } finally {
        setProgress(null);
        setCurrentName("");
        if (inputRef.current) inputRef.current.value = "";
      }
    },
    [onUploaded]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      onDragOver: (e) => {
        e.preventDefault();
        setDragOver(true);
      },
      onDragLeave: () => setDragOver(false),
      onDrop: (e) => {
        e.preventDefault();
        setDragOver(false);
        void handleFiles(e.dataTransfer.files);
      },
      className: cn(
        "relative flex flex-col items-center justify-center rounded-3xl border-2 border-dashed p-10 text-center transition-all",
        "bg-card shadow-[var(--shadow-soft)]",
        dragOver ? "border-primary bg-accent/40 scale-[1.01]" : "border-border hover:border-primary/60 hover:bg-accent/20"
      ),
      style: dragOver ? { boxShadow: "var(--shadow-glow)" } : void 0,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "mb-4 flex h-16 w-16 items-center justify-center rounded-2xl text-primary-foreground",
            style: { background: "var(--gradient-hero)", boxShadow: "var(--shadow-elegant)" },
            children: progress !== null ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-7 w-7 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CloudUpload, { className: "h-7 w-7" })
          }
        ),
        progress === null ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Drop your file here" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "or click to browse — PDF, PNG, JPG, DOCX, TXT" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => inputRef.current?.click(),
              className: "mt-5 inline-flex h-10 items-center rounded-xl px-5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]",
              style: { background: "var(--gradient-hero)" },
              children: "Choose file"
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 text-sm font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileCheckCorner, { className: "h-4 w-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: currentName })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-full rounded-full transition-all",
              style: { width: `${progress}%`, background: "var(--gradient-hero)" }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs text-muted-foreground", children: [
            progress,
            "% uploaded"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: inputRef,
            type: "file",
            accept: ".pdf,.png,.jpg,.jpeg,.docx,.txt",
            className: "hidden",
            onChange: (e) => void handleFiles(e.target.files)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-xs text-muted-foreground", children: [
          "Max one file at a time · ",
          formatBytes(50 * 1024 * 1024),
          " limit"
        ] })
      ]
    }
  );
}
function iconFor(name) {
  const ext = name.split(".").pop()?.toLowerCase();
  if (["png", "jpg", "jpeg"].includes(ext ?? "")) return FileImage;
  if (["pdf", "docx", "txt"].includes(ext ?? "")) return FileText;
  return File;
}
function FileCard({ file, onDeleted }) {
  const Icon = iconFor(file.filename);
  const copyPin = async () => {
    try {
      await navigator.clipboard.writeText(file.pin);
      toast.success("PIN copied", { description: file.pin });
    } catch {
      toast.error("Couldn't copy PIN");
    }
  };
  const handleDownload = async () => {
    try {
      const { blob, filename } = await ApiClient.download(file.pin);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      toast.success("Download started", {
        description: "File will be removed shortly."
      });
      setTimeout(() => onDeleted(file.id), 1500);
    } catch (err) {
      toast.error("Download failed", {
        description: err?.response?.data?.error ?? err?.message
      });
    }
  };
  const handleDelete = async () => {
    try {
      await ApiClient.remove(file.id);
      toast.success("File deleted");
      onDeleted(file.id);
    } catch (err) {
      toast.error("Delete failed", { description: err?.message });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "group relative flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40",
      style: { boxShadow: "var(--shadow-soft)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-primary-foreground",
            style: { background: "var(--gradient-hero)" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate font-medium", children: file.filename }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            formatBytes(file.size),
            " · ",
            formatDate(file.uploaded_at)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: copyPin,
            className: "hidden items-center gap-2 rounded-xl border border-border bg-secondary/60 px-3 py-2 font-mono text-sm font-semibold tracking-widest text-foreground transition-colors hover:border-primary/40 hover:bg-accent sm:inline-flex",
            title: "Copy PIN",
            children: [
              file.pin,
              /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3.5 w-3.5 text-muted-foreground" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleDownload,
              className: "inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
              title: "Download",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleDelete,
              className: "inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive",
              title: "Delete",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" })
            }
          )
        ] })
      ]
    }
  );
}
function PinDisplay({ pin, filename }) {
  const copy = async () => {
    await navigator.clipboard.writeText(pin);
    toast.success("PIN copied to clipboard");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-2xl border border-primary/20 p-6 text-center",
      style: { background: "var(--gradient-card)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 inline-flex items-center gap-1 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
          " Your share PIN"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "Anyone with this PIN can download ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: filename })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: copy,
            className: "mx-auto mt-4 flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-3 font-mono text-3xl font-bold tracking-[0.4em] shadow-[var(--shadow-soft)] transition-all hover:scale-[1.02]",
            children: [
              pin,
              /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-5 w-5 text-muted-foreground" })
            ]
          }
        )
      ]
    }
  );
}
function StatCard({
  icon: Icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-5", style: {
    boxShadow: "var(--shadow-soft)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-xl text-primary-foreground", style: {
      background: "var(--gradient-hero)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wide text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: value })
    ] })
  ] });
}
function Dashboard() {
  const [files, setFiles] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [query, setQuery] = reactExports.useState("");
  const [latest, setLatest] = reactExports.useState(null);
  const refresh = async () => {
    try {
      const data = await ApiClient.list();
      setFiles(data);
    } catch (err) {
      toast.error("Couldn't load files", {
        description: err?.message ?? "Make sure the Flask backend is running on http://localhost:5000"
      });
    } finally {
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
    void refresh();
  }, []);
  const filtered = reactExports.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return files;
    return files.filter((f) => f.filename.toLowerCase().includes(q) || f.pin.includes(q));
  }, [files, query]);
  const totalBytes = files.reduce((sum, f) => sum + f.size, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 py-10", style: {
    background: "var(--gradient-soft)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Dashboard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-muted-foreground", children: "Upload a file to generate a share PIN." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 grid gap-4 sm:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: Files, label: "Total files", value: files.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: HardDrive, label: "Storage used", value: formatBytes(totalBytes) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: KeyRound, label: "Active PINs", value: files.length })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dropzone, { onUploaded: (meta) => {
      setLatest(meta);
      setFiles((prev) => [meta, ...prev]);
    } }),
    latest && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PinDisplay, { pin: latest.pin, filename: latest.filename }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold", children: "Recent files" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full sm:w-72", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Search by name or PIN…", className: "h-10 w-full rounded-xl border border-border bg-card pl-9 pr-3 text-sm outline-none transition-colors focus:border-primary" })
        ] })
      ] }),
      loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center rounded-2xl border border-border/60 bg-card py-16 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
        " Loading files…"
      ] }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center rounded-2xl border border-dashed border-border/80 bg-card/60 py-16 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 flex h-12 w-12 items-center justify-center rounded-2xl text-primary-foreground", style: {
          background: "var(--gradient-hero)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: files.length === 0 ? "No files yet" : "No matches" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: files.length === 0 ? "Upload your first file to see it here." : "Try a different search term." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3", children: filtered.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(FileCard, { file: f, onDeleted: (id) => setFiles((prev) => prev.filter((x) => x.id !== id)) }, f.id)) })
    ] })
  ] });
}
export {
  Dashboard as component
};
