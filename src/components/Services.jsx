import React from 'react';
import ServiceCard from './ServiceCard';
import { Monitor, Server, Headphones, Globe } from 'lucide-react';
import SectionDivider from './graphics/SectionDivider';
import AnimatedSection from './animations/AnimatedSection';

const Services = () => {
  const services = [
    {
      title: 'Website Development',
      description: 'Professional, responsive websites designed to attract clients and grow your business.',
      icon: Monitor,
      features: ['Custom modern designs', 'Fully mobile responsive', 'SEO optimization']
    },
    {
      title: 'Custom Business Systems',
      description: 'Tailored software systems and databases to streamline your specific operations.',
      icon: Server,
      features: ['Automated workflows', 'Secure data management', 'Custom reporting']
    },
    {
      title: 'Practical IT Support',
      description: 'Reliable technical help for your devices, WiFi, and home office setups.',
      icon: Headphones,
      features: ['Device troubleshooting', 'WiFi & network setup', 'Software installation']
    },
    {
      title: 'Hosting & Professional Email',
      description: 'Secure website hosting and custom @yourdomain emails for your business.',
      icon: Globe,
      features: ['Fast loading servers', 'Business email setup', 'Daily backups']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-primary-navy dark:text-white sm:text-4xl">
            Our Main Services
          </h2>
          <p className="mt-4 text-xl text-text-muted dark:text-gray-300">
            A quick overview of how we help local businesses, schools, churches, and individuals go digital.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 100} className="h-full">
              <ServiceCard 
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
      
      <SectionDivider fillClass="fill-gray-50 dark:fill-slate-900" />
    </section>
  );
};

export default Services;
