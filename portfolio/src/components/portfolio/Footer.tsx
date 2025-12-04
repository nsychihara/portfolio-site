export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8 px-6">
      <div className="container mx-auto text-center">
        <p className="text-sm text-primary-foreground/80">
          © {currentYear} — Desenvolvido por{" "}
          <span className="font-semibold text-primary-foreground">
            Nicholas S. Ychihara
          </span>
        </p>
      </div>
    </footer>
  );
}
