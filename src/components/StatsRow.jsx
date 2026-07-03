import React from 'react';
import AnimatedSection from './animations/AnimatedSection';

const StatsRow = () => {
  const stats = [
    { value: '5+', label: 'Real Software Projects' },
    { value: 'Full-Stack', label: 'Development Experience' },
    { value: '100%', label: 'South African Business Focus' },
    { value: 'Web & App', label: 'Database & Cloud Skills' }
  ];

  return (
    <div className="bg-primary-navy dark:bg-slate-800 py-10 transition-colors duration-300 border-y border-white/10 dark:border-slate-700 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-white/10 dark:divide-slate-700">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} delay={index * 100} className="text-center px-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-cyan-300 dark:from-cyan-400 dark:to-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-medium text-blue-100 dark:text-gray-300 uppercase tracking-wider">
                {stat.label}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsRow;
