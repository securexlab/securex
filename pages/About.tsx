
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Shield, Compass, Eye, Rocket, CheckCircle2, Heart, Zap, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="About Us" center />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <SectionTitle 
              title="Empowering the Digital Future" 
              subtitle="SecureX Lab was founded with a singular focus: to bridge the gap between complex technology and business success."
            />
            <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
              <p>
                We are a team of passionate developers, designers, and strategists dedicated to delivering software that is not just functional, but transformative. Based in the heart of Birtamode, we serve clients globally, bringing world-class tech solutions to local and international markets.
              </p>
              <p>
                Since our inception, we have been driven by the belief that technology should be accessible, secure, and scalable. We don't just write code; we architect digital ecosystems that allow businesses to thrive in an increasingly connected world.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#40bfff]/20 to-[#ff5c5c]/20 rounded-3xl blur-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-700"></div>
            <img 
              src="/about.png" 
              alt="Our Office Culture" 
              className="relative z-10 w-full h-auto hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="p-10 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="w-16 h-16 bg-brandBlue/10 rounded-2xl flex items-center justify-center mb-6 text-brandBlue">
              <Compass size={32} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
              To make the world go digital by delivering secure, innovative, and affordable IT solutions that empower businesses of all sizes.
            </p>
          </div>
          <div className="p-10 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="w-16 h-16 bg-brandRed/10 rounded-2xl flex items-center justify-center mb-6 text-brandRed">
              <Eye size={32} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
              To become a global leader in IT services and SaaS products, recognized for setting high standards in quality and security.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-32">
          <SectionTitle title="Our Core Values" center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Innovation', desc: 'Pushing boundaries to find better solutions.', icon: <Rocket className="w-6 h-6" /> },
              { title: 'Security', desc: 'Protecting data is our first priority.', icon: <Shield className="w-6 h-6" /> },
              { title: 'Integrity', desc: 'Transparent communication in every project.', icon: <CheckCircle2 className="w-6 h-6" /> },
              { title: 'Satisfaction', desc: 'Your success is our ultimate metric.', icon: <Heart className="w-6 h-6" /> }
            ].map((value, idx) => (
              <div key={idx} className="text-center p-8 rounded-2xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="mx-auto w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-4 text-brandBlue">
                  {value.icon}
                </div>
                <h4 className="text-lg font-black text-slate-900 dark:text-white mb-2 uppercase tracking-wide">{value.title}</h4>
                <p className="text-slate-500 dark:text-slate-500 text-sm font-bold uppercase tracking-tighter">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <div className="relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 md:p-12 overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#40bfff]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff5c5c]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <SectionTitle title="Our Approach" center />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="w-16 h-16 mx-auto bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-[#40bfff]">
                  <Zap size={32} />
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase">Agile & Fast</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium">We iterate quickly, delivering value in weeks, not months, keeping you ahead of the competition.</p>
              </div>
              <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="w-16 h-16 mx-auto bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-[#ff5c5c]">
                  <Shield size={32} />
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase">Security First</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium">Every line of code is audited for vulnerabilities. We build fortresses, not just features.</p>
              </div>
              <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="w-16 h-16 mx-auto bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-[#40bfff]">
                  <Globe size={32} />
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase">Global Standards</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium">Local presence, global quality. We adhere to international coding standards and best practices.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
