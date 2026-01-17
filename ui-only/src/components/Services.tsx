import { Building2, Home, Hammer, Wrench } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Kommersiella Projekt",
    description: "Kontorsbyggnader, affärslokaler och industrianläggningar med högsta kvalitet och effektivitet.",
  },
  {
    icon: Home,
    title: "Bostadsbyggnation",
    description: "Från villor till flerbostadshus - vi skapar hemmet du drömmer om med precision och omsorg.",
  },
  {
    icon: Hammer,
    title: "Renovering & Ombyggnad",
    description: "Modernisera och förnya dina befintliga lokaler med erfarna hantverkare och smart planering.",
  },
  {
    icon: Wrench,
    title: "Projektledning",
    description: "Total projektstyrning från idé till färdigställande med fokus på tid, budget och kvalitet.",
  },
];

export function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Våra Tjänster
          </h2>
          <p className="text-lg text-muted-foreground">
            Vi erbjuder kompletta bygglösningar för alla typer av projekt
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-lg p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
