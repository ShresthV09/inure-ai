import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Rocket, Database, MessageSquare, Eye } from "lucide-react";
const Services = () => {
  const services = [{
    category: "AI & ML Development",
    icon: Brain,
    services: ["Custom ML Models", "Generative AI (GPT fine-tuning)", "Computer Vision", "Time Series Forecasting", "ML Deployment + MLOps"]
  }, {
    category: "AI Automation & Agents",
    icon: Zap,
    services: ["Process Automation (AI + RPA)", "AI Agents for Ops / Sales / CX", "Voice & Chat Assistants"]
  }, {
    category: "End-to-End AI Product Development",
    icon: Rocket,
    services: ["Full-stack AI Tools", "AI MVPs & POCs", "Company-specific GPTs"]
  }];
  return <section id="services" className="py-20 bg-light-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-midnight-navy mb-4">
            Build Deploy and Scale AI — end to end. 
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => <Card key={index} className="border-electric-cyan/20 hover:border-electric-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-electric-cyan/10">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <service.icon className="h-8 w-8 text-electric-cyan" />
                  <CardTitle className="text-midnight-navy">{service.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.services.map((item, idx) => <li key={idx} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-electric-cyan rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">{item}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>)}
        </div>
        
        
      </div>
    </section>;
};
export default Services;