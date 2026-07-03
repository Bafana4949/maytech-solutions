import React from 'react';
import { MonitorSmartphone, Briefcase, Database, Smartphone, Webhook, Cloud, Cpu, ShieldCheck, HardDrive } from 'lucide-react';
import SectionDivider from './graphics/SectionDivider';
import AnimatedSection from './animations/AnimatedSection';

const TechnicalExpertise = () => {
  const expertise = [
    {
      title: 'Full-Stack Web Development',
      description: 'Modern, responsive, and fast web applications built with React, Next.js, and robust backends.',
      icon: MonitorSmartphone,
      color: 'text-blue-500'
    },
    {
      title: 'Custom Business Systems',
      description: 'Tailored software solutions designed to solve your specific operational bottlenecks.',
      icon: Briefcase,
      color: 'text-indigo-500'
    },
    {
      title: 'Database Design & Management',
      description: 'Secure, scalable relational and NoSQL databases using SQL Server, PostgreSQL, and Firebase.',
      icon: Database,
      color: 'text-cyan-500'
    },
    {
      title: 'Mobile App Development',
      description: 'Native Android applications using Kotlin for offline-capable, high-performance mobile experiences.',
      icon: Smartphone,
      color: 'text-purple-500'
    },
    {
      title: 'API Development & Integrations',
      description: 'RESTful APIs connecting your systems, third-party services, and payment gateways seamlessly.',
      icon: Webhook,
      color: 'text-rose-500'
    },
    {
      title: 'Cloud Hosting & Deployment',
      description: 'Reliable cloud infrastructure setup using Vercel, Docker, and Linux for maximum uptime.',
      icon: Cloud,
      color: 'text-sky-500'
    },
    {
      title: 'Business Automation',
      description: 'Automated workflows and scripts that eliminate repetitive manual tasks and save hours of time.',
      icon: Cpu,
      color: 'text-amber-500'
    },
    {
      title: 'Cybersecurity-Aware Development',
      description: 'Built-in security best practices to protect your business data against common vulnerabilities.',
      icon: ShieldCheck,
      color: 'text-emerald-500'
    },
    {
      title: 'Backup & Disaster Recovery',
      description: 'Automated database and file backups ensuring you never lose critical business information.',
      icon: HardDrive,
      color: 'text-orange-500'
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-primary-navy dark:text-white sm:text-4xl">
            What We Can Build
          </h2>
          <p className="mt-4 text-xl text-text-muted dark:text-gray-300">
            Comprehensive technical expertise to power your business from the ground up.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={index} delay={index * 100} className="h-full">
                <div className="bg-gray-50 dark:bg-slate-900 rounded-xl p-6 h-full border border-gray-100 dark:border-slate-800 hover:border-primary-blue/30 hover:shadow-lg transition-all duration-300 group flex flex-col transform hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-lg bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-navy dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-text-muted dark:text-gray-400 flex-grow leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;
