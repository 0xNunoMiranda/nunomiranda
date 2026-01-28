const steps = [
  {
    number: "1",
    title: "Conversa inicial",
    description: "Falamos sobre o que precisa. Percebo como funciona o seu negócio e onde posso ajudar."
  },
  {
    number: "2",
    title: "Proposta clara",
    description: "Recebe uma proposta simples com o que fica incluído, os limites e o preço. Sem letras pequenas."
  },
  {
    number: "3",
    title: "Implementação prática",
    description: "Configuro tudo para funcionar com o que já usa. Sem mudar os seus hábitos de trabalho."
  },
  {
    number: "4",
    title: "Acompanhamento contínuo",
    description: "Estou disponível para ajustar, tirar dúvidas e garantir que tudo continua a correr bem."
  }
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title">Como Funciona</h2>
        <p className="section-subtitle mx-auto">
          Um processo simples, sem burocracia. Do primeiro contacto ao dia a dia.
        </p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="step-number">{step.number}</div>
                {index < steps.length - 1 && (
                  <div className="w-px h-full bg-border mt-4" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
