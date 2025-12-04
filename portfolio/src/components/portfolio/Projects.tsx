import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Projeto HBU",
    subtitle: "Hospital Beneficente Unimar",
    description:
      "O projeto teve como proposta agilizar e otimizar o atendimento no hospital beneficente da Unimar, por meio principalmente de um totem de autoatendimento.",
    tags: ["Healthcare", "Automação", "UX"],
  },
  {
    title: "Automatização de Estufas",
    subtitle: "IoT & Automação",
    description:
      "Projeto feito com ESP-32 que visava controlar temperatura e umidade em uma estufa, usando sensores e atuadores conectados.",
    tags: ["ESP-32", "IoT", "Sensores"],
  },
  {
    title: "Portfolio Site",
    subtitle: "DevOps & Docker",
    description:
      "Site de portfólio pessoal desenvolvido com React e containerizado com Docker, demonstrando práticas modernas de desenvolvimento e deploy.",
    tags: ["React", "Docker", "NGINX"],
  },
];

export function Projects() {
  return (
    <section id="projetos" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projetos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi ao longo da minha jornada
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Card Header */}
              <div className="h-32 bg-gradient-to-br from-primary/80 to-accent/60 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)]" />
                <div className="absolute bottom-4 left-6">
                  <p className="text-primary-foreground/70 text-sm font-medium">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4 pt-2 border-t border-border">
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-300">
                    <Github size={16} />
                    <span>Código</span>
                  </button>
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-300">
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
