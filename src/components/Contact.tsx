import { Phone, Mail, Globe, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contactos" className="bg-warm">
      <div className="section-container">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="section-title">Vamos Conversar?</h2>
          <p className="section-subtitle mx-auto mb-10">
            Sem compromisso. Basta enviar uma mensagem ou ligar.
          </p>
          
          <div className="card-service">
            <div className="space-y-6">
              <a 
                href="tel:+351935120439"
                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-accent transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Telefone</p>
                  <p className="font-medium text-foreground">+351 935 120 439</p>
                </div>
              </a>
              
              <a 
                href="mailto:nuno_miranda@outlook.com"
                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-accent transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">nuno_miranda@outlook.com</p>
                </div>
              </a>
              
              <a 
                href="https://www.nunomiranda.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-accent transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-accent-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Website</p>
                  <p className="font-medium text-foreground">www.nunomiranda.dev</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Localização</p>
                  <p className="font-medium text-foreground">Portugal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
