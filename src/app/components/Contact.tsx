import { type FormEvent } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const email = "mansigaike2006@gmail.com";

export function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = String(formData.get("subject") || "Portfolio inquiry");
    const body = [
      `From: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      "",
      String(formData.get("message")),
    ].join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Let’s connect
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Let’s Work Together
          </h2>
          <p className="mx-auto max-w-2xl leading-relaxed text-muted-foreground">
            Always open to discussing data engineering challenges, AI integrations, or internship
            and full-time opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          <div className="space-y-4">
            <a
              href={`mailto:${email}`}
              className="group flex items-center gap-4 rounded-2xl border border-border/50 bg-card/50 p-5 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-medium">Email</span>
                <span className="block truncate text-sm text-muted-foreground transition-colors group-hover:text-primary">
                  {email}
                </span>
              </span>
            </a>

            <div className="rounded-2xl border border-border/50 bg-card/50 p-5 backdrop-blur-md">
              <p className="mb-4 text-sm font-medium">Find me online</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/mansi-gaike-821260316"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-primary/5"
                >
                  <Linkedin className="h-4 w-4 text-primary" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/gaikemansi03-sketch"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-primary/5"
                >
                  <Github className="h-4 w-4 text-primary" />
                  GitHub
                </a>
              </div>
            </div>

            <p className="px-1 text-sm leading-relaxed text-muted-foreground">
              Prefer a quick note? Use the form and your email app will open with a message ready
              to send.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-border/50 bg-card/60 p-5 shadow-lg shadow-black/[0.03] backdrop-blur-md sm:p-7 dark:shadow-black/10"
          >
            <div>
              <h3 className="text-lg font-semibold">Send a message</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                I’ll be glad to hear what you’re building.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-sm font-medium">
                  Your name
                </label>
                <Input
                  id="contact-name"
                  name="name"
                  placeholder="Jane Smith"
                  autoComplete="name"
                  required
                  className="h-11 rounded-xl border-border/60 bg-background/40 backdrop-blur-sm transition-all focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-sm font-medium">
                  Your email
                </label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  autoComplete="email"
                  required
                  className="h-11 rounded-xl border-border/60 bg-background/40 backdrop-blur-sm transition-all focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-subject" className="text-sm font-medium">
                Subject
              </label>
              <Input
                id="contact-subject"
                name="subject"
                placeholder="How can I help?"
                className="h-11 rounded-xl border-border/60 bg-background/40 backdrop-blur-sm transition-all focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="contact-message"
                name="message"
                placeholder="Tell me a little about your project or opportunity..."
                rows={5}
                required
                className="min-h-32 rounded-xl border-border/60 bg-background/40 backdrop-blur-sm transition-all focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full rounded-xl shadow-md shadow-primary/15 transition-all hover:-translate-y-0.5 hover:shadow-primary/25"
            >
              <Send className="h-4 w-4" />
              Open email draft
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
