import { Inbox, MessageSquare, FileText, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Inbox,
    title: "Organização de emails",
    description: "Os emails chegam organizados por assunto e urgência. Sem ter de ler tudo para saber o que é importante."
  },
  {
    icon: MessageSquare,
    title: "Sugestões de resposta",
    description: "Recebe propostas de resposta para pedidos frequentes. Revê, ajusta se precisar, e envia. Sempre com o seu controlo."
  },
  {
    icon: FileText,
    title: "Resumos claros",
    description: "Pedidos longos ou confusos ficam resumidos em pontos simples. Percebe logo o que o cliente quer."
  },
  {
    icon: BarChart3,
    title: "Relatórios simples",
    description: "Um resumo mensal com o que entrou, o que foi tratado, e o que ficou pendente. Sem gráficos complicados."
  }
];

const Services = () => {
  return (
    <section id="servicos" className="bg-warm">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Como posso ajudar</h2>
          <p className="section-subtitle mx-auto">
            Ferramentas práticas para o dia a dia do seu negócio. 
            Sem termos técnicos, sem complicações.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="card-service">
              <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
