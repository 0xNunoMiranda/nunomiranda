import nunoProfile from "@/assets/nuno-profile.png";

const About = () => {
  return (
    <section id="sobre" className="bg-warm">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">
            <img 
              src={nunoProfile}
              alt="Nuno Miranda"
              className="w-32 h-32 rounded-3xl object-cover flex-shrink-0"
            />
            <div>
              <h2 className="section-title">Olá, sou o Nuno.</h2>
              <p className="text-lg text-muted-foreground">
                Ajudo empresas a trabalhar com menos confusão e mais organização.
              </p>
            </div>
          </div>
          
          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              Há mais de cinco anos que trabalho com pequenas e médias empresas. 
              Já vi de tudo: emails perdidos, pedidos esquecidos, informação espalhada 
              por dez sítios diferentes. E sei o tempo que isso rouba ao dia a dia.
            </p>
            
            <p>
              A minha formação é técnica — estudei Engenharia Informática — mas o que 
              mais gosto é de perceber como as pessoas trabalham e encontrar formas de 
              simplificar. Não interessa a tecnologia. Interessa que funcione.
            </p>
            
            <p>
              Trabalho de forma clara: digo o que posso fazer, quanto custa e o que 
              está incluído. Sem promessas exageradas, sem contratos eternos. Se um 
              serviço não faz sentido para o seu caso, sou o primeiro a dizer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
