import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Play, Sparkles, CheckCircle, Award, Puzzle, Rocket } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-50/30 to-cyan-50/20 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-light opacity-30"></div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-full px-4 py-2 shadow-sm animate-fade-in">
                <Sparkles className="w-4 h-4 text-electric-cyan" />
                <span className="text-sm font-medium text-slate-700">Premier AI Development Agency</span>
              </div>

              {/* Main headline */}
              <div className="space-y-6 animate-fade-in-delay-1">
                <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] text-slate-900">
                We Build Custom { " "} <span className="gradient-text-clean"> AI Solutions</span> For Your Business
               
                </h1>
                
                <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-2xl font-light">
                Partner with us to develop tailored AI solutions that transform your business operations and drive innovation.


                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
                <Button className=" text-white px-8 py-6 text-md font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <span>Get Free Consultation</span>
                  <div className="ml-2 transition-transform group-hover:translate-x-1">
                    <Play className="w-5 h-5" />
                  </div>
                </Button>
                <Button variant="outline" className="border-2 border-slate-300 hover:border-electric-cyan bg-white hover:bg-blue-50 text-slate-700 hover:text-electric-cyan px-8 py-6 text-md font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
                  <span>View our work</span>
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              {/* Stats pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 animate-fade-in-delay-3">
              
                <div className="bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-2 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
                    <Award className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div className="text-left">
                      <div className="text-slate-900 font-bold text-sm">Expert Team</div>
                     
                    </div>
                  </div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-2 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Puzzle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <div className="text-slate-900 font-bold text-sm">Custom Solutions</div>
                     
                    </div>
                  </div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-2 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Rocket className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="text-left">
                      <div className="text-slate-900 font-bold text-sm">Fast Delivery</div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative lg:flex justify-end items-center hidden animate-fade-in-delay-2">
              <div className="relative">
                {/* Three stacked cards on the left */}
                <div className="absolute left-0 top-0 z-30">
                  {/* Deploy Ready card */}
                  <div className="bg-white/90 backdrop-blur-sm border border-slate-200/50 w-64 h-32 rounded-2xl p-6 absolute top-0 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <div className="text-slate-900 font-semibold">Deploy Ready</div>
                        <div className="text-slate-600 text-sm">48h average</div>
                      </div>
                    </div>
                  </div>

                  {/* Security card */}
                  <div className="bg-white/90 backdrop-blur-sm border border-slate-200/50 w-64 h-32 rounded-2xl p-6 absolute top-40 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Target className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-slate-900 font-semibold">Client Satisfaction</div>
                        <div className="text-slate-600 text-sm">99% Happy clients</div>
                      </div>
                    </div>
                  </div>

                  {/* Support card */}
                  <div className="bg-white/90 backdrop-blur-sm border border-slate-200/50 w-64 h-32 rounded-2xl p-6 absolute top-80 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-purple-100 rounded-xl flex items-center justify-center">
                        <Users className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-slate-900 font-semibold"> Expert assistance</div>
                        <div className="text-slate-600 text-sm">24/7 Support</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main card - moved to right */}
                <div className="pl-10 bg-white/90 backdrop-blur-sm border border-slate-200/50 w-90 h-96 rounded-3xl p-8 shadow-xl ml-56">
                  <div className="h-full pl-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-electric-cyan/10 rounded-2xl flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-electric-cyan" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">AI Automation</h3>
                      <p className="text-slate-600">Intelligent workflows that scale with your business</p>
                      <p className="text-slate-600">Automate repetitive tasks, boost accuracy, and free your team to focus on high-value work.</p>
                      <p className="text-slate-600">From Fine Tuning LLMs to Custom ML Models</p>
                    </div>
              
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-8 right-8 w-16 h-16 bg-blue-100/50 rounded-full blur-xl"></div>
                <div className="absolute -bottom-12 right-8 w-20 h-20 bg-cyan-100/30 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
