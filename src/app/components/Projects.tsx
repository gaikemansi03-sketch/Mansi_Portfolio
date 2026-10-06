import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function Projects() {
  const projects = [
    {
      title: "Aurangabad Quick-Commerce & Dark Store Ecosystem",
      description:
        "A collaborative quick-commerce platform connecting customer orders with a dark-store operations dashboard. Features geospatial store assignment, live order and courier tracking, demand forecasting, and inventory analytics.",
      image:
        "https://raw.githubusercontent.com/NeelBelsare/my-dark-store-app/main/docs/screenshots/02_command_center_telemetry.png",
      technologies: [
        "Python",
        "Streamlit",
        "FastAPI",
        "Supabase",
        "PostgreSQL/PostGIS",
        "React Native",
        "Flutter",
      ],
      github: "https://github.com/NeelBelsare/my-dark-store-app",
      demo: "https://blinkit-aurangabad.netlify.app/",
    },
    {
      title: "Inventory Flow Engine",
      description:
        "A collaborative inventory analytics platform that turns Excel and CSV stock reports into actionable insights. It calculates available stock, estimates runout time, flags stockout risk against supplier lead times, and prioritizes replenishment actions in an interactive dashboard.",
      image:
        "https://raw.githubusercontent.com/gaikemansi03-sketch/inventory-flow-engine/1c5488678fb8923e82b98174764015473e44fe08/docs/screenshots/dashboard_overview.jpg",
      technologies: [
        "React",
        "Flask",
        "Python",
        "Supabase",
        "PostgreSQL",
        "Pandas",
        "SheetJS",
      ],
      github: "https://github.com/gaikemansi03-sketch/inventory-flow-engine",
    },
  ];

  return (
    <section className="bg-secondary/10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Selected work
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Featured Projects</h2>
          <p className="mx-auto max-w-2xl leading-relaxed text-muted-foreground">
            A showcase of data engineering, spatial intelligence, and production-minded
            applications built to solve real-world problems.
          </p>
        </div>

        <div
          className={
            projects.length === 1
              ? "mx-auto max-w-2xl"
                : "grid grid-cols-1 items-stretch gap-8 md:grid-cols-2"
          }
        >
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/60 shadow-lg shadow-black/[0.03] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 dark:shadow-black/10"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <ImageWithFallback
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70" />
              </div>

              <div className="flex flex-1 flex-col space-y-5 p-6 sm:p-8">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold leading-snug tracking-tight sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <Badge
                      key={technology}
                      variant="secondary"
                      className="rounded-full border border-border/50 bg-muted/60 px-3 py-1 font-medium text-foreground/80"
                    >
                      {technology}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 border-t border-border/50 pt-5">
                  {project.github !== "#" && (
                    <Button
                      variant="outline"
                      className="rounded-xl border-border/70 bg-background/40 transition-all hover:border-primary/40 hover:bg-primary/5"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github className="h-4 w-4" />
                        View code
                      </a>
                    </Button>
                  )}
                  {project.demo !== "#" && (
                    <Button
                      className="rounded-xl shadow-md shadow-primary/15 transition-all hover:-translate-y-0.5 hover:shadow-primary/25"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Live demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
