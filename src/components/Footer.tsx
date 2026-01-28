import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border">
      <div className="section-container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-medium text-foreground">Nuno Miranda</p>
            <p className="text-sm text-muted-foreground mt-1">
              Serviços de organização digital para empresas
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/0xNunoMiranda"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/0xNunoMiranda"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com/0xNunoMiranda"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com/devSpotAcademy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              @devSpotAcademy
            </a>
          </div>
        </div>
        
        <div className="divider" />
        
        <p className="text-center text-sm text-muted-foreground">
          © {currentYear} Nuno Miranda. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
