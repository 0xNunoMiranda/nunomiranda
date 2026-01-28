import { MessageCircle, ShoppingBag, CalendarCheck, PhoneCall } from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    title: "Atendimento que responde por si",
    description: "As perguntas mais frequentes dos seus clientes são respondidas automaticamente. WhatsApp, Instagram, Facebook — em qualquer canal, a qualquer hora."
  },
  {
    icon: ShoppingBag,
    title: "Venda online sem parar",
    description: "Uma loja simples onde os clientes fazem encomendas a qualquer hora. Recebe os pedidos organizados, prontos para preparar."
  },
  {
    icon: CalendarCheck,
    title: "Marcações sem telefone",
    description: "Os clientes marcam diretamente na sua agenda online. Sem chamadas, sem trocas de mensagens. Recebe apenas a confirmação."
  },
  {
    icon: PhoneCall,
    title: "Chamadas e avisos automáticos",
    description: "Lembretes de marcações, avisos de entrega ou confirmações — enviados automaticamente por chamada de voz ou mensagem."
  }
];

const Services = () => {
  return (
    <section id="servicos" className="bg-warm">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Como posso ajudar</h2>
          <p className="section-subtitle mx-auto">
            Automatizações que trabalham por si. 
            Mais tempo livre, menos tarefas repetitivas.
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
