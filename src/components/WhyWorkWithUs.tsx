import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target, Users, Shield, Check } from "lucide-react";

const WhyWorkWithUs = () => {
  const benefits = [
    {
      icon: Target,
      title: "Seamless AI Implementation",
      description: "We take your AI project from idea to launch without the usual delays. From setting up data and models to getting everything running smoothly in the cloud, we handle it all. Our clear process means most projects go live in weeks, not months, so you start seeing results fast.",
      bulletPoints: [
        "End-to-end project management and implementation",
        "Quick deployment in weeks, not months",
        "Cloud infrastructure setup and optimization",
        "Continuous monitoring and performance tuning"
      ]
    },
    {
      icon: Users,
      title: "Help Enterprise Embrace the Change",
      description: "New technology only works when people feel confident using it. That's why we keep things simple with clear training, open Q&A sessions, and tools your team can actually understand. Even after launch, we stay close, gather feedback, and fine-tune things so everyone from leadership to new hires, moves forward together.",
      bulletPoints: [
        "Comprehensive team training programs",
        "Regular Q&A and support sessions",
        "User-friendly tools and documentation",
        "Ongoing feedback and improvement cycles"
      ]
    },
    {
      icon: Shield,
      title: "Build Trust Into Every Model",
      description: "We treat security as must-haves, not extras. From day one, we protect your data, check for risks, and make sure your AI gives clear, unbiased answers. So whether you're showing it to customers or regulators, you can do it with full confidence.",
      bulletPoints: [
        "Enterprise-grade security protocols",
        "Regular risk assessments and audits",
        "Bias detection and mitigation",
        "Regulatory compliance assurance"
      ]
    }
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-light-surface to-white opacity-70" />
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h2 className="text-5xl font-bold text-midnight-navy mb-6">
            Why Work With Us
          </h2>
          <div className="prose prose-lg mx-auto text-slate-600">
            <p className="text-lg leading-relaxed">
              Inure AI began in a college dorm when our founder realized that despite all the AI breakthroughs, 
              most companies were still struggling to actually implement and scale these technologies. 
              We've since helped over 50+ companies transform their operations through intelligent automation.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-white/80 backdrop-blur-sm border-electric-cyan/20 hover:shadow-xl hover:shadow-electric-cyan/10 transition-all duration-300 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4 mb-3">
                  <div className="p-2 rounded-lg bg-electric-cyan/10 group-hover:bg-electric-cyan/20 transition-colors duration-300">
                    <benefit.icon className="h-6 w-6 text-electric-cyan" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-midnight-navy">{benefit.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed mb-4">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.bulletPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Check className="h-5 w-5 text-electric-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
