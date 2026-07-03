import React from 'react';
import AnimatedSection from './animations/AnimatedSection';
import { Building, BookOpen, Truck, Pickaxe, Utensils, Church, Stethoscope } from 'lucide-react';
import SectionDivider from './graphics/SectionDivider';

const Industries = () => {
  const industries = [
    {
      name: 'Small Businesses',
      icon: Building,
      description: 'Affordable websites and essential business tools to establish your brand and attract more local customers.',
      color: 'text-blue-500'
    },
    {
      name: 'Schools & Students',
      icon: BookOpen,
      description: 'Student management systems, admission calculators, and portals that simplify administrative workflows.',
      color: 'text-indigo-500'
    },
    {
      name: 'Logistics & Transport',
      icon: Truck,
      description: 'Tonnage tracking, weighbridge reconciliation, and compliance systems built for heavy industry.',
      color: 'text-amber-500'
    },
    {
      name: 'Mining & Compliance',
      icon: Pickaxe,
      description: 'Safety induction checks, medical expiry validation, and robust operational tracking systems.',
      color: 'text-orange-500'
    },
    {
      name: 'Food & Retail',
      icon: Utensils,
      description: 'Real-time Point-of-Sale (POS) systems, live order queues, and inventory management for fast-paced environments.',
      color: 'text-rose-500'
    },
    {
      name: 'Churches & NGOs',
      icon: Church,
      description: 'Community websites, donation portals, and member management tools for local organizations.',
      color: 'text-purple-500'
    },
    {
      name: 'Clinics & Local Orgs',
      icon: Stethoscope,
      description: 'Patient booking systems, reliable data storage, and secure operational software.',
      color: 'text-teal-500'
    }
  ];

  return (
    <section id="industries" className="py-20 bg-background-light dark:bg-slate-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-primary-navy dark:text-white sm:text-4xl">
            Industries We Serve
          </h2>
          <p className="mt-4 text-xl text-text-muted dark:text-gray-300">
            We provide specialized digital solutions tailored to the unique challenges of your industry.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <AnimatedSection key={index} delay={index * 100} className="h-full">
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 h-full shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-all duration-300 group flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gray-50 dark:bg-slate-700 mr-4 group-hover:scale-110 transition-transform ${industry.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-primary-navy dark:text-white leading-tight">{industry.name}</h3>
                  </div>
                  <p className="text-sm text-text-muted dark:text-gray-400 flex-grow">{industry.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
      <SectionDivider fillClass="fill-white dark:fill-slate-950" />
    </section>
  );
};

export default Industries;
