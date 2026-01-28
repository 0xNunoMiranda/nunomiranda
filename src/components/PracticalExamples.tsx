import { Clock, Scissors, Flower2, UtensilsCrossed } from "lucide-react";

const examples = [
  {
    icon: Scissors,
    business: "Barbearia",
    before: "O João passava 30 minutos por dia a responder às mesmas perguntas: horários, preços, disponibilidade. E ainda perdia marcações por não ver mensagens a tempo.",
    after: "Agora, as mensagens chegam organizadas. As perguntas frequentes têm sugestões de resposta prontas. O João só revê e envia — em segundos.",
    timeSaved: "~25 min/dia"
  },
  {
    icon: Flower2,
    business: "Florista",
    before: "A Maria recebia pedidos de casamentos por email, WhatsApp e telefone. Alguns tinham 10 parágrafos. Era fácil perder detalhes ou esquecer prazos.",
    after: "Cada pedido é resumido com data, tipo de flores, local e orçamento. Tudo organizado numa lista clara. Sem reler emails de 500 palavras.",
    timeSaved: "~30 min/dia"
  },
  {
    icon: UtensilsCrossed,
    business: "Restaurante",
    before: "O António recebia dezenas de emails de fornecedores, reservas e questões. Misturava-se tudo. Às vezes, só via um pedido urgente no dia seguinte.",
    after: "Os emails chegam separados por tipo: fornecedores, reservas, reclamações. As urgências aparecem primeiro. O António age mais rápido e com menos stress.",
    timeSaved: "~20 min/dia"
  }
];

const PracticalExamples = () => {
  return (
    <section id="na-pratica" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title">Na Prática</h2>
        <p className="section-subtitle mx-auto">
          Exemplos reais de como estes serviços ajudam negócios locais a poupar tempo todos os dias.
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
