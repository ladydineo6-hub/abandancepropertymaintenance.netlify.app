
import React, { useState } from 'react';
import { FAQS } from '../constants';

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Common Questions</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">We've Got Answers</h3>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${activeIndex === index ? 'border-blue-500 ring-1 ring-blue-500' : 'border-slate-100'}`}
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-lg text-slate-900">{faq.question}</span>
                <i className={`fas ${activeIndex === index ? 'fa-minus' : 'fa-plus'} text-blue-600 transition-transform`}></i>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed bg-slate-50/50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
