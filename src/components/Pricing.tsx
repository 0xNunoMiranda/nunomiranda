import { Check, MessageCircle, Settings } from "lucide-react";

const Pricing = () => {
  return (
    <section id="precos" className="bg-warm">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Planos e Preços</h2>
          <p className="section-subtitle mx-auto">
            Preços claros, sem surpresas. Sabe sempre o que está incluído e quais são os limites.
          </p>
        </div>
        
        {/* Main Plans */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Base Plan */}
          <div className="card-pricing">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground">Plano Base</h3>
              <div className="mt-2">
                <span className="text-3xl font-bold text-foreground">30€</span>
                <span className="text-muted-foreground"> / mês</span>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Inclui</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Organização e triagem de emails</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Sugestões de resposta (com validação humana)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Resumos claros de pedidos e mensagens</span>
                </li>
              </ul>
            </div>
            
            <div className="pt-6 border-t border-border">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">Limites</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Até 500 emails por mês</li>
                <li>• Uso normal de uma caixa de correio</li>
                <li>• Suporte básico por email</li>
              </ul>
            </div>
            
            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Configuração inicial:</span> 100€
              </p>
            </div>
          </div>
          
          {/* Pro Plan */}
          <div className="card-pricing-featured">
            <div className="absolute top-4 right-4 bg-primary-foreground/20 text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
              Recomendado
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Plano Pro</h3>
              <div className="mt-2">
                <span className="text-3xl font-bold">50€</span>
                <span className="opacity-80"> / mês</span>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <p className="text-sm font-medium opacity-80 uppercase tracking-wide">Tudo do Base, mais</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Assistente interno para documentos e procedimentos</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Relatórios mensais simples e organizados</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Acompanhamento mais próximo</span>
                </li>
              </ul>
            </div>
            
            <div className="pt-6 border-t border-primary-foreground/20">
              <p className="text-sm font-medium opacity-80 uppercase tracking-wide mb-3">Limites</p>
              <ul className="space-y-2 text-sm opacity-80">
                <li>• Até 1.000 emails por mês</li>
                <li>• Até 50 documentos internos (máx. 100 páginas)</li>
                <li>• Até 300 consultas internas por mês</li>
                <li>• 1 relatório mensal incluído</li>
              </ul>
            </div>
            
            <div className="mt-6 pt-4 border-t border-primary-foreground/20">
              <p className="text-sm opacity-80">
                <span className="font-medium">Configuração inicial:</span> 150€
              </p>
            </div>
          </div>
        </div>
        
        {/* Add-ons */}
        <div className="card-service">
          <h3 className="text-xl font-semibold text-foreground mb-6">Serviços Opcionais</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Apoio via WhatsApp</h4>
                <p className="text-2xl font-bold text-foreground mt-1">+20€<span className="text-base font-normal text-muted-foreground"> / mês</span></p>
                <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                  <li>• Até 300 mensagens por mês</li>
                  <li>• Sugestão de respostas, sempre com validação</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                <Settings className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Automações específicas</h4>
                <p className="text-base text-muted-foreground mt-1">Preço ajustado conforme necessidade</p>
                <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                  <li>• Mensagens de voz, integrações especiais</li>
                  <li>• Limites definidos antes de avançar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Important Note */}
        <div className="mt-8 p-6 bg-highlight rounded-3xl">
          <h4 className="font-medium text-foreground mb-2">Sem surpresas</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Todos os serviços têm limites mensais claros</li>
            <li>• Se os limites forem atingidos, é informado antes de qualquer custo extra</li>
            <li>• Serviços externos podem ter custos adicionais — sempre comunicados com antecedência</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
