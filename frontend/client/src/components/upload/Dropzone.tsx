import { useCallback, useRef, useState } from "react";
import { UploadCloud, FileCheck2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { ApiClient, FileMeta, formatBytes, isAllowed, ALLOWED_EXT } from "@/lib/api";
import { cn } from "@/lib/utils";

type Props = {
  onUploaded: (file: FileMeta) => void;
};

export function Dropzone({ onUploaded }: Props) {
  const [dragOver, setDragOver] = useState(false);
  const [progress, setProgress] = useState<number | null>(null);
  const [currentName, setCurrentName] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = useCallback(
    async (files: FileList | null) => {
      if (!files || files.length === 0) return;
      const file = files[0];
      if (!isAllowed(file.name)) {
        toast.error("File type not allowed", {
          description: `Allowed: ${ALLOWED_EXT.join(", ").toUpperCase()}`,
        });
        return;
      }
      try {
        setCurrentName(file.name);
        setProgress(0);
        const meta = await ApiClient.upload(file, (p) => setProgress(p));
        toast.success("File uploaded", {
          description: `Share PIN: ${meta.pin}`,
        });
        onUploaded(meta);
      } catch (err: any) {
        toast.error("Upload failed", {
          description: err?.response?.data?.error ?? err?.message ?? "Unknown error",
        });
      } finally {
        setProgress(null);
        setCurrentName("");
        if (inputRef.current) inputRef.current.value = "";
      }
    },
    [onUploaded],
  );

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragOver(false);
        void handleFiles(e.dataTransfer.files);
      }}
      className={cn(
        "relative flex flex-col items-center justify-center rounded-3xl border-2 border-dashed p-10 text-center transition-all",
        "bg-card shadow-[var(--shadow-soft)]",
        dragOver
          ? "border-primary bg-accent/40 scale-[1.01]"
          : "border-border hover:border-primary/60 hover:bg-accent/20",
      )}
      style={dragOver ? { boxShadow: "var(--shadow-glow)" } : undefined}
    >
      <div
        className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl text-primary-foreground"
        style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-elegant)" }}
      >
        {progress !== null ? (
          <Loader2 className="h-7 w-7 animate-spin" />
        ) : (
          <UploadCloud className="h-7 w-7" />
        )}
      </div>

      {progress === null ? (
        <>
          <h3 className="text-lg font-semibold">Drop your file here</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            or click to browse — PDF, PNG, JPG, DOCX, TXT
          </p>
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="mt-5 inline-flex h-10 items-center rounded-xl px-5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            style={{ background: "var(--gradient-hero)" }}
          >
            Choose file
          </button>
        </>
      ) : (
        <div className="w-full max-w-md">
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <FileCheck2 className="h-4 w-4 text-primary" />
            <span className="truncate">{currentName}</span>
          </div>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full transition-all"
              style={{ width: `${progress}%`, background: "var(--gradient-hero)" }}
            />
          </div>
          <p className="mt-2 text-xs text-muted-foreground">{progress}% uploaded</p>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.png,.jpg,.jpeg,.docx,.txt"
        className="hidden"
        onChange={(e) => void handleFiles(e.target.files)}
      />

      <p className="mt-4 text-xs text-muted-foreground">
        Max one file at a time · {formatBytes(50 * 1024 * 1024)} limit
      </p>
    </div>
  );
}