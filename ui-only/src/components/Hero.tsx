import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Hero background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80"
          alt="Construction site background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
            Bygger Sveriges Framtid
          </h1>
          <p className="text-xl sm:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Med över 30 års erfarenhet levererar vi kvalitet, säkerhet och hållbarhet i varje projekt
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="lg">
              Begär Offert <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              <Phone className="mr-2" />
              Kontakta Oss
            </Button>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-card/95 backdrop-blur-sm border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">30+</div>
              <div className="text-sm text-muted-foreground mt-1">År i Branschen</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Slutförda Projekt</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground mt-1">Nöjda Kunder</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">150</div>
              <div className="text-sm text-muted-foreground mt-1">Medarbetare</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
