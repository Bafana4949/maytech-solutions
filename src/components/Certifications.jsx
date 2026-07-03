import React from 'react';
import AnimatedSection from './animations/AnimatedSection';
import { Award, ShieldCheck, Database, Server, Monitor } from 'lucide-react';
import SectionDivider from './graphics/SectionDivider';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Academy Cloud Foundations',
      issuer: 'Amazon Web Services (AWS)',
      icon: Server,
      color: 'text-orange-500'
    },
    {
      title: 'Ethical Hacker Certificate',
      issuer: 'Cisco Networking Academy',
      icon: ShieldCheck,
      color: 'text-emerald-500'
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      icon: ShieldCheck,
      color: 'text-blue-500'
    },
    {
      title: 'Introduction to Data Science',
      issuer: 'Cisco Networking Academy',
      icon: Database,
      color: 'text-indigo-500'
    },
    {
      title: 'Computer Hardware Basics',
      issuer: 'Cisco Networking Academy',
      icon: Monitor,
      color: 'text-slate-500'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-background-light dark:bg-slate-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-primary-navy dark:text-white sm:text-4xl">
            Certifications & Training
          </h2>
          <p className="mt-4 text-xl text-text-muted dark:text-gray-300">
            Committed to continuous learning and industry-standard best practices.
          </p>
        </AnimatedSection>
        
        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <AnimatedSection key={index} delay={index * 100} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-auto">
                <div className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow duration-300">
                  <div className={`p-3 rounded-full bg-gray-50 dark:bg-slate-700 mr-4 ${cert.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary-navy dark:text-white">{cert.title}</h3>
                    <p className="text-xs text-text-muted dark:text-gray-400 mt-1">{cert.issuer}</p>
                  </div>
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

export default Certifications;
