import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/5">
        <div className="absolute -left-12 top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-12 top-40 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
        <div className="absolute bottom-20 left-1/3 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 space-y-8 text-center lg:order-1 lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                Available for Opportunities
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                <span className="block text-foreground/80">Hello, I'm</span>
                <span className="block bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent">
                  Mansi Gaike
                </span>
              </h1>

              <div className="space-y-4">
                <p className="mx-auto max-w-lg text-xl leading-relaxed text-muted-foreground sm:text-2xl lg:mx-0">
                  AI &amp; Data Science
                  <span className="text-primary"> with a Business Analytics minor</span>
                </p>
                <p className="mx-auto max-w-md text-base leading-relaxed text-muted-foreground/85 sm:text-lg lg:mx-0">
                  Specializing in end-to-end data systems—from analytics and data engineering to
                  scalable AI integration for real-world impact.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button
                size="lg"
                className="bg-primary px-8 text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary/95 hover:shadow-primary/40"
                asChild
              >
                <a href="#contact">
                  <Mail className="h-4 w-4" />
                  Let's connect
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border/70 bg-background/45 px-8 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5"
                asChild
              >
                <a href="#projects">View my work</a>
              </Button>
            </div>

            <div className="flex justify-center gap-3 lg:justify-start">
              {[
                {
                  href: "https://github.com/gaikemansi03-sketch",
                  label: "GitHub profile",
                  icon: Github,
                },
                {
                  href: "https://www.linkedin.com/in/mansi-gaike-821260316",
                  label: "LinkedIn profile",
                  icon: Linkedin,
                },
                {
                  href: "mailto:mansigaike2006@gmail.com",
                  label: "Email Mansi Gaike",
                  icon: Mail,
                },
              ].map(({ href, label, icon: Icon }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="icon"
                  className="h-11 w-11 rounded-full border border-border/60 bg-background/50 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/10"
                  asChild
                >
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-indigo-500/20 to-pink-500/20 blur-3xl" />
              <div className="animate-float relative rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500/50 p-1 shadow-2xl shadow-indigo-500/20">
                <div className="group relative h-72 w-72 overflow-hidden rounded-[1.35rem] bg-card sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                  <ImageWithFallback
                    src="/profile-photo.jpeg"
                    alt="Mansi Gaike"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/20 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#projects"
          className="absolute -bottom-14 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Scroll to featured projects"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
