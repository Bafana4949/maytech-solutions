import React from 'react';
import { MessageSquare } from 'lucide-react';
import AnimatedSection from './animations/AnimatedSection';

const ClientReviews = () => {
  return (
    <section id="client-reviews" className="py-16 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-primary-navy dark:text-white sm:text-4xl mb-8">
            Client Reviews
          </h2>
          
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-10 border border-gray-100 dark:border-slate-700 shadow-sm max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-slate-700 flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-gray-400 dark:text-gray-500" />
              </div>
            </div>
            <p className="text-lg text-text-muted dark:text-gray-300 italic mb-6">
              "Client reviews will be added soon as we complete more projects for local businesses and community members."
            </p>
            <div className="h-1 w-16 bg-primary-blue/30 dark:bg-slate-600 mx-auto rounded-full"></div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ClientReviews;
