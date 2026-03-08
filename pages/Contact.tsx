
import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Mail, Phone, MapPin, Send, MessageSquare, Briefcase, User, AtSign, CheckCircle, Loader2, MessageCircle } from 'lucide-react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'General Inquiry',
    message: ''
  });

  const whatsappNumber = "9779762932799"; // Updated to match ChatBot number

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch("https://formspree.io/f/mgonvzno", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', service: 'General Inquiry', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  const handleWhatsAppSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const formattedMessage = `*New Inquiry from SecureX Website*%0A%0A` +
      `*Name:* ${formState.name || 'Not provided'}%0A` + 
      `*Email:* ${formState.email || 'Not provided'}%0A` + 
      `*Service:* ${formState.service}%0A%0A` + 
      `*Message:* ${formState.message || 'No message provided'}`;

    const waLink = `https://wa.me/${whatsappNumber}?text=${formattedMessage}`;
    window.open(waLink, '_blank');
  };

  const contactInfo = [
    { icon: <Mail />, title: 'Email', value: 'info@securexlab.com', link: 'mailto:info@securexlab.com' },
    { icon: <Mail />, title: 'Email', value: 'contact@securexlab.com', link: 'mailto:contact@securexlab.com' },
    { icon: <Phone />, title: 'Phone', value: '+977 123 456789', link: 'tel:+977123456789' },
    { icon: <MessageCircle />, title: 'WhatsApp', value: 'Chat Now', link: `https://wa.me/${whatsappNumber}` },
    { icon: <MapPin />, title: 'Office', value: 'Birtamode-4, Jhapa, Nepal', link: '#' }
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Let’s Start a Conversation" 
          subtitle="Have a project in mind? Use the form below to email us or send the details directly to our WhatsApp."
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
          {/* Info Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Contact Information</h3>
              <div className="space-y-8">
                {contactInfo.map((info, idx) => (
                  <a 
                    key={idx} 
                    href={info.link} 
                    target={info.title === 'WhatsApp' ? "_blank" : undefined}
                    rel={info.title === 'WhatsApp' ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors border ${
                      info.title === 'WhatsApp' 
                        ? 'bg-[#25D366]/10 text-[#25D366] border-[#25D366]/20 group-hover:bg-[#25D366] group-hover:text-white' 
                        : 'bg-[#40bfff]/10 text-[#40bfff] border-[#40bfff]/20 group-hover:bg-[#40bfff] group-hover:text-white'
                    }`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-slate-500 text-xs font-black uppercase tracking-widest">{info.title}</h4>
                      <p className="text-slate-900 dark:text-white font-bold group-hover:text-[#40bfff] transition-colors">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#ff5c5c]/5 to-[#40bfff]/5 dark:from-[#ff5c5c]/10 dark:to-[#40bfff]/10 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h4 className="text-slate-900 dark:text-white font-black uppercase tracking-widest text-sm mb-4">Fast Response</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed">
                WhatsApp inquiries usually receive a response within <span className="text-[#25D366] font-black">15 minutes</span> during business hours.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2">
            <div className="p-8 md:p-12 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
              
              {status === 'success' && (
                <div className="absolute inset-0 bg-white/90 dark:bg-slate-900/95 z-20 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-300">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-500 mb-6">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase mb-4">Inquiry Logged!</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium max-w-sm">
                    Your details have been recorded. Our Birtamode team will reach out shortly.
                  </p>
                  <button onClick={() => setStatus('idle')} className="mt-8 text-brandBlue font-black uppercase tracking-widest text-xs hover:underline">
                    Send another message
                  </button>
                </div>
              )}

              <form onSubmit={handleEmailSubmit} className="space-y-6">
                {status === 'error' && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-sm font-bold text-center animate-in fade-in slide-in-from-top-2">
                    Something went wrong. Please try WhatsApp or email us directly.
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center">
                      <User size={14} className="mr-2 text-brandRed" /> Full Name
                    </label>
                    <input 
                      type="text" 
                      required
                      disabled={status === 'loading'}
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                      placeholder="Your Name" 
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brandRed/50 transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center">
                      <AtSign size={14} className="mr-2 text-brandRed" /> Email
                    </label>
                    <input 
                      type="email" 
                      required
                      disabled={status === 'loading'}
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                      placeholder="your@email.com" 
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brandRed/50 transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center">
                    <Briefcase size={14} className="mr-2 text-brandRed" /> Interested Service
                  </label>
                  <select 
                    value={formState.service}
                    onChange={e => setFormState({...formState, service: e.target.value})}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brandRed/50 appearance-none font-medium"
                  >
                    <option>General Inquiry</option>
                    <option>Web Development</option>
                    <option>Software Development</option>
                    <option>SaaS Development</option>
                    <option>Digital Marketing</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center">
                    <MessageSquare size={14} className="mr-2 text-brandRed" /> Message
                  </label>
                  <textarea 
                    rows={4}
                    required
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                    placeholder="Tell us about your project..."
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brandRed/50 resize-none font-medium"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="py-4 bg-brandRed hover:bg-[#ff4545] text-white rounded-xl font-black uppercase tracking-widest text-sm shadow-lg shadow-brandRed/20 transition-all flex items-center justify-center group disabled:opacity-50"
                  >
                    {status === 'loading' ? <Loader2 className="animate-spin" /> : <>Send via Email <Send size={16} className="ml-2" /></>}
                  </button>
                  
                  <button 
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="py-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl font-black uppercase tracking-widest text-sm shadow-lg shadow-[#25D366]/20 transition-all flex items-center justify-center group"
                  >
                    Send via WhatsApp <MessageCircle size={18} className="ml-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
