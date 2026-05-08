import { r as reactExports, W as jsxRuntimeExports } from "./server-D9B1kj9V.js";
import { L as LoaderCircle, D as Download, A as ApiClient } from "./api-D7rgo16P.js";
import { t as toast } from "./router-Cwed_ck3.js";
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
function DownloadPage() {
  const [digits, setDigits] = reactExports.useState(["", "", "", "", ""]);
  const [busy, setBusy] = reactExports.useState(false);
  const inputs = reactExports.useRef([]);
  const setAt = (i, v) => {
    const clean = v.replace(/\D/g, "").slice(-1);
    const next = [...digits];
    next[i] = clean;
    setDigits(next);
    if (clean && i < 4) inputs.current[i + 1]?.focus();
  };
  const handleKey = (i, e) => {
    if (e.key === "Backspace" && !digits[i] && i > 0) {
      inputs.current[i - 1]?.focus();
    }
  };
  const handlePaste = (e) => {
    const txt = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 5);
    if (!txt) return;
    e.preventDefault();
    const next = ["", "", "", "", ""];
    for (let i = 0; i < txt.length; i++) next[i] = txt[i];
    setDigits(next);
    inputs.current[Math.min(txt.length, 4)]?.focus();
  };
  const submit = async () => {
    const pin = digits.join("");
    if (pin.length !== 5) {
      toast.error("Please enter all 5 digits");
      return;
    }
    setBusy(true);
    try {
      const {
        blob,
        filename
      } = await ApiClient.download(pin);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      toast.success("Download started", {
        description: "The file will be removed from the server shortly."
      });
      setDigits(["", "", "", "", ""]);
    } catch (err) {
      const status = err?.response?.status;
      toast.error(status === 404 ? "Invalid PIN" : "Download failed", {
        description: status === 404 ? "No file found for that PIN. Double-check and try again." : err?.message ?? "Try again later."
      });
    } finally {
      setBusy(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "flex min-h-[calc(100vh-8rem)] items-center justify-center px-6 py-16", style: {
    background: "var(--gradient-soft)"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-lg rounded-3xl border border-border/60 bg-card p-8 sm:p-10", style: {
    boxShadow: "var(--shadow-elegant)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-primary-foreground", style: {
      background: "var(--gradient-hero)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { className: "h-6 w-6" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-center text-2xl font-bold tracking-tight", children: "Enter your share PIN" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-center text-sm text-muted-foreground", children: "Type the 5-digit PIN to download the shared file." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-7 flex justify-center gap-2 sm:gap-3", onPaste: handlePaste, children: digits.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: (el) => {
      inputs.current[i] = el;
    }, value: d, inputMode: "numeric", maxLength: 1, onChange: (e) => setAt(i, e.target.value), onKeyDown: (e) => handleKey(i, e), onPaste: handlePaste, className: "h-14 w-12 rounded-xl border border-border bg-background text-center font-mono text-2xl font-bold outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 sm:h-16 sm:w-14 sm:text-3xl" }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: submit, disabled: busy || digits.join("").length !== 5, className: "mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01] disabled:opacity-60 disabled:hover:scale-100", style: {
      background: "var(--gradient-hero)",
      boxShadow: "var(--shadow-elegant)"
    }, children: [
      busy ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
      busy ? "Fetching…" : "Download file"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-center text-xs text-muted-foreground", children: "The file is removed from the server shortly after a successful download." })
  ] }) });
}
export {
  DownloadPage as component
};
