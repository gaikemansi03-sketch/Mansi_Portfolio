import { useState } from "react";
import { ArrowUp, Menu, X } from "lucide-react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { ThemeProvider } from "./components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";
import { Button } from "./components/ui/button";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="relative isolate min-h-screen overflow-x-clip bg-background text-foreground transition-colors duration-300">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          <div className="animate-ambient absolute -top-40 left-1/2 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/15 via-purple-500/15 to-pink-500/10 blur-[130px] dark:from-indigo-500/20 dark:via-purple-600/15 dark:to-transparent" />
          <div className="animate-ambient-delayed absolute top-1/2 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px] dark:bg-cyan-500/15" />
          <div className="animate-ambient absolute -bottom-40 right-0 h-[500px] w-[600px] rounded-full bg-indigo-500/10 blur-[140px] dark:bg-indigo-600/15" />
        </div>

        <nav
          className="sticky top-4 z-50 mx-auto max-w-5xl px-4"
          aria-label="Main navigation"
        >
          <div className="relative flex items-center justify-between rounded-2xl border border-border/50 bg-background/70 px-4 py-3 shadow-lg shadow-black/5 backdrop-blur-xl transition-all duration-300 dark:shadow-black/20 sm:px-6">
            <a href="#home" className="shrink-0 font-semibold tracking-tight">
              Mansi Gaike
            </a>

            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
              <div className="ml-2 border-l border-border/70 pl-3">
                <ThemeToggle />
              </div>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                aria-label={
                  mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>

            {mobileMenuOpen && (
              <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] rounded-2xl border border-border/50 bg-background/90 p-2 shadow-xl backdrop-blur-xl md:hidden">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        <main className="relative z-10">
          <div id="home" className="scroll-mt-24">
            <Hero />
          </div>
          <div id="projects" className="scroll-mt-24">
            <Projects />
          </div>
          <div id="skills" className="scroll-mt-24">
            <Skills />
          </div>
          <div id="about" className="scroll-mt-24">
            <About />
          </div>
          <div id="contact" className="scroll-mt-24">
            <Contact />
          </div>
        </main>

        <footer className="relative z-10 border-t border-border/60 bg-background/40 px-4 py-6 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Mansi Gaike. All rights reserved.
            </p>
            <a
              href="#home"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-accent/60"
            >
              Back to top <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
