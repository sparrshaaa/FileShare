import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, KeyRound, ShieldCheck, Trash2, Upload, Zap } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const features = [
  {
    icon: Upload,
    title: "Drag & drop uploads",
    desc: "Modern uploader with progress, validation, and instant feedback.",
  },
  {
    icon: KeyRound,
    title: "Unique 5-digit PIN",
    desc: "Each file gets a memorable PIN — share it instead of long links.",
  },
  {
    icon: Trash2,
    title: "Auto-delete after download",
    desc: "Files are removed shortly after the recipient downloads them.",
  },
  {
    icon: ShieldCheck,
    title: "File-type guardrails",
    desc: "Allow-list of safe formats. Executables and scripts are rejected.",
  },
  {
    icon: Zap,
    title: "Fast & lightweight",
    desc: "Tiny Flask backend, SQLite storage, snappy React dashboard.",
  },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-soft)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 text-center sm:pt-28 sm:pb-32">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            Secure file sharing made simple
          </div>
          <h1 className="mt-6 text-balance text-5xl font-bold tracking-tight sm:text-6xl">
            Share files with a{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-hero)" }}
            >
              5-digit PIN
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-muted-foreground">
            Upload a file, get a unique PIN, share it. Your recipient enters the PIN to download — and the file is removed automatically. No signups, no clutter.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/dashboard"
              className="inline-flex h-12 items-center gap-2 rounded-2xl px-6 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-elegant)" }}
            >
              <Upload className="h-4 w-4" />
              Upload a file
            </Link>
            <Link
              to="/download"
              className="inline-flex h-12 items-center gap-2 rounded-2xl border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-accent"
            >
              <KeyRound className="h-4 w-4" />
              I have a PIN
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to share, nothing you don't
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            A focused toolkit for quick, safe file transfers.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div
                className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-primary-foreground transition-transform group-hover:scale-110"
                style={{ background: "var(--gradient-hero)" }}
              >
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div
          className="relative overflow-hidden rounded-3xl p-10 text-center text-primary-foreground sm:p-14"
          style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-elegant)" }}
        >
          <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to share your first file?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-base opacity-90">
            Drop a PDF, image, or document and get your PIN in seconds.
          </p>
          <Link
            to="/dashboard"
            className="mt-7 inline-flex h-12 items-center gap-2 rounded-2xl bg-background px-6 text-sm font-semibold text-foreground transition-transform hover:scale-[1.03]"
          >
            Open dashboard <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
