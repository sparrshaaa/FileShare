import {
  Copy,
  Download,
  Trash2,
  FileText,
  FileImage,
  File as FileIcon,
  Eye,
  Loader2,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { ApiClient, FileMeta, formatBytes, formatDate } from "@/lib/api";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

function iconFor(name: string) {
  const ext = name.split(".").pop()?.toLowerCase();
  if (["png", "jpg", "jpeg"].includes(ext ?? "")) return FileImage;
  if (["pdf", "docx", "txt"].includes(ext ?? "")) return FileText;
  return FileIcon;
}

type Props = {
  file: FileMeta;
  onDeleted: (id: number) => void;
};

export function FileCard({ file, onDeleted }: Props) {
  const Icon = iconFor(file.filename);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [previewText, setPreviewText] = useState<string | null>(null);
  const [loadingPreview, setLoadingPreview] = useState(false);
  const [previewError, setPreviewError] = useState<string | null>(null);

  const previewType = useMemo<"image" | "pdf" | "text" | null>(() => {
    const ext = file.filename.split(".").pop()?.toLowerCase();
    if (!ext) return null;
    if (["png", "jpg", "jpeg"].includes(ext)) return "image";
    if (ext === "pdf") return "pdf";
    if (ext === "txt") return "text";
    return null;
  }, [file.filename]);

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
        description: "File will remain available for one hour after download.",
      });
    } catch (err: any) {
      toast.error("Download failed", {
        description: err?.response?.data?.error ?? err?.message,
      });
    }
  };

  const handleDelete = async () => {
    try {
      await ApiClient.remove(file.id);
      toast.success("File deleted");
      onDeleted(file.id);
    } catch (err: any) {
      toast.error("Delete failed", { description: err?.message });
    }
  };

  useEffect(() => {
    let active = true;
    let objectUrl: string | null = null;

    if (!previewOpen || !previewType) {
      return;
    }

    const loadPreview = async () => {
      setLoadingPreview(true);
      setPreviewError(null);
      setPreviewText(null);
      setPreviewUrl(null);

      try {
        const { blob } = await ApiClient.preview(file.pin);

        if (!active) return;

        if (previewType === "text") {
          const text = await blob.text();
          if (active) setPreviewText(text);
        } else {
          objectUrl = URL.createObjectURL(blob);
          if (active) setPreviewUrl(objectUrl);
        }
      } catch (err: any) {
        if (active) {
          setPreviewError(err?.response?.data?.error ?? err?.message ?? "Preview failed");
        }
      } finally {
        if (active) setLoadingPreview(false);
      }
    };

    loadPreview();

    return () => {
      active = false;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
      setPreviewUrl(null);
      setPreviewText(null);
      setPreviewError(null);
      setLoadingPreview(false);
    };
  }, [previewOpen, previewType, file.pin]);

  return (
    <div
      className="group relative flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40"
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-primary-foreground"
        style={{ background: "var(--gradient-hero)" }}
      >
        <Icon className="h-5 w-5" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate font-medium">{file.filename}</p>
        <p className="text-xs text-muted-foreground">
          {formatBytes(file.size)} · {formatDate(file.uploaded_at)}
        </p>
      </div>

      <button
        onClick={copyPin}
        className="hidden items-center gap-2 rounded-xl border border-border bg-secondary/60 px-3 py-2 font-mono text-sm font-semibold tracking-widest text-foreground transition-colors hover:border-primary/40 hover:bg-accent sm:inline-flex"
        title="Copy PIN"
      >
        {file.pin}
        <Copy className="h-3.5 w-3.5 text-muted-foreground" />
      </button>

      <div className="flex items-center gap-1">
        {previewType ? (
          <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
            <DialogTrigger asChild>
              <button
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                title="Preview"
              >
                {loadingPreview ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl w-full">
              <DialogHeader>
                <DialogTitle>Preview: {file.filename}</DialogTitle>
                <DialogDescription>
                  View the file before downloading. Supported formats: images, PDF, text.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 space-y-4">
                {loadingPreview ? (
                  <div className="rounded-xl border border-border bg-background/80 p-10 text-center text-sm text-muted-foreground">
                    Loading preview...
                  </div>
                ) : previewError ? (
                  <div className="rounded-xl border border-destructive/40 bg-destructive/10 p-6 text-sm text-destructive">
                    {previewError}
                  </div>
                ) : previewType === "image" && previewUrl ? (
                  <img
                    src={previewUrl}
                    alt={file.filename}
                    className="mx-auto max-h-[60vh] w-full max-w-full rounded-xl border border-border object-contain"
                  />
                ) : previewType === "pdf" && previewUrl ? (
                  <iframe
                    src={previewUrl}
                    title={file.filename}
                    className="h-[60vh] w-full rounded-xl border border-border"
                  />
                ) : previewType === "text" && previewText ? (
                  <pre className="max-h-[60vh] overflow-auto rounded-xl border border-border bg-background p-4 text-sm text-foreground">
                    {previewText}
                  </pre>
                ) : (
                  <div className="rounded-xl border border-border/70 bg-background/80 p-6 text-sm text-muted-foreground">
                    Preview is not available for this file type.
                  </div>
                )}
              </div>
              <DialogClose asChild>
                <button className="mt-4 inline-flex items-center justify-center rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground">
                  Close
                </button>
              </DialogClose>
            </DialogContent>
          </Dialog>
        ) : null}

        <button
          onClick={handleDownload}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          title="Download"
        >
          <Download className="h-4 w-4" />
        </button>
        <button
          onClick={handleDelete}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
          title="Delete"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
