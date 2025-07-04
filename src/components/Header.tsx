import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to toggle body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const solutions = [
    { name: 'Custom AI Development', description: 'Tailored AI solutions for your business needs' },
    { name: 'AI Integration', description: 'Seamlessly integrate AI into your existing systems' },
    { name: 'AI Consulting', description: 'Expert guidance on AI strategy and implementation' },
    { name: 'Machine Learning', description: 'Advanced ML models and algorithms' },
  ];

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-md'
        }`}
      >
        <nav className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a 
              href="/"
              className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <img src="/logo.jpeg" alt="InureAI" width={100} height={50} className='scale-150' />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Solutions Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('solutions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
                  <span>Solutions</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'solutions' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-2 w-72 rounded-xl bg-white shadow-lg border border-gray-100"
                    >
                      <div className="p-4 space-y-2">
                        {solutions.map((solution) => (
                          <a
                            key={solution.name}
                            href="#"
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          >
                            <div className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors">{solution.name}</div>
                            <div className="text-sm text-gray-500">{solution.description}</div>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a href="/CaseStudies" className="text-gray-600 hover:text-blue-600 transition-colors">Case Studies</a>

              <div className="flex items-center space-x-2">
                {/* LinkedIn logo/link */}
                <a
                  href="https://www.linkedin.com/company/inure-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-[#000001] hover:bg-[#004182] w-7 h-7 rounded transition-colors"
                >
                  <span className="text-white font-semibold text-lg leading-none">in</span>
                </a>

                <Button 
                  onClick={() => window.open('https://calendly.com/rodriguesgrege_/', '_blank')}
                  className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Book a Call
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-900 z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <>
                {/* Blur Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ top: '80px' }}
                />
                
                {/* Mobile Menu Content */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="lg:hidden bg-white border-t border-gray-100 relative z-50"
                >
                  <div className="py-4 space-y-4">
                    <a href="/CaseStudies" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors">Case Studies</a>
                    
                    <div className="px-4 space-y-4">
                      {/* LinkedIn logo/link */}
                      <a
                        href="https://www.linkedin.com/company/inure-ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <div className="flex items-center justify-center bg-[#000001] hover:bg-[#004182] w-7 h-7 rounded transition-colors">
                          <span className="text-white font-semibold text-lg leading-none">in</span>
                        </div>
                        <span>LinkedIn</span>
                      </a>

                      <Button 
                        onClick={() => window.open('https://calendly.com/rodriguesgrege_/', '_blank')}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
                      >
                        Book a Call
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
};

export default Header;
