import React from 'react';
import AnimatedSection from './animations/AnimatedSection';
import { Layers, Database, BarChart3, Users, Settings, Workflow } from 'lucide-react';
import SectionDivider from './graphics/SectionDivider';

const WhatWeCanBuild = () => {
  const systems = [
    'Booking systems',
    'Inventory systems',
    'Point-of-sale systems',
    'Student management systems',
    'Staff/admin dashboards',
    'Compliance tracking systems',
    'Document upload portals',
    'Reporting dashboards',
    'Email automation systems',
    'Customer management systems',
    'Offline-capable business tools'
  ];

  return (
    <section id="what-we-build" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-primary-navy dark:text-white sm:text-4xl">
            What We Can Build
          </h2>
          <p className="mt-6 text-lg text-text-muted dark:text-gray-300 leading-relaxed">
            We build custom business systems that help you save time, reduce manual work, and manage operations better. No more messy spreadsheets or lost paperwork.
          </p>
        </AnimatedSection>

        <div className="bg-background-light dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systems.map((system, index) => (
              <AnimatedSection key={index} delay={index * 50} className="flex items-center space-x-3 bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-blue dark:bg-accent-cyan"></div>
                <span className="text-primary-navy dark:text-gray-200 font-medium">{system}</span>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={600} className="mt-12 text-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg text-white bg-primary-blue hover:bg-blue-700 transition-colors shadow-sm"
            >
              Request a Custom System
            </a>
          </AnimatedSection>
        </div>
      </div>
      <SectionDivider fillClass="fill-background-light dark:fill-slate-900" />
    </section>
  );
};

export default WhatWeCanBuild;
