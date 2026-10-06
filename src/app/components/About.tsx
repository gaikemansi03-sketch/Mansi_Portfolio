import { Sparkles } from "lucide-react";

export function About() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border/50 bg-card/50 px-6 py-12 text-center shadow-xl shadow-black/[0.03] backdrop-blur-md sm:px-12 sm:py-16 dark:shadow-black/10">
        <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl space-y-6">
          <span className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-primary">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              A little about me
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">About Me</h2>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I enjoy working across the whole development process—from structuring backend logic and
            database queries to building clean, responsive interfaces with React. My focus is
            always on making software that is reliable, easy to navigate, and solves practical
            problems.
          </p>
        </div>
      </div>
    </section>
  );
}
