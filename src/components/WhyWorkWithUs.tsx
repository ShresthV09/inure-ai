
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target, Users, Shield } from "lucide-react";

const WhyWorkWithUs = () => {
  const benefits = [
    {
      icon: Target,
      title: "Close the Implementation Gap",
      percentage: 66,
      description: "Most AI projects fail at deployment. We bridge the gap between proof-of-concept and production with battle-tested deployment pipelines and real-world scaling experience."
    },
    {
      icon: Users,
      title: "Defuse the AI Culture Shock",
      percentage: 67,
      stat: "2 in 3 execs",
      description: "Change management is the silent killer of AI adoption. We help teams embrace AI tools naturally through gradual rollouts and comprehensive training programs."
    },
    {
      icon: Shield,
      title: "Lock down Security & Compliance",
      percentage: 64,
      description: "Enterprise AI demands bulletproof security. Our solutions include data encryption, audit trails, and compliance frameworks that satisfy the strictest corporate requirements."
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
              We've since helped over 200+ companies transform their operations through intelligent automation.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white border-electric-cyan/20 hover:shadow-lg hover:shadow-electric-cyan/10 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <benefit.icon className="h-8 w-8 text-electric-cyan" />
                  <CardTitle className="text-midnight-navy text-lg">{benefit.title}</CardTitle>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Success Rate</span>
                    <span className="text-2xl font-bold text-midnight-navy">{benefit.percentage}%</span>
                  </div>
                  <Progress value={benefit.percentage} className="h-2" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
