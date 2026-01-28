import { Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground leading-tight text-balance mb-6">
          Menos trabalho manual.
          <br />
          Menos confusão.
          <br />
          Mais tempo para o que importa.
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 text-balance">
          Ajudo pequenas empresas a organizar emails, pedidos e documentos — de forma simples e sem complicações.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contactos" className="btn-primary">
            <Mail className="w-5 h-5" />
            Falar sem compromisso
          </a>
          <a href="tel:+351935120439" className="btn-secondary">
            <Phone className="w-5 h-5" />
            +351 935 120 439
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
