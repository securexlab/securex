
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { SERVICES } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Digital Services" 
          subtitle="Specialized IT solutions from Birtamode-4, JHAPA."
          center
        />

        <div className="space-y-24 mt-20">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="mb-6 p-4 bg-brandBlue/10 rounded-2xl inline-block text-brandBlue border border-brandBlue/20">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 font-medium">
                  {service.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-xs font-black text-slate-500 dark:text-slate-300 uppercase tracking-[0.2em] mb-4">Benefits</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-slate-600 dark:text-slate-400 font-bold text-sm">
                        <CheckCircle2 className="w-5 h-5 text-brandRed mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h4 className="font-black text-slate-900 dark:text-white mb-2 uppercase text-xs tracking-widest">Business Value</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">{service.value}</p>
                </div>

                <Link to="/contact" className="inline-flex items-center mt-8 px-8 py-4 bg-brandBlue hover:bg-brandBlue/90 text-white rounded-lg font-black uppercase tracking-widest text-sm transition-all shadow-lg shadow-brandBlue/20">
                   Start a Project <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              
              <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-brandBlue/10 to-brandRed/10 blur-3xl opacity-30"></div>
                <img 
                  src={
                    idx === 0 ? '/service1.gif' : 
                    idx === 1 ? '/service2.png' :
                    idx === 2 ? '/service3.gif' :
                    idx === 3 ? '/service4.gif' :
                    idx === 4 ? '/service5.png' :
                    `https://picsum.photos/seed/service-${service.id}/800/600`
                  } 
                  alt={service.title} 
                  className="rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl relative z-10 w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
