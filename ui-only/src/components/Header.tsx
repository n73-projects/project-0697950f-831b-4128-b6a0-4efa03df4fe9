import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-foreground">
              Byggföretaget
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#hem" className="text-foreground hover:text-accent transition-colors font-medium">
              Hem
            </a>
            <a href="#tjanster" className="text-foreground hover:text-accent transition-colors font-medium">
              Tjänster
            </a>
            <a href="#projekt" className="text-foreground hover:text-accent transition-colors font-medium">
              Projekt
            </a>
            <a href="#om-oss" className="text-foreground hover:text-accent transition-colors font-medium">
              Om Oss
            </a>
            <a href="#kontakt" className="text-foreground hover:text-accent transition-colors font-medium">
              Kontakt
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default">
              Begär Offert
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
}
