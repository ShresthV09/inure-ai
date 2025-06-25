
import { Brain } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Company: ["About", "Careers (coming soon)"],
    Services: ["Data Eng", "ML Dev", "AI Agents", "Product Dev"],
    Resources: ["Case Studies"],
    Legal: ["Privacy", "Terms", "Responsible-AI"]
  };

  return (
    <footer className="bg-white text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-1 mr-10">
            <div className="flex justify-center items-center space-x-2 mb-4">
           <img src="/logo.jpeg" alt="Inure AI" className=" " />
            </div>
            <p className="text-black pl-8  text-sm leading-relaxed">
            We Build Custom AI Solutions For Your Business
            </p>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-blue-600">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-black hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-black text-sm">
                © 2025 Inure AI. Partner with us to develop tailored AI solutions that transform your business operations 
              </p>
            </div>
        
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
