
import React from 'react';
import { PHONE_NUMBER, BOOKING_EMAIL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-blue-600 text-white">
                <i className="fas fa-hammer text-xl"></i>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white uppercase">
                Abandance
              </span>
            </a>
            <p className="text-sm leading-relaxed text-slate-400">
              Reliable property maintenance, repairs, and renovations you can trust. Serving homeowners, landlords, and businesses across South Africa.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all">
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all">
                <i className="fab fa-whatsapp text-sm"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all">
                <i className="fab fa-instagram text-sm"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-sm hover:text-blue-400 transition-colors">Our Services</a></li>
              <li><a href="#how-it-works" className="text-sm hover:text-blue-400 transition-colors">How It Works</a></li>
              <li><a href="#why-us" className="text-sm hover:text-blue-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#faq" className="text-sm hover:text-blue-400 transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-sm hover:text-blue-400 transition-colors">Plumbing Repairs</a></li>
              <li><a href="#services" className="text-sm hover:text-blue-400 transition-colors">Electrical Work</a></li>
              <li><a href="#services" className="text-sm hover:text-blue-400 transition-colors">Home Renovations</a></li>
              <li><a href="#services" className="text-sm hover:text-blue-400 transition-colors">Roof Waterproofing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm">
                <i className="fas fa-phone text-blue-500"></i>
                <span>{PHONE_NUMBER}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <i className="fas fa-envelope text-blue-500"></i>
                <a href={`mailto:${BOOKING_EMAIL}`} className="hover:text-blue-400 transition-colors">{BOOKING_EMAIL}</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <i className="fas fa-map-marker-alt text-blue-500"></i>
                <span>South Africa (Local Service)</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <i className="fas fa-calendar-alt text-blue-500"></i>
                <span>Mon – Sat: 08:00 – 17:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Abandance Property Maintenance. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
