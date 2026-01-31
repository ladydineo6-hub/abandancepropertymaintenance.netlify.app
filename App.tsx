
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import DiagnosisAssistant from './components/DiagnosisAssistant';
import ContactForm from './components/ContactForm';
import Faq from './components/Faq';
import Footer from './components/Footer';
import { PHONE_NUMBER, TESTIMONIALS, WHATSAPP_LINK } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Trusted Partners / Client Stats */}
        <section className="py-12 bg-white border-b border-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-slate-400 font-bold uppercase text-xs tracking-widest mb-8">Trusted by property owners across South Africa</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-60">
              <span className="text-2xl font-black text-slate-900">LANDLORDS</span>
              <span className="text-2xl font-black text-slate-900">ESTATES</span>
              <span className="text-2xl font-black text-slate-900">OFFICES</span>
              <span className="text-2xl font-black text-slate-900">RETAIL</span>
            </div>
          </div>
        </section>

        <Services />
        
        {/* AI Integration */}
        <DiagnosisAssistant />

        {/* How It Works */}
        <section id="how-it-works" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Our Process</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Simple 5-Step Solution</h3>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              {[
                { step: '01', title: 'Contact Us', icon: 'fa-phone-volume' },
                { step: '02', title: 'Assessment', icon: 'fa-magnifying-glass' },
                { step: '03', title: 'Transparent Quote', icon: 'fa-file-invoice-dollar' },
                { step: '04', title: 'Professional Work', icon: 'fa-user-gear' },
                { step: '05', title: 'Final Satisfaction', icon: 'fa-square-check' }
              ].map((item, idx) => (
                <div key={idx} className="relative text-center group">
                  {idx < 4 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-[2px] bg-slate-200 z-0"></div>
                  )}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-20 h-20 bg-white border-2 border-slate-100 text-blue-600 rounded-3xl flex items-center justify-center mb-6 shadow-sm group-hover:border-blue-500 group-hover:shadow-lg transition-all">
                      <i className={`fas ${item.icon} text-2xl`}></i>
                    </div>
                    <span className="text-blue-600 font-bold text-xs uppercase tracking-tighter mb-2">Step {item.step}</span>
                    <h4 className="font-extrabold text-slate-900">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Features />

        {/* Testimonials */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Reviews</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900">What Our Clients Say</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 text-yellow-400 mb-6">
                      {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star text-sm"></i>)}
                    </div>
                    <p className="text-slate-700 italic leading-relaxed mb-8">"{t.text}"</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                      {t.name[0]}
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900">{t.name}</h5>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactForm />
        
        <Faq />

        {/* Floating WhatsApp CTA */}
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          className="fixed bottom-8 right-8 z-40 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all hover:scale-110 group animate-bounce-slow"
        >
          <i className="fab fa-whatsapp text-3xl"></i>
          <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs font-bold px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">
            Need help? WhatsApp Us
          </span>
        </a>
      </main>

      <Footer />
    </div>
  );
};

export default App;
