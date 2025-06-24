import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Newsletter from "@/components/Newsletter";
import BlogSection from "@/components/BlogSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
    <BlogSection/>
      <Stats />
      <Features />
      <Services />
      <WhyWorkWithUs />
      <Newsletter />
     
      <Footer />
    </div>
  );
};

export default Index;
