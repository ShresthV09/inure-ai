import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Services from "@/components/Services";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ClientLogos />
      <Stats />
      <Features />
      <Services />
      <WhyWorkWithUs />
      <Newsletter />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
