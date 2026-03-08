
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { SAAS_PRODUCTS } from '../constants';
import { Check, Zap, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="SaaS Ecosystem" 
          subtitle="Cloud solutions designed for the modern global marketplace."
          center
        />

        <div className="grid grid-cols-1 gap-20 mt-20">
          {SAAS_PRODUCTS.map((product) => (
            <div key={product.id} className="relative group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <span className="inline-block px-4 py-1 rounded-full bg-brandRed/10 text-brandRed text-[10px] font-black uppercase tracking-widest mb-4 border border-brandRed/20">
                    SaaS Platform
                  </span>
                  <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tighter">{product.name}</h3>
                  <p className="text-brandBlue text-lg font-black mb-6 uppercase tracking-widest italic">{product.tagline}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 font-medium">{product.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:border-brandBlue/30 transition-colors shadow-sm">
                        <Check className="text-brandRed mr-3 w-5 h-5 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300 font-bold text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Link to="/contact" className="px-8 py-4 bg-brandRed hover:bg-brandRed/90 text-white rounded-lg font-black uppercase tracking-widest text-xs shadow-lg shadow-brandRed/20 transition-all flex items-center">
                      Request Demo <Zap className="ml-2 w-4 h-4" />
                    </Link>
                    <button className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-800 rounded-lg font-black uppercase tracking-widest text-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center shadow-sm">
                      Documentation <Globe className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-brandBlue/10 blur-3xl rounded-full"></div>
                    <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
                      <img src={product.imageUrl} alt={product.name} className="w-full h-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-center max-w-4xl mx-auto shadow-sm">
          <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">Custom Enterprise Builds</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8 font-medium">
            Need a custom deployment or white-labeled integration? We build tailored modifications for our core SaaS products.
          </p>
          <Link to="/contact" className="text-brandRed font-black uppercase tracking-widest text-sm flex items-center justify-center hover:scale-105 transition-transform">
            Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
