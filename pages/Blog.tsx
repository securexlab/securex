
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { BLOG_POSTS } from '../constants';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <SectionTitle 
            title="Insights" 
            subtitle="Tech trends from the front lines of digital transformation."
          />
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brandBlue/50 shadow-sm"
            />
            <Search className="absolute right-3 top-3 w-5 h-5 text-slate-400" />
          </div>
        </div>

        {/* Featured Post */}
        <div className="relative rounded-3xl overflow-hidden group cursor-pointer border border-slate-200 dark:border-slate-800 mb-16 shadow-xl">
          <div className="aspect-[21/9] w-full">
            <img 
              src="https://picsum.photos/seed/tech/1600/900" 
              alt="Featured" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-8 md:p-12">
            <div className="flex items-center space-x-4 mb-4 text-brandBlue text-[10px] font-black uppercase tracking-widest">
              <span>Artificial Intelligence</span>
              <span className="text-white">•</span>
              <span className="text-white">Featured Article</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 max-w-3xl leading-tight group-hover:text-brandBlue transition-colors uppercase tracking-tighter">
              AI-Driven SaaS Development in 2025
            </h2>
            <div className="flex items-center text-white font-black uppercase tracking-widest text-xs">
               Read Now <ArrowRight className="ml-2 w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-brandBlue mb-3">
                  {post.category}
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-brandRed transition-colors uppercase tracking-tight leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow font-medium">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center space-x-2 text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                    <Calendar size={12} className="text-brandBlue" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                    <User size={12} className="text-brandBlue" />
                    <span>SecureX</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
