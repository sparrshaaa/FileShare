import { W as jsxRuntimeExports } from "./server-D9B1kj9V.js";
import { c as createLucideIcon, S as ShieldCheck, L as Link } from "./router-Cwed_ck3.js";
import { K as KeyRound } from "./key-round-CEwv0Bd9.js";
import { T as Trash2 } from "./trash-2-Dd90WZCS.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
];
const Upload = createLucideIcon("upload", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
const features = [{
  icon: Upload,
  title: "Drag & drop uploads",
  desc: "Modern uploader with progress, validation, and instant feedback."
}, {
  icon: KeyRound,
  title: "Unique 5-digit PIN",
  desc: "Each file gets a memorable PIN — share it instead of long links."
}, {
  icon: Trash2,
  title: "Auto-delete after download",
  desc: "Files are removed shortly after the recipient downloads them."
}, {
  icon: ShieldCheck,
  title: "File-type guardrails",
  desc: "Allow-list of safe formats. Executables and scripts are rejected."
}, {
  icon: Zap,
  title: "Fast & lightweight",
  desc: "Tiny Flask backend, SQLite storage, snappy React dashboard."
}];
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", style: {
      background: "var(--gradient-soft)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full opacity-30 blur-3xl", style: {
        background: "var(--gradient-hero)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-6xl px-6 pt-20 pb-24 text-center sm:pt-28 sm:pb-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3.5 w-3.5 text-primary" }),
          "Secure file sharing made simple"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-balance text-5xl font-bold tracking-tight sm:text-6xl", children: [
          "Share files with a",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-clip-text text-transparent", style: {
            backgroundImage: "var(--gradient-hero)"
          }, children: "5-digit PIN" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-2xl text-pretty text-lg text-muted-foreground", children: "Upload a file, get a unique PIN, share it. Your recipient enters the PIN to download — and the file is removed automatically. No signups, no clutter." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/dashboard", className: "inline-flex h-12 items-center gap-2 rounded-2xl px-6 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]", style: {
            background: "var(--gradient-hero)",
            boxShadow: "var(--shadow-elegant)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4" }),
            "Upload a file"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/download", className: "inline-flex h-12 items-center gap-2 rounded-2xl border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-accent", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { className: "h-4 w-4" }),
            "I have a PIN",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold tracking-tight sm:text-4xl", children: "Everything you need to share, nothing you don't" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-xl text-muted-foreground", children: "A focused toolkit for quick, safe file transfers." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-2xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40", style: {
        boxShadow: "var(--shadow-soft)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-primary-foreground transition-transform group-hover:scale-110", style: {
          background: "var(--gradient-hero)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: f.desc })
      ] }, f.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-6xl px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl p-10 text-center text-primary-foreground sm:p-14", style: {
      background: "var(--gradient-hero)",
      boxShadow: "var(--shadow-elegant)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold tracking-tight sm:text-4xl", children: "Ready to share your first file?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-xl text-base opacity-90", children: "Drop a PDF, image, or document and get your PIN in seconds." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/dashboard", className: "mt-7 inline-flex h-12 items-center gap-2 rounded-2xl bg-background px-6 text-sm font-semibold text-foreground transition-transform hover:scale-[1.03]", children: [
        "Open dashboard ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }) })
  ] });
}
export {
  Index as component
};
