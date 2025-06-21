
import { Brain } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Company: ["About", "Careers (coming soon)", "Press"],
    Services: ["Data Eng", "ML Dev", "AI Agents", "Product Dev"],
    Resources: ["Blog", "2025 Automation Playbook (PDF)"],
    Legal: ["Privacy", "Terms", "Responsible-AI"]
  };

  return (
    <footer className="bg-midnight-navy text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-electric-cyan" />
              <span className="text-xl font-bold">Inure AI</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              AI that slips in, saves hours, shows ROI—fast.
            </p>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-electric-cyan">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
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
              <p className="text-slate-400 text-sm">
                © 2025 Inure AI. AI that slips in, saves hours, shows ROI—fast.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="mailto:hello@inure.ai" className="text-slate-400 hover:text-electric-cyan transition-colors text-sm">
                hello@inure.ai
              </a>
              <span className="text-slate-400 text-sm">+91 XXXXXXXXXX</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
