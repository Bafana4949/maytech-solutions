import React from 'react';
import founderImg from '../assets/founder/founder.jpg';
import { Linkedin } from 'lucide-react';
import AnimatedSection from './animations/AnimatedSection';

const MeetFounder = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="bg-gray-50 dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-blue rounded-full transform translate-x-3 translate-y-3 opacity-20"></div>
                <img 
                  src={founderImg} 
                  alt="Bafana Bhuda" 
                  className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-xl relative z-10"
                />
              </div>
            </div>
            
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl font-extrabold text-primary-navy dark:text-white sm:text-4xl mb-4">
                Meet Your "Kasi Friend"
              </h2>
              <h3 className="text-xl text-primary-blue dark:text-accent-blue font-semibold mb-6">
                Innovator & Local Tech Problem Solver
              </h3>
              <p className="text-lg text-text-muted dark:text-gray-300 mb-6 leading-relaxed">
                I believe that every local business, school, and individual deserves access to high-quality technology without the confusing jargon or corporate price tags. Whether you need a custom system, a professional website, or simply a reliable repair for your devices, I'm here to solve your day-to-day problems.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MeetFounder;
