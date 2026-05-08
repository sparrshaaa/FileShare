import { Copy, Download, Trash2, FileText, FileImage, File as FileIcon } from "lucide-react";
import { toast } from "sonner";
import { ApiClient, FileMeta, formatBytes, formatDate } from "@/lib/api";

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
        description: "File will be removed shortly.",
      });
      // Backend deletes after a short delay; refresh-aware parent handles list.
      setTimeout(() => onDeleted(file.id), 1500);
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