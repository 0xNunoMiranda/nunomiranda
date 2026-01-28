import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#na-pratica", label: "Na Prática" },
  { href: "#precos", label: "Preços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contactos", label: "Contacto" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-semibold text-foreground">
            Nuno Miranda
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <a href="#contactos" className="hidden md:inline-flex btn-primary text-sm py-2 px-4">
            Falar Comigo
          </a>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contactos"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary text-center mt-2"
              >
                Falar Comigo
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
