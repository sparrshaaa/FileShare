import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ApiClient, FileMeta, formatBytes } from "@/lib/api";
import { Dropzone } from "@/components/upload/Dropzone";
import { FileCard } from "@/components/files/FileCard";
import { PinDisplay } from "@/components/files/PinDisplay";
import { Files, HardDrive, KeyRound, Search, Inbox, Loader2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — SecureShare" },
      { name: "description", content: "Upload files and manage your shared PINs." },
    ],
  }),
  component: Dashboard,
});

function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Files;
  label: string;
  value: string | number;
}) {
  return (
    <div
      className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-5"
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      <div
        className="flex h-11 w-11 items-center justify-center rounded-xl text-primary-foreground"
        style={{ background: "var(--gradient-hero)" }}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}

function Dashboard() {
  const [files, setFiles] = useState<FileMeta[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [latest, setLatest] = useState<FileMeta | null>(null);

  const refresh = async () => {
    try {
      const data = await ApiClient.list();
      setFiles(data);
    } catch (err: any) {
      toast.error("Couldn't load files", {
        description:
          err?.message ?? "Make sure the Flask backend is running on http://localhost:5000",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void refresh();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return files;
    return files.filter(
      (f) => f.filename.toLowerCase().includes(q) || f.pin.includes(q),
    );
  }, [files, query]);

  const totalBytes = files.reduce((sum, f) => sum + f.size, 0);

  return (
    <div
      className="mx-auto max-w-6xl px-6 py-10"
      style={{ background: "var(--gradient-soft)" }}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="mt-1 text-muted-foreground">
          Upload a file to generate a share PIN.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <StatCard icon={Files} label="Total files" value={files.length} />
        <StatCard icon={HardDrive} label="Storage used" value={formatBytes(totalBytes)} />
        <StatCard icon={KeyRound} label="Active PINs" value={files.length} />
      </div>

      {/* Upload */}
      <Dropzone
        onUploaded={(meta) => {
          setLatest(meta);
          setFiles((prev) => [meta, ...prev]);
        }}
      />

      {latest && (
        <div className="mt-6">
          <PinDisplay pin={latest.pin} filename={latest.filename} />
        </div>
      )}

      {/* File list */}
      <div className="mt-12">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-semibold">Recent files</h2>
          <div className="relative w-full sm:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or PIN…"
              className="h-10 w-full rounded-xl border border-border bg-card pl-9 pr-3 text-sm outline-none transition-colors focus:border-primary"
            />
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center rounded-2xl border border-border/60 bg-card py-16 text-muted-foreground">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading files…
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border/80 bg-card/60 py-16 text-center">
            <div
              className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl text-primary-foreground"
              style={{ background: "var(--gradient-hero)" }}
            >
              <Inbox className="h-5 w-5" />
            </div>
            <p className="font-medium">
              {files.length === 0 ? "No files yet" : "No matches"}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {files.length === 0
                ? "Upload your first file to see it here."
                : "Try a different search term."}
            </p>
          </div>
        ) : (
          <div className="grid gap-3">
            {filtered.map((f) => (
              <FileCard
                key={f.id}
                file={f}
                onDeleted={(id) => setFiles((prev) => prev.filter((x) => x.id !== id))}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}