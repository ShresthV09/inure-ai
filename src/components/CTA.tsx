import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { RocketIcon, ArrowRight, CheckCircle2 } from "lucide-react";

const CTA = () => {
  const benefits = [
    "Identify quick-win AI opportunities",
    "Calculate potential ROI impact",
    "Get a tailored implementation timeline",
    "Start showing results this quarter"
  ];

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
        <div className="absolute w-[800px] h-[800px] -top-96 right-0 bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute w-[600px] h-[600px] -bottom-48 -left-48 bg-blue-50/50 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 mb-6 group hover:bg-blue-100 transition-colors duration-300"
            >
              <RocketIcon className="h-5 w-5 text-blue-600 mr-2 group-hover:text-blue-700" />
              <span className="text-sm font-medium text-blue-700">Strategic AI Implementation</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Unlock My AI Roadmap
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8"
            >
              Let's match your biggest bottleneck to a quick-win agent and show ROI before quarter-end.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:scale-[1.02] group"
                onClick={() => window.open('https://calendly.com/rodriguesgrege_/', '_blank')}
              >
                Get My Roadmap
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-6 mt-16"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex items-center gap-4 p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300"
              >
                <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <p className="text-gray-700 font-medium">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-gray-500">
              Trusted by innovative companies to deliver AI solutions
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
