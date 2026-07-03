import React from 'react';
import { Quote } from 'lucide-react';
import SectionDivider from './graphics/SectionDivider';
import AnimatedSection from './animations/AnimatedSection';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-primary-navy dark:text-white sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-text-muted dark:text-gray-300">
            We measure our success by the success of the local businesses we partner with.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200} className="max-w-3xl mx-auto bg-background-light dark:bg-slate-900 rounded-2xl p-10 text-center border border-gray-100 dark:border-gray-700 shadow-sm relative group hover:shadow-md transition-shadow duration-300">
          <Quote className="w-12 h-12 text-primary-blue/20 dark:text-accent-blue/20 absolute top-6 left-6 transform group-hover:scale-110 transition-transform duration-300" />
          <Quote className="w-12 h-12 text-primary-blue/20 dark:text-accent-blue/20 absolute bottom-6 right-6 transform rotate-180 group-hover:scale-110 transition-transform duration-300" />
          
          <div className="relative z-10 py-8">
            <p className="text-xl md:text-2xl text-primary-navy dark:text-gray-300 italic font-medium leading-relaxed">
              "Client reviews coming soon. We are currently working hard on delivering excellent projects for our early partners!"
            </p>
            <div className="mt-8">
              <div className="w-12 h-12 bg-gray-200 dark:bg-slate-700 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-gray-400 dark:text-gray-500 font-bold text-xl">?</span>
              </div>
              <h4 className="font-bold text-primary-navy dark:text-white">Future Client</h4>
              <p className="text-sm text-text-muted dark:text-gray-400">South Africa</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
      
      <SectionDivider fillClass="fill-background-light dark:fill-slate-900" />
    </section>
  );
};

export default Testimonials;
