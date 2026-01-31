
import React, { useState } from 'react';
import { PHONE_NUMBER, FORMSPREE_ENDPOINT } from '../constants';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setError(data.errors ? data.errors.map((err: any) => err.message).join(', ') : 'Oops! There was a problem submitting your form');
      }
    } catch (err) {
      setError('Connection error. Please try again or contact us via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden grid lg:grid-cols-5 border border-slate-100">
          <div className="lg:col-span-2 bg-blue-600 p-8 md:p-12 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-extrabold mb-6">Get a Free Quote</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Fill out the form and our team will get back to you within 24 hours to discuss your project requirements.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Call / WhatsApp</p>
                    <p className="text-xl font-bold">{PHONE_NUMBER}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-location-dot"></i>
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Service Area</p>
                    <p className="text-xl font-bold">South Africa & Local Areas</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Work Days</p>
                    <p className="text-xl font-bold">Monday – Saturday</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 p-8 md:p-12">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fadeIn">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-check text-4xl"></i>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Quote Request Sent!</h4>
                <p className="text-slate-600">Thank you for reaching out. Our team will contact you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-blue-600 font-bold hover:underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input 
                      name="name"
                      type="text" 
                      required 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                    <input 
                      name="phone"
                      type="tel" 
                      required 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g. 071 169 1676"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input 
                    name="email"
                    type="email" 
                    required 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Service Needed</label>
                  <select name="service" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>General Maintenance</option>
                    <option>Plumbing</option>
                    <option>Electrical</option>
                    <option>Painting</option>
                    <option>Renovations</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Tell us about your project</label>
                  <textarea 
                    name="message"
                    rows={4} 
                    required 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Provide some details so we can give a better estimate..."
                  />
                </div>
                
                {error && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
                    {error}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-2xl shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>Sending... <i className="fas fa-spinner fa-spin"></i></>
                  ) : (
                    <>Send Request <i className="fas fa-paper-plane"></i></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
