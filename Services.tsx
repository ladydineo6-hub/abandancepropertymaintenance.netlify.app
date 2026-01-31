
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">What We Do</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Complete Property Solutions</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From foundation to roof, we provide comprehensive maintenance and renovation services for every part of your property.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 card-hover flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-md">
                  <i className={`fas ${service.icon} text-xl`}></i>
                </div>
              </div>
              <div className="p-8 flex-grow">
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <a 
                  href="#quote" 
                  className="text-blue-600 font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Get a quote <i className="fas fa-chevron-right text-xs"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
