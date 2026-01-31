
import React from 'react';
import { PHONE_NUMBER, WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover"
          alt="Maintenance worker"
        />
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full mb-6 border border-blue-500/30 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-sm font-bold uppercase tracking-wider">Professional. Affordable. On Time.</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              Reliable <span className="text-blue-500">Property</span> Maintenance You Can Trust
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              From emergency repairs to complete home renovations. We take care of everything — so you don’t have to.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#quote" 
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-500/30 flex items-center justify-center gap-2"
              >
                Request a Free Quote <i className="fas fa-arrow-right"></i>
              </a>
              <a 
                href={WHATSAPP_LINK} 
                target="_blank"
                className="bg-white/10 text-white border border-white/20 backdrop-blur-md px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                <i className="fab fa-whatsapp text-2xl text-green-400"></i> WhatsApp Us
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 opacity-70">
              <div className="flex items-center gap-3 text-white">
                <i className="fas fa-check-circle text-blue-500"></i>
                <span className="font-medium">Insured</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <i className="fas fa-check-circle text-blue-500"></i>
                <span className="font-medium">Free Quotes</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <i className="fas fa-check-circle text-blue-500"></i>
                <span className="font-medium">Local Experts</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative z-10 bg-white/5 border border-white/10 rounded-3xl p-2 backdrop-blur-xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" 
                className="rounded-2xl shadow-inner w-full h-[500px] object-cover" 
                alt="House Renovation"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl animate-bounce-slow">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm opacity-80">Satisfaction Rate</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-slate-800 text-white p-6 rounded-2xl shadow-xl border border-slate-700">
                <div className="flex items-center gap-2 mb-1">
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                </div>
                <div className="text-sm">"Top tier service!"</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
