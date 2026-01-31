
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Skilled Workmanship',
      desc: 'Expert team with years of experience in property maintenance and high-end renovations.',
      icon: 'fa-medal'
    },
    {
      title: 'Affordable Pricing',
      desc: 'Transparent costs with no hidden fees. We provide high value for every Rand spent.',
      icon: 'fa-tags'
    },
    {
      title: 'Reliable & Punctual',
      desc: 'We value your time. Our team arrives as scheduled and completes work within the agreed timeframe.',
      icon: 'fa-clock'
    },
    {
      title: 'Quality Materials',
      desc: 'We only use top-tier finishes and materials to ensure your repairs last for years to come.',
      icon: 'fa-award'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Why Choose Us</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
              One-Stop Solution for Your <span className="text-blue-500">Property Needs</span>
            </h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Abandance Property Maintenance is built on trust and excellence. We understand that your property is your most valuable asset, and we treat it with the care and professionalism it deserves.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-600/20">
                    <i className={`fas ${f.icon} text-xl`}></i>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">{f.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1595814433015-e6f5cd696144?auto=format&fit=crop&q=80&w=800" 
                alt="Working on property" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats */}
            <div className="absolute -bottom-10 -right-6 md:right-10 bg-blue-600 p-8 rounded-3xl shadow-2xl text-white">
              <div className="text-4xl font-extrabold mb-1">500+</div>
              <div className="text-blue-100 font-medium">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
