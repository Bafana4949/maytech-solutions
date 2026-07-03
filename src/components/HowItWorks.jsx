import React from 'react';
import { MessageSquare, Search, Wrench, ShieldCheck } from 'lucide-react';
import SectionDivider from './graphics/SectionDivider';
import AnimatedSection from './animations/AnimatedSection';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Tell Us What You Need',
      description: 'Send us a message on WhatsApp or through the contact form.',
      icon: MessageSquare
    },
    {
      number: '2',
      title: 'We Understand the Problem',
      description: 'We ask the right questions and recommend the best solution for your budget.',
      icon: Search
    },
    {
      number: '3',
      title: 'We Build, Fix, or Set Up',
      description: 'We create your website, build your system, set up your devices, or solve your IT issue.',
      icon: Wrench
    },
    {
      number: '4',
      title: 'We Support You Afterward',
      description: 'We help with updates, troubleshooting, improvements, and ongoing support.',
      icon: ShieldCheck
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-primary-navy dark:text-white sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-text-muted dark:text-gray-300">
            A simple, clear process to get your technology working for you.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <AnimatedSection key={index} delay={index * 150} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/4 right-0 w-full h-0.5 bg-gray-200 dark:bg-slate-700 transform translate-x-1/2 -z-10"></div>
                )}
                <div className="bg-white dark:bg-slate-800 rounded-xl p-8 h-full border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-full bg-primary-blue/10 dark:bg-slate-700 flex items-center justify-center mb-6 relative">
                    <Icon className="w-8 h-8 text-primary-blue dark:text-accent-blue" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary-navy dark:bg-primary-blue text-white flex items-center justify-center font-bold text-sm shadow-md">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-3">{step.title}</h3>
                  <p className="text-text-muted dark:text-gray-400 flex-grow">{step.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
