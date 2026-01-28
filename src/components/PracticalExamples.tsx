import { Clock, Scissors, Flower2, UtensilsCrossed } from "lucide-react";

const examples = [
  {
    icon: Scissors,
    business: "Barbearia",
    before: "O João atendia 20 chamadas por dia só para marcar cortes. À noite, ainda respondia a mensagens no Instagram. Perdia marcações por não ver a tempo.",
    after: "Agora, os clientes marcam sozinhos na agenda online. O João só vê as confirmações. E as perguntas frequentes são respondidas automaticamente.",
    timeSaved: "~45 min/dia"
  },
  {
    icon: Flower2,
    business: "Florista",
    before: "A Maria recebia encomendas por WhatsApp, telefone e Instagram. Anotava tudo à mão. Às vezes confundia pedidos ou esquecia de confirmar.",
    after: "Os clientes fazem encomendas numa loja online simples. A Maria recebe tudo organizado: flores, data, morada. Sem perder tempo a anotar.",
    timeSaved: "~1 hora/dia"
  },
  {
    icon: UtensilsCrossed,
    business: "Restaurante",
    before: "O António perdia reservas porque não atendia o telefone durante o serviço. Os clientes desistiam ou iam a outro sítio.",
    after: "As reservas entram automaticamente. Os clientes recebem confirmação e lembrete por mensagem. O António só consulta a lista antes de abrir.",
    timeSaved: "~30 min/dia"
  }
];

const PracticalExamples = () => {
  return (
    <section id="na-pratica" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title">Na Prática</h2>
        <p className="section-subtitle mx-auto">
          Exemplos reais de como estas automatizações libertam tempo a negócios locais.
        </p>
      </div>
      
      <div className="grid gap-8">
        {examples.map((example, index) => (
          <div key={index} className="card-example">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex items-center gap-4 md:flex-col md:items-center md:min-w-[100px]">
                <div className="w-14 h-14 rounded-2xl bg-highlight flex items-center justify-center">
                  <example.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-lg font-semibold text-foreground md:text-center">
                  {example.business}
                </span>
              </div>
              
              <div className="flex-1 space-y-4">
                <div>
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Antes</span>
                  <p className="text-foreground mt-1 leading-relaxed">{example.before}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-primary uppercase tracking-wide">Depois</span>
                  <p className="text-foreground mt-1 leading-relaxed">{example.after}</p>
                </div>
              </div>
              
              <div className="flex md:flex-col items-center gap-2 md:min-w-[120px] md:text-center">
                <div className="badge-savings">
                  <Clock className="w-4 h-4" />
                  {example.timeSaved}
                </div>
                <span className="text-sm text-muted-foreground">poupados</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PracticalExamples;
