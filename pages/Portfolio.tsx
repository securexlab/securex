
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { PORTFOLIO } from '../constants';
import { ExternalLink, Tag } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Case Studies" 
          subtitle="Real problems. Secure solutions. Scalable outcomes."
          center
        />

        <div className="grid grid-cols-1 gap-32 mt-20">
          {PORTFOLIO.map((project, idx) => (
            <div key={project.id} className={`flex flex-col lg:flex-row gap-16 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-3/5">
                <div className="relative group overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-auto group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 dark:bg-slate-950/80 backdrop-blur-md rounded-full border border-slate-200 dark:border-slate-700 text-brandRed text-[10px] font-black uppercase tracking-widest flex items-center shadow-md">
                    <Tag className="w-3 h-3 mr-2" />
                    {project.industry}
                  </div>
                </div>
              </div>
              
              <div className="lg:w-2/5 flex flex-col justify-center">
                <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter">{project.title}</h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-brandBlue text-[10px] font-black uppercase tracking-[0.2em] mb-2">The Challenge</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-brandBlue text-[10px] font-black uppercase tracking-[0.2em] mb-2">The Solution</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{project.solution}</p>
                  </div>
                  <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border-l-4 border-brandRed shadow-sm">
                    <h4 className="text-slate-900 dark:text-white font-black uppercase tracking-widest text-[10px] mb-2">Outcome</h4>
                    <p className="text-slate-700 dark:text-slate-300 font-bold italic">"{project.outcome}"</p>
                  </div>
                </div>

                <button className="mt-8 flex items-center text-brandRed font-black uppercase tracking-widest text-xs hover:translate-x-2 transition-transform group">
                  View Full Case Study <ExternalLink className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
