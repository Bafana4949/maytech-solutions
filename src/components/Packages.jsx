import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import SectionDivider from './graphics/SectionDivider';
import AnimatedSection from './animations/AnimatedSection';

const Packages = () => {
  const packages = [
    {
      name: 'Starter Website',
      description: 'Perfect for small businesses establishing their first online presence.',
      features: [
        'Responsive 3-5 page layout',
        'Mobile & tablet friendly',
        'Basic SEO setup',
        'Contact form integration',
        'Social media links'
      ],
      buttonText: 'Request Quote',
      isPopular: false
    },
    {
      name: 'Business Website',
      description: 'A comprehensive website tailored for growing businesses with specific needs.',
      features: [
        'Up to 10 custom pages',
        'Advanced SEO & Analytics',
        'Content Management System (CMS)',
        'Custom domain & business email',
        'High-performance hosting'
      ],
      buttonText: 'Request Quote',
      isPopular: true
    },
    {
      name: 'Custom Business System',
      description: 'Bespoke software designed to automate and streamline your operations.',
      features: [
        'Fully custom web/mobile app',
        'Secure database architecture',
        'Automated workflows & reports',
        'User roles & permissions',
        'API integrations (e.g. payment)'
      ],
      buttonText: 'Request Quote',
      isPopular: false
    },
    {
      name: 'Quick Tech Help',
      description: 'Good for once-off support.',
      features: [
        'Slow laptop troubleshooting',
        'Slow cellphone troubleshooting',
        'WiFi connection help',
        'Email, app & software setup',
        'Basic device checks'
      ],
      buttonText: 'Request Help',
      isPopular: false
    },
    {
      name: 'Home Tech Support',
      description: 'On-demand help for everyday technology problems at home.',
      features: [
        'Laptop & cellphone troubleshooting',
        'WiFi setup and optimization',
        'Email and account setup',
        'Device performance improvement',
        'Basic security & backup help'
      ],
      buttonText: 'Request Quote',
      isPopular: false
    },
    {
      name: 'Home Office Setup',
      description: 'Get your workspace fully connected and ready for productivity.',
      features: [
        'Laptop & multi-monitor setup',
        'Printer & scanner configuration',
        'Video conferencing setup',
        'Cloud storage configuration',
        'Cable management advice'
      ],
      buttonText: 'Request Quote',
      isPopular: false
    },
    {
      name: 'Small Business IT Support',
      description: 'Ongoing technical support to keep your office systems secure and running.',
      features: [
        'Regular security updates',
        'Network & WiFi management',
        'Priority troubleshooting',
        'New employee device setup',
        'IT consultation & guidance'
      ],
      buttonText: 'Request Quote',
      isPopular: false
    }
  ];

  return (
    <section id="packages" className="py-16 lg:py-24 bg-white dark:bg-slate-800 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-primary-navy dark:text-white sm:text-4xl">
            Service Packages
          </h2>
          <p className="mt-4 text-lg text-text-muted dark:text-gray-300">
            Tailored digital solutions to fit your budget. Get in touch for a custom, transparent quote.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <AnimatedSection key={index} delay={index * 100} className="h-full">
              <div 
                className={`h-full bg-background-light dark:bg-slate-900 rounded-2xl shadow-sm border ${
                  pkg.isPopular ? 'border-primary-blue shadow-primary-blue/20 dark:shadow-primary-blue/10 transform md:-translate-y-2' : 'border-gray-100 dark:border-gray-700 hover:-translate-y-1'
                } p-6 sm:p-8 flex flex-col relative transition-all duration-300 hover:shadow-md`}
              >
                {pkg.isPopular && (
                  <div className="mb-4">
                    <span className="inline-flex bg-primary-blue text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-primary-navy dark:text-white mb-2">{pkg.name}</h3>
                <p className="text-sm text-text-muted dark:text-gray-400 mb-6 flex-grow">{pkg.description}</p>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-primary-navy dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className={`w-full mt-auto flex items-center justify-center py-3 px-4 rounded-lg font-semibold transition-colors duration-300 ${
                    pkg.isPopular 
                      ? 'bg-primary-blue text-white hover:bg-blue-700' 
                      : 'bg-white dark:bg-slate-800 text-primary-blue dark:text-accent-blue border border-primary-blue/30 dark:border-accent-blue/30 hover:bg-blue-50 dark:hover:bg-slate-700'
                  }`}
                >
                  {pkg.buttonText}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
      
      <SectionDivider fillClass="fill-background-light dark:fill-slate-900" />
    </section>
  );
};

export default Packages;
