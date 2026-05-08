import { Copy, Sparkles } from "lucide-react";
import { toast } from "sonner";

export function PinDisplay({ pin, filename }: { pin: string; filename: string }) {
  const copy = async () => {
    await navigator.clipboard.writeText(pin);
    toast.success("PIN copied to clipboard");
  };

  return (
    <div
      className="rounded-2xl border border-primary/20 p-6 text-center"
      style={{ background: "var(--gradient-card)" }}
    >
      <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-primary">
        <Sparkles className="h-3 w-3" /> Your share PIN
      </div>
      <p className="text-sm text-muted-foreground">
        Anyone with this PIN can download <span className="font-medium text-foreground">{filename}</span>
      </p>

      <button
        onClick={copy}
        className="mx-auto mt-4 flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-3 font-mono text-3xl font-bold tracking-[0.4em] shadow-[var(--shadow-soft)] transition-all hover:scale-[1.02]"
      >
        {pin}
        <Copy className="h-5 w-5 text-muted-foreground" />
      </button>
    </div>
  );
}