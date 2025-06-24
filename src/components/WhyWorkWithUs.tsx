
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target, Users, Shield } from "lucide-react";

const WhyWorkWithUs = () => {
  const benefits = [
    {
      icon: Target,
      title: "⁠ ⁠Seamless AI Implementationp",
    
      description: "We take your AI project from idea to launch without the usual delays. From setting up data and models to getting everything running smoothly in the cloud, we handle it all. Our clear process means most projects go live in weeks, not months, so you start seeing results fast."
    },
    {
      icon: Users,
      title: "Help enterprise embrace the change",
    
     
      description: "New technology only works when people feel confident using it. That’s why we keep things simple with clear training, open Q&A sessions, and tools your team can actually understand. Even after launch, we stay close, gather feedback, and fine-tune things so everyone from leadership to new hires, moves forward together."
    },
    {
      icon: Shield,
      title: "Build trust into every model ",
   
      description: "We treat security as must-haves, not extras. From day one, we protect your data, check for risks, and make sure your AI gives clear, unbiased answers. So whether you're showing it to customers or regulators, you can do it with full confidence."
    }
  ];


  return (
    <section id="why-us" className="py-20 bg-light-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-midnight-navy mb-8 text-center">
            Why Work With Us
          </h2>
          <div className="prose prose-lg mx-auto text-slate-600 text-center">
            <p>
              Inure AI began in a college dorm when our founder realized that despite all the AI breakthroughs, 
              most companies were still struggling to actually implement and scale these technologies. 
              We've since helped over 50+ companies transform their operations through intelligent automation.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white border-electric-cyan/20 hover:shadow-lg hover:shadow-electric-cyan/10 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <benefit.icon className="h-8 w-8 text-electric-cyan" />
                  <CardTitle className="text-midnight-navy text-md">{benefit.title}</CardTitle>
                </div>
               
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
