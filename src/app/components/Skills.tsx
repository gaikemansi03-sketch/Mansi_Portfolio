import { BarChart3, BrainCircuit, Cloud, Code2, Database, Globe2 } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      description: "Building blocks for reliable, maintainable systems.",
      skills: ["Python", "SQL", "JavaScript", "C", "C++", "PowerShell"],
    },
    {
      icon: Cloud,
      title: "DevOps, Cloud & Tools",
      description: "Shipping applications with resilient infrastructure.",
      skills: ["Docker", "Kubernetes", "Git", "GitHub Actions", "Linux", "Render", "Vercel"],
    },
    {
      icon: Globe2,
      title: "Frameworks & UI",
      description: "Turning ideas into useful, polished experiences.",
      skills: ["React", "Vite", "Flutter", "FastAPI", "Flask", "Node.js", "Streamlit"],
    },
    {
      icon: Database,
      title: "Databases & Spatial Systems",
      description: "Organizing transactional and geospatial data.",
      skills: ["PostgreSQL", "PostGIS", "MySQL", "Redis", "Supabase", "Firebase"],
    },
    {
      icon: BarChart3,
      title: "Data Science & Analytics",
      description: "Finding signal in data and communicating what matters.",
      skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-Learn", "Power BI"],
    },
    {
      icon: BrainCircuit,
      title: "AI & LLMs",
      description: "Exploring practical applications for intelligent systems.",
      skills: ["OpenAI", "Ollama", "Qwen", "Grok"],
    },
  ];

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            My toolkit
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Technical Skills</h2>
          <p className="mx-auto max-w-2xl leading-relaxed text-muted-foreground">
            A versatile toolkit spanning software development, data analytics, machine learning,
            and cloud-ready applications.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 blur-3xl transition-colors group-hover:bg-primary/10" />
                <div className="relative">
                  <div className="mb-5 flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold tracking-tight">{category.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border/50 bg-muted/50 px-3 py-1 text-xs font-medium text-foreground/85 transition-all duration-200 group-hover:border-primary/20 hover:!bg-primary hover:!text-primary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
