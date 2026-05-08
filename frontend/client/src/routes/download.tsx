import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ApiClient } from "@/lib/api";
import { toast } from "sonner";
import { Download, KeyRound, Loader2 } from "lucide-react";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title: "Enter PIN — SecureShare" },
      { name: "description", content: "Enter a 5-digit PIN to download a shared file." },
    ],
  }),
  component: DownloadPage,
});

function DownloadPage() {
  const [digits, setDigits] = useState<string[]>(["", "", "", "", ""]);
  const [busy, setBusy] = useState(false);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const setAt = (i: number, v: string) => {
    const clean = v.replace(/\D/g, "").slice(-1);
    const next = [...digits];
    next[i] = clean;
    setDigits(next);
    if (clean && i < 4) inputs.current[i + 1]?.focus();
  };

  const handleKey = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !digits[i] && i > 0) {
      inputs.current[i - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
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
      const { blob, filename } = await ApiClient.download(pin);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      toast.success("Download started", {
        description: "The file will be removed from the server shortly.",
      });
      setDigits(["", "", "", "", ""]);
    } catch (err: any) {
      const status = err?.response?.status;
      toast.error(status === 404 ? "Invalid PIN" : "Download failed", {
        description:
          status === 404
            ? "No file found for that PIN. Double-check and try again."
            : err?.message ?? "Try again later.",
      });
    } finally {
      setBusy(false);
    }
  };

  return (
    <section
      className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-6 py-16"
      style={{ background: "var(--gradient-soft)" }}
    >
      <div
        className="w-full max-w-lg rounded-3xl border border-border/60 bg-card p-8 sm:p-10"
        style={{ boxShadow: "var(--shadow-elegant)" }}
      >
        <div
          className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-primary-foreground"
          style={{ background: "var(--gradient-hero)" }}
        >
          <KeyRound className="h-6 w-6" />
        </div>
        <h1 className="text-center text-2xl font-bold tracking-tight">
          Enter your share PIN
        </h1>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Type the 5-digit PIN to download the shared file.
        </p>

        <div
          className="mt-7 flex justify-center gap-2 sm:gap-3"
          onPaste={handlePaste as any}
        >
          {digits.map((d, i) => (
            <input
              key={i}
              ref={(el) => {
                inputs.current[i] = el;
              }}
              value={d}
              inputMode="numeric"
              maxLength={1}
              onChange={(e) => setAt(i, e.target.value)}
              onKeyDown={(e) => handleKey(i, e)}
              onPaste={handlePaste}
              className="h-14 w-12 rounded-xl border border-border bg-background text-center font-mono text-2xl font-bold outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 sm:h-16 sm:w-14 sm:text-3xl"
            />
          ))}
        </div>

        <button
          onClick={submit}
          disabled={busy || digits.join("").length !== 5}
          className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01] disabled:opacity-60 disabled:hover:scale-100"
          style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-elegant)" }}
        >
          {busy ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Download className="h-4 w-4" />
          )}
          {busy ? "Fetching…" : "Download file"}
        </button>

        <p className="mt-5 text-center text-xs text-muted-foreground">
          The file is removed from the server shortly after a successful download.
        </p>
      </div>
    </section>
  );
}