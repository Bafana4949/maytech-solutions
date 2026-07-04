import React from 'react';
import AnimatedSection from './animations/AnimatedSection';
import { Laptop, Smartphone, Wifi, Monitor, ShieldCheck } from 'lucide-react';
import SectionDivider from './graphics/SectionDivider';

const ITSupportServices = () => {
  const supportCategories = [
    {
      title: 'Laptop Support',
      icon: Laptop,
      color: 'text-blue-500',
      points: [
        'New laptop setup',
        'Laptop reset & recovery support',
        'Slow laptop troubleshooting',
        'Software installation',
        'Backup guidance'
      ]
    },
    {
      title: 'Cellphone Support',
      icon: Smartphone,
      color: 'text-emerald-500',
      points: [
        'Phone setup',
        'Slow phone troubleshooting',
        'App setup',
        'Email setup',
        'General usage assistance'
      ]
    },
    {
      title: 'WiFi & Internet Support',
      icon: Wifi,
      color: 'text-indigo-500',
      points: [
        'WiFi setup',
        'Router setup',
        'Weak signal troubleshooting',
        'Device connection problems',
        'Home/business network checks'
      ]
    },
    {
      title: 'Home Office Setup',
      icon: Monitor,
      color: 'text-orange-500',
      points: [
        'Laptop, monitor, keyboard, mouse setup',
        'Email and cloud setup',
        'Printer setup',
        'Video meeting setup',
        'Basic security setup'
      ]
    }
  ];

  return (
    <section id="it-support-services" className="py-16 lg:py-24 bg-background-light dark:bg-slate-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-primary-navy dark:text-white sm:text-4xl">
            IT Support for Homes & Small Businesses
          </h2>
          <p className="mt-6 text-lg text-text-muted dark:text-gray-300 leading-relaxed">
            Not every technology problem needs a big company solution. MayTech Solutions helps with everyday tech issues like setting up a new laptop, fixing slow devices, connecting WiFi, setting up email, preparing a home office, and helping small businesses stay connected.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {supportCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <AnimatedSection key={index} delay={index * 150} className="h-full">
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-slate-700 h-full hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-6 border-b border-gray-100 dark:border-slate-700 pb-4">
                    <div className={`p-3 rounded-xl bg-gray-50 dark:bg-slate-700 mr-4 ${category.color}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary-navy dark:text-white">{category.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {category.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <ShieldCheck className="w-5 h-5 text-accent-cyan mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-text-muted dark:text-gray-300 font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={600} className="text-center">
          <div className="inline-block bg-primary-navy/5 dark:bg-slate-800 border border-primary-navy/10 dark:border-slate-700 rounded-lg px-6 py-4 max-w-3xl">
            <p className="text-sm text-primary-navy dark:text-gray-300 font-medium flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 mr-2 text-primary-blue dark:text-accent-cyan" />
              Account recovery and device access support for verified owners only.
            </p>
          </div>
        </AnimatedSection>
      </div>
      <SectionDivider fillClass="fill-white dark:fill-slate-950" />
    </section>
  );
};

export default ITSupportServices;
