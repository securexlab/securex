
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="flex items-center mb-6 group">
              <Logo className="h-16 md:h-20" />
            </Link>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium">
              We Make the World Go Digital with secure, innovative, and affordable IT solutions. Partner with us for your digital transformation journey from Birtamode-4.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl text-slate-500 dark:text-slate-400 hover:text-[#40bfff] transition-all border border-slate-200 dark:border-slate-800 shadow-sm">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl text-slate-500 dark:text-slate-400 hover:text-[#40bfff] transition-all border border-slate-200 dark:border-slate-800 shadow-sm">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl text-slate-500 dark:text-slate-400 hover:text-[#40bfff] transition-all border border-slate-200 dark:border-slate-800 shadow-sm">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white mb-8">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-[#40bfff] transition-colors font-bold uppercase text-xs tracking-widest">About Us</Link></li>
              <li><Link to="/services" className="text-slate-600 dark:text-slate-400 hover:text-[#40bfff] transition-colors font-bold uppercase text-xs tracking-widest">Services</Link></li>
              <li><Link to="/blog" className="text-slate-600 dark:text-slate-400 hover:text-[#40bfff] transition-colors font-bold uppercase text-xs tracking-widest">Insights</Link></li>
              <li><Link to="/contact" className="text-slate-600 dark:text-slate-400 hover:text-[#40bfff] transition-colors font-bold uppercase text-xs tracking-widest">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white mb-8">Connect</h4>
            <ul className="space-y-5">
              <li className="flex items-start space-x-3 text-slate-600 dark:text-slate-400">
                <Mail className="w-5 h-5 text-[#ff5c5c] mt-0.5" />
                <span className="font-bold text-sm tracking-tight">contact@securexlab.com</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-600 dark:text-slate-400">
                <Phone className="w-5 h-5 text-[#ff5c5c] mt-0.5" />
                <span className="font-bold text-sm tracking-tight">+977 123 456789</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-600 dark:text-slate-400">
                <MapPin className="w-5 h-5 text-[#ff5c5c] mt-0.5" />
                <span className="font-bold text-sm tracking-tight">Birtamode-4, Jhapa, Nepal</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white mb-8">Newsletter</h4>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-xs font-bold uppercase tracking-tight">Get latest tech insights.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-4 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 transition-all"
              />
              <button className="absolute right-2 top-2 p-2 bg-[#ff5c5c] rounded-lg text-white hover:bg-[#ff4545] transition-colors shadow-md shadow-[#ff5c5c]/20">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 text-center text-slate-400 dark:text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
          <p>© {new Date().getFullYear()} SecureX Lab. Digital Solutions from Jhapa.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
