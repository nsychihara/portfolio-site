import profilePhoto from "@/assets/profile-photo.jpg";

export function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          {/* Profile Photo */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-2xl">
              <img
                src={profilePhoto}
                alt="Nicholas Ychihara"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -inset-4 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl" />
          </div>

          {/* Text Content */}
          <div className="max-w-xl text-center md:text-left animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-accent font-medium mb-2 tracking-wide">Olá, eu sou o</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Nicholas Ychihara
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Profissional <span className="text-accent font-semibold">DevOps</span> apaixonado 
              por automação e cloud. Trabalho para que aplicações rodem com{" "}
              <span className="text-foreground font-medium">alta performance</span> e{" "}
              <span className="text-foreground font-medium">estabilidade</span>.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
              <a
                href="#projetos"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Ver Projetos
              </a>
              <a
                href="#contato"
                className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Entrar em Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
