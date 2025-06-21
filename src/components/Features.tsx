import { motion } from "framer-motion";
import { 
  Brain, 
  Bot, 
  Cpu, 
  LineChart, 
  Shield, 
  Zap,
  MessageSquareCode,
  Database,
  Cloud
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Custom AI Models",
      description: "Tailored machine learning solutions designed specifically for your business needs"
    },
    {
      icon: Bot,
      title: "Intelligent Automation",
      description: "Streamline operations with smart automation powered by advanced AI"
    },
    {
      icon: LineChart,
      title: "Predictive Analytics",
      description: "Make data-driven decisions with powerful predictive modeling"
    },
    {
      icon: Shield,
      title: "Secure Integration",
      description: "Enterprise-grade security with seamless system integration"
    },
    {
      icon: MessageSquareCode,
      title: "Natural Language AI",
      description: "Advanced NLP solutions for enhanced communication and analysis"
    },
    {
      icon: Database,
      title: "Data Processing",
      description: "High-performance data processing and analysis pipelines"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure optimized for AI workloads"
    },
    {
      icon: Cpu,
      title: "Edge AI",
      description: "Deploy AI models directly on edge devices for real-time processing"
    },
    {
      icon: Zap,
      title: "Real-time AI",
      description: "Instant insights and decisions with real-time AI processing"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50/30"></div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
          >
            <Cpu className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-600">
              Our Capabilities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Comprehensive AI Solutions for Modern Businesses
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Transform your business with our cutting-edge AI capabilities, designed to drive innovation and growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300"
            >
              <feature.icon className="h-10 w-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 