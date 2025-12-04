import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/nsychihara",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nicholas-ychihara/",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/nsychihara/",
    icon: Instagram,
  },
];

export function Contact() {
  return (
    <section id="contato" className="py-24 px-6 bg-secondary/50">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center animate-fade-up">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-muted-foreground mb-8">
            Estou sempre aberto a novas oportunidades e conexões. Entre em contato!
          </p>

          {/* Email */}
          <a
            href="mailto:nychihara@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 mb-12"
          >
            <Mail size={20} />
            <span>nychihara@gmail.com</span>
          </a>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                aria-label={link.name}
              >
                <link.icon
                  size={28}
                  className="text-muted-foreground group-hover:text-accent transition-colors duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
