
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Rocket, Heart, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  const whatsappNumber = "977123456789"; // Replace with your real number
  const whatsappMessage = encodeURIComponent("Hello SecureX Lab, I'm interested in your digital services!");

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50 dark:bg-slate-950">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-[#40bfff]/5 dark:bg-[#40bfff]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-[#ff5c5c]/5 dark:bg-[#ff5c5c]/10 blur-[120px] rounded-full"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-[#40bfff] dark:text-[#40bfff] text-xs font-black uppercase tracking-widest mb-8 animate-fade-in shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#ff5c5c] mr-2 animate-pulse"></span>
              Secure, Innovative & Affordable
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-tight uppercase">
              We Make the World <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#40bfff] via-[#ff5c5c] to-[#40bfff]">Go Digital</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              Empowering businesses through cutting-edge software development and strategic digital solutions from Birtamode.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="w-full sm:w-auto px-10 py-4 bg-[#ff5c5c] hover:bg-[#ff4545] text-white rounded-lg font-black uppercase tracking-widest text-lg transition-all shadow-xl shadow-[#ff5c5c]/20 flex items-center justify-center group">
                Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg font-black uppercase tracking-widest text-lg transition-all flex items-center justify-center shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle className="mr-2 w-6 h-6" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white dark:bg-slate-950/50 border-y border-slate-100 dark:border-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Our Digital Expertise" 
            subtitle="From concept to deployment, we provide end-to-end technology solutions."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 hover:border-[#40bfff] dark:hover:border-[#40bfff]/50 hover:bg-white dark:hover:bg-slate-900/50 transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-md">
                <div className="mb-6 p-3 bg-white dark:bg-slate-800 rounded-xl inline-block text-[#40bfff] group-hover:bg-[#40bfff] group-hover:text-white transition-colors border border-slate-200 dark:border-slate-800">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2 font-medium">{service.description}</p>
                <Link to="/services" className="flex items-center text-[#ff5c5c] font-black uppercase tracking-wider hover:text-[#ff4545] text-sm">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 overflow-hidden bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <SectionTitle title="Why Partner with SecureX Lab?" />
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#40bfff]/10 rounded-full flex items-center justify-center">
                    <Shield className="text-[#40bfff] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-slate-900 dark:text-white mb-2 uppercase tracking-wide">Uncompromising Security</h4>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">Security is not an afterthought; it's built into every line of code we write.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#ff5c5c]/10 rounded-full flex items-center justify-center">
                    <Rocket className="text-[#ff5c5c] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-slate-900 dark:text-white mb-2 uppercase tracking-wide">Constant Innovation</h4>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">We leverage the latest tech stacks to ensure your business stays ahead of the curve.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#40bfff]/10 to-[#ff5c5c]/10 blur-3xl -z-10 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                alt="SecureX Team" 
                className="rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800"
              />
              <div className="absolute -bottom-8 -left-8 bg-white/90 dark:bg-slate-900/90 glass p-6 rounded-2xl border border-slate-200 dark:border-slate-700 max-w-[200px] hidden sm:block shadow-xl">
                <div className="flex items-center space-x-2 text-[#ff5c5c] mb-2">
                  <CheckCircle2 size={20} />
                  <span className="font-black uppercase tracking-widest text-xs">Fast Delivery</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-bold uppercase tracking-tighter">Efficient agile methodology ensures results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#40bfff] to-[#ff5c5c] p-12 overflow-hidden text-center shadow-2xl shadow-[#40bfff]/30">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 relative z-10 uppercase tracking-tighter">
              Accelerate Your <br className="hidden md:block" /> Digital Future
            </h2>
            <p className="text-white text-lg mb-10 max-w-2xl mx-auto relative z-10 font-bold uppercase tracking-widest opacity-90">
              Get a free consultation from Birtamode's top IT experts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
              <Link to="/contact" className="px-12 py-4 bg-white text-slate-900 rounded-lg font-black uppercase tracking-widest text-lg hover:scale-105 transition-all shadow-lg">
                Start Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
