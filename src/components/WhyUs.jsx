import React from 'react';
import { Target, Heart, Layers, Settings, ShieldCheck, Lock } from 'lucide-react';
import TechBackground from './graphics/TechBackground';
import SectionDivider from './graphics/SectionDivider';
import AnimatedSection from './animations/AnimatedSection';

const WhyUs = () => {
  const reasons = [
    {
      title: 'Affordable Solutions',
      description: 'We understand that small businesses and local community members need quality technology services at reasonable prices. Our solutions are built to help you grow without overspending.',
      icon: Target
    },
    {
      title: 'Local Business Understanding',
      description: 'We understand the challenges faced by small businesses, schools, churches, shops, salons, students, and local organizations in South Africa. We build solutions that fit your environment, budget, and goals.',
      icon: Heart
    },
    {
      title: 'Websites, Systems & IT Support in One Place',
      description: 'You do not need different people for every tech problem. We can help with websites, business systems, databases, laptop and cellphone support, WiFi setup, CCTV cameras, and home office technology.',
      icon: Layers
    },
    {
      title: 'Custom Solutions, Not Just Templates',
      description: 'Every business works differently. We design websites and systems around your actual needs, whether you need bookings, stock management, student records, reports, customer management, or online visibility.',
      icon: Settings
    },
    {
      title: 'Reliable Support After Launch',
      description: 'We do not disappear after completing the work. We offer support, updates, troubleshooting, guidance, and maintenance so your technology continues to work properly.',
      icon: ShieldCheck
    },
    {
      title: 'Secure & Future-Ready Approach',
      description: 'We build with reliability, security, backups, and growth in mind. Our goal is to create solutions that are professional today and ready to grow with your business tomorrow.',
      icon: Lock
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-primary-navy dark:bg-slate-950 text-white transition-colors duration-300 relative overflow-hidden">
      <TechBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6 inline-block relative">
            Why Choose MayTech Solutions?
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-blue to-transparent opacity-70"></div>
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            MayTech Solutions gives local businesses and community members one trusted place for websites, business systems, device support, WiFi setup, and practical IT help. We focus on affordable, reliable, and easy-to-understand technology solutions that solve real problems.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <AnimatedSection key={index} delay={index * 150} className="h-full">
              <div className="h-full bg-slate-900 rounded-xl p-8 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:bg-slate-800/80 group relative overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-all duration-500">
                  <reason.icon className="w-32 h-32 text-accent-blue" />
                </div>
                
                <div className="w-14 h-14 bg-slate-800 rounded-lg flex items-center justify-center mb-6 border border-slate-700 group-hover:bg-primary-blue/20 group-hover:border-primary-blue/50 transition-all duration-300 shadow-inner group-hover:scale-110">
                  <reason.icon className="w-7 h-7 text-accent-blue group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors duration-300">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{reason.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
      
      <SectionDivider fillClass="fill-background-light dark:fill-slate-900" />
    </section>
  );
};

export default WhyUs;
