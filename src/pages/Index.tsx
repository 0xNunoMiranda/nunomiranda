import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PracticalExamples from "@/components/PracticalExamples";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Hero />
        <Services />
        <PracticalExamples />
        <Pricing />
        <HowItWorks />
        <About />
        <WhyWorkWithMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
