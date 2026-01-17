export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Byggföretaget
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Sveriges ledande byggföretag med fokus på kvalitet, hållbarhet och kundnöjdhet. Vi bygger framtiden tillsammans.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-card-foreground mb-4">
              Tjänster
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Kommersiellt
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Bostäder
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Renovering
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Projektledning
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-card-foreground mb-4">
              Företag
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Om Oss
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Karriär
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Hållbarhet
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Byggföretaget AB. Alla rättigheter förbehållna.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-accent transition-colors">
                Integritetspolicy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Användarvillkor
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
