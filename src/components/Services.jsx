import React from 'react';
import ServiceCard from './ServiceCard';
import { Monitor, Server, Smartphone, Database, Headphones, Laptop, Globe, Cpu } from 'lucide-react';
import SectionDivider from './graphics/SectionDivider';
import AnimatedSection from './animations/AnimatedSection';

const Services = () => {
  const services = [
    {
      title: 'Website Development',
      description: 'Professional, responsive websites designed to attract clients and grow your business.',
      icon: Monitor,
      features: ['Custom modern designs', 'Mobile responsive', 'SEO optimized']
    },
    {
      title: 'Business Systems',
      description: 'Tailored software systems to streamline your specific operations.',
      icon: Server,
      features: ['Automated workflows', 'Secure data management', 'Custom reporting']
    },
    {
      title: 'Mobile App Development',
      description: 'User-friendly mobile applications for Android and iOS devices.',
      icon: Smartphone,
      features: ['Native performance', 'Intuitive design', 'Offline capabilities']
    },
    {
      title: 'Database Solutions',
      description: 'Reliable database design and management for your business data.',
      icon: Database,
      features: ['Data structuring', 'Performance tuning', 'Backup systems']
    },
    {
      title: 'IT Support',
      description: 'Reliable technical help to keep your business running smoothly.',
      icon: Headphones,
      features: ['Remote assistance', 'System troubleshooting', 'Software installation']
    },
    {
      title: 'Device & Home Office Support',
      description: 'Practical support for your laptops, cellphones, and home office setups.',
      icon: Laptop,
      features: ['Device setup', 'Performance tuning', 'Peripheral connections']
    },
    {
      title: 'Hosting & Email Setup',
      description: 'Secure website hosting and custom @yourdomain emails for your business.',
      icon: Globe,
      features: ['Fast servers', 'Business email setup', 'Domain management']
    },
    {
      title: 'Business Automation',
      description: 'Replace manual tasks with automated processes to save time.',
      icon: Cpu,
      features: ['Email automation', 'Data syncing', 'Workflow optimization']
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
