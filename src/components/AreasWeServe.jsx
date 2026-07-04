import React from 'react';
import { MapPin } from 'lucide-react';
import AnimatedSection from './animations/AnimatedSection';

const AreasWeServe = () => {
  return (
    <section id="areas-we-serve" className="py-12 bg-white dark:bg-slate-950 transition-colors duration-300 border-y border-gray-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          <div className="w-16 h-16 rounded-full bg-primary-blue/10 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 border border-primary-blue/20 dark:border-slate-700">
            <MapPin className="w-8 h-8 text-primary-blue dark:text-accent-blue" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary-navy dark:text-white mb-2">Areas We Serve</h2>
            <p className="text-lg text-text-muted dark:text-gray-300">
              MayTech Solutions supports clients in <strong className="text-primary-navy dark:text-gray-100">Pretoria, Witbank/eMalahleni, Mpumalanga, Gauteng</strong>, and across South Africa <strong className="text-primary-blue dark:text-accent-blue">remotely</strong>.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AreasWeServe;
