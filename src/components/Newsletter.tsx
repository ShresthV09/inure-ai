import { Calendar, Bot, Zap, Lock } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const openCalendly = () => {
    const calendlyUrl = 'https://calendly.com/rodriguesgrege_/';
    window.open(calendlyUrl, '_blank');
  };

  return (
    <section className="relative py-24 bg-[#0A1930] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1930] to-[#0F2543]"></div>
        <div className="absolute w-[500px] h-[500px] -top-48 -right-48 bg-[#60A5FA]/10 rounded-full blur-[100px]"></div>
        <div className="absolute w-[400px] h-[400px] bottom-0 -left-48 bg-[#3B82F6]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Let's Build Your AI Solution Together
            </h2>
            <p className="text-xl text-[#E5E7EB] max-w-2xl mx-auto">
              Schedule a consultation to discuss your project with our AI development experts
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1E3A8A]/20 backdrop-blur-xl rounded-3xl border border-[#3B82F6]/20 p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <Calendar className="h-8 w-8 text-[#60A5FA]" />
                  <h3 className="text-2xl font-semibold text-white">
                    Book Your Consultation
                  </h3>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <Bot className="h-6 w-6 text-[#60A5FA] mt-1" />
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1">Project Assessment</h4>
                      <p className="text-[#E5E7EB]">We'll analyze your needs and propose the best AI solution</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Zap className="h-6 w-6 text-[#60A5FA] mt-1" />
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1">Development Timeline</h4>
                      <p className="text-[#E5E7EB]">Get a detailed project roadmap and timeline</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Lock className="h-6 w-6 text-[#60A5FA] mt-1" />
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1">Investment Overview</h4>
                      <p className="text-[#E5E7EB]">Transparent pricing and project milestones</p>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={openCalendly}
                  className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium py-6 text-lg transition-all duration-200"
                >
                  Schedule Your Consultation
                </Button>
              </div>

              <div className="hidden md:block relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/20 to-[#60A5FA]/20 rounded-2xl blur-2xl"></div>
                <img 
                  src="/logo.svg" 
                  alt="AI Development Process"
                  className="relative z-10 w-full rounded-2xl border border-[#3B82F6]/20"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter; 