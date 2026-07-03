import React from 'react';
import AnimatedSection from './animations/AnimatedSection';
import { Calendar, ShoppingBag, Store, GraduationCap, Users, Shield, UploadCloud, BarChart3, Mail, HeartHandshake, WifiOff } from 'lucide-react';
import SectionDivider from './graphics/SectionDivider';

const BusinessSystems = () => {
  const systems = [
    { name: 'Booking Systems', icon: Calendar },
    { name: 'Inventory Systems', icon: ShoppingBag },
    { name: 'Point-of-Sale (POS)', icon: Store },
    { name: 'Student Management', icon: GraduationCap },
    { name: 'Staff/Admin Dashboards', icon: Users },
    { name: 'Compliance Tracking', icon: Shield },
    { name: 'Document Portals', icon: UploadCloud },
    { name: 'Reporting Dashboards', icon: BarChart3 },
    { name: 'Email Automation', icon: Mail },
    { name: 'Customer Management (CRM)', icon: HeartHandshake },
    { name: 'Offline-Capable Tools', icon: WifiOff },
  ];

  return (
    <section id="business-systems" className="py-20 bg-primary-navy transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Business Systems We Build
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            Stop drowning in paperwork and spreadsheets. We build custom software that saves time, reduces manual work, and helps you manage operations effortlessly.
          </p>
        </AnimatedSection>
        
        <div className="flex flex-wrap justify-center gap-4">
          {systems.map((system, index) => {
            const Icon = system.icon;
            return (
              <AnimatedSection key={index} delay={index * 50} className="w-full sm:w-auto">
                <div className="flex items-center px-5 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl border border-white/10 transition-all duration-300 cursor-default group">
                  <Icon className="w-5 h-5 text-accent-blue mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-medium">{system.name}</span>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
        
        <AnimatedSection delay={600} className="mt-12 text-center">
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold rounded-lg text-primary-navy bg-accent-blue hover:bg-cyan-300 transition-colors duration-300 shadow-lg shadow-cyan-500/30">
            Discuss Your Custom System
          </a>
        </AnimatedSection>
      </div>
      <SectionDivider fillClass="fill-background-light dark:fill-slate-900" />
    </section>
  );
};

export default BusinessSystems;
