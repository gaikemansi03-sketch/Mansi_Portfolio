import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Settings, Globe, Database, BrainCircuit, Cloud } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      skills: ["Python", "SQL", "JavaScript", "C", "C++", "PowerShell"]
    },
    {
      icon: Settings,
      title: "DevOps, Cloud & Tools",
      skills: ["Docker", "Kubernetes", "Git", "GitHub Actions", "Linux", "Render", "Vercel"]
    },
    {
      icon: Globe,
      title: "Frameworks & UI",
      skills: ["React", "Vite", "Flutter", "FastAPI", "Flask", "Node.js", "Streamlit"]
    },
    {
      icon: Database,
      title: "Databases & Spatial Systems",
      skills: ["PostgreSQL", "PostGIS", "MySQL", "Redis", "Supabase", "Firebase"]
    },
    {
      icon: Cloud,
      title: "Data Science & Analytics",
      skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-Learn", "Power BI"]
    },
    {
      icon: BrainCircuit,
      title: "AI & LLMs",
      skills: ["OpenAI", "Ollama", "Qwen", "Grok"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical stack spanning data analytics, machine learning workflows, and robust cloud-ready applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <IconComponent className="h-5 w-5 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}