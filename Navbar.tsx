
import React, { useState, useEffect } from 'react';
import { PHONE_NUMBER } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <div className={`p-2 rounded-lg ${isScrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}>
                <i className="fas fa-hammer text-xl"></i>
              </div>
              <span className={`text-xl font-extrabold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                ABANDANCE
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold hover:text-blue-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-100'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#quote"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
            >
              Request Quote
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-slate-600' : 'text-white'}`}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full animate-fadeInDown">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-4 text-base font-medium text-slate-700 border-b border-slate-50 hover:bg-slate-50"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#quote"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center mt-4 bg-blue-600 text-white px-5 py-4 rounded-xl text-base font-bold"
            >
              Request Quote
            </a>
            <div className="text-center mt-4 text-slate-500 text-sm">
              <i className="fas fa-phone mr-2"></i> {PHONE_NUMBER}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
