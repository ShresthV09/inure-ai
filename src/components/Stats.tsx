import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';

interface CounterProps {
  end: number;
  duration: number;
  label: string;
  sublabel: string;
  prefix?: string;
  suffix?: string;
}

const Counter = ({ end, duration, label, sublabel, prefix = '', suffix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
          setHasAnimated(true);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration, hasAnimated]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative p-8 bg-[#1E3A8A]/20 backdrop-blur-sm rounded-2xl border border-[#3B82F6]/20"
    >
      <div className="text-4xl font-bold text-white mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-lg font-medium text-[#60A5FA] mb-1">{label}</div>
      <div className="text-sm text-[#E5E7EB]">{sublabel}</div>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section className="py-24 bg-[#0A1930]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Our Track Record</h2>
          <p className="text-lg text-[#E5E7EB] max-w-2xl mx-auto">
            Delivering successful AI solutions across industries
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Counter 
            end={50} 
            duration={2} 
            label="Projects Delivered" 
            sublabel="Successful AI implementations"
            suffix="+"
          />
          <Counter 
            end={99} 
            duration={2} 
            label="Client Satisfaction" 
            sublabel="Average satisfaction score"
            suffix="%"
          />
          <Counter 
            end={3} 
            duration={2} 
            label="Years Experience" 
            sublabel="In AI development"
            suffix="+"
          />
          <Counter 
            end={10} 
            duration={2} 
            label="Industries Served" 
            sublabel="Across various sectors"
            suffix="+"
          />
        </div>
      </div>
    </section>
  );
};

export default Stats; 