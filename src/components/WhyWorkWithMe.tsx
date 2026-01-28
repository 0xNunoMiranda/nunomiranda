import { UserCheck, MessageSquareText, CreditCard, FileX, XCircle } from "lucide-react";

const reasons = [
  {
    icon: UserCheck,
    title: "Contacto direto",
    description: "Fala sempre comigo. Sem call centers, sem tickets, sem esperas."
  },
  {
    icon: MessageSquareText,
    title: "Linguagem clara",
    description: "Explico tudo sem termos técnicos. Se não perceber, pergunto de outra forma."
  },
  {
    icon: CreditCard,
    title: "Preços transparentes",
    description: "Sabe sempre o que está a pagar. Sem custos escondidos ou surpresas no final do mês."
  },
  {
    icon: FileX,
    title: "Sem contratos longos",
    description: "Não há fidelizações de 12 meses. Trabalhamos mês a mês."
  },
  {
    icon: XCircle,
    title: "Pode cancelar",
    description: "Se não fizer sentido continuar, avisa e pronto. Sem multas, sem chatices."
  }
];

const WhyWorkWithMe = () => {
  return (
    <section id="porque-eu" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title">Porquê Trabalhar Comigo</h2>
        <p className="section-subtitle mx-auto">
          Valorizo a simplicidade, a honestidade e a relação de longo prazo.
        </p>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {reasons.map((reason, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center p-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-highlight flex items-center justify-center mb-4">
              <reason.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{reason.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
