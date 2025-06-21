
const ClientLogos = () => {
  const logos = [
    "TechCorp", "DataFlow", "AI Systems", "CloudTech", "InnovateLab",
    "FutureTech", "SmartOps", "AutomateNow", "DigitalEdge", "NextGen AI",
    "TechCorp", "DataFlow", "AI Systems", "CloudTech", "InnovateLab",
    "FutureTech", "SmartOps", "AutomateNow", "DigitalEdge", "NextGen AI"
  ];

  return (
    <section className="py-16 bg-white border-y border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-midnight-navy mb-4">
            Trusted by ambitious teams on four continents
          </h2>
        </div>
        
        <div className="overflow-hidden">
          <div className="flex animate-scroll">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 px-6 py-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-electric-cyan transition-colors"
              >
                <span className="text-lg font-medium text-slate-600">{logo}</span>
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-center mt-8 text-slate-600">
          From Series-A SaaS to Fortune 500 ops—our agents run quietly behind the scenes.
        </p>
      </div>
    </section>
  );
};

export default ClientLogos;
