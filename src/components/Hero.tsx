import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Bot, Sparkles, Brain, Cpu, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center bg-white">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50/30"></div>
        <div className="absolute w-[800px] h-[800px] -top-48 -right-48 bg-blue-50/50 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] top-1/2 -left-48 bg-blue-50/50 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 hover:border-blue-200 transition-all duration-300"
            >
              <Sparkles className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-600">Premier AI Development Agency</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 mt-6 leading-tight"
            >
              We Build Custom
              <span className="text-blue-600"> AI Solutions </span>
              For Your Business
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Partner with us to develop tailored AI solutions that transform your business operations and drive innovation.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] group"
                onClick={() => window.open('https://calendly.com/rodriguesgrege_/', '_blank')}
              >
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-blue-200 text-gray-700 hover:bg-blue-50 transition-all duration-300 hover:border-blue-300 hover:scale-[1.02] group"
              >
                View Our Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Feature badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12"
            >
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-blue-50 border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-sm">
                <Bot className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Expert Team</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-blue-50 border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-sm">
                <Brain className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Custom Solutions</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-blue-50 border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-sm">
                <Cpu className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Fast Delivery</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - 3D Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-blue-50/50 rounded-full blur-3xl animate-pulse"></div>
              <img 
                src="/placeholder.svg" 
                alt="AI Development Services"
                className="relative z-10 w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
