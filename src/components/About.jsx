import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import founderPortraitImg from '../pictures of me/WhatsApp Image 2026-06-29 at 16.01.43.jpeg';

import SectionDivider from './graphics/SectionDivider';
import AnimatedSection from './animations/AnimatedSection';

const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-background-light dark:bg-slate-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <AnimatedSection animation="animate-[fade-in-left_0.8s_ease-out_forwards]" className="mb-12 lg:mb-0">
            <h2 className="inline-block text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-navy to-primary-blue dark:from-white dark:to-accent-blue sm:text-4xl mb-6 pb-1">
              About MayTech Solutions
            </h2>
            <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed mb-6">
              Bafana May Bhuda is a Computer Science graduate and Full-Stack Developer with experience in websites, business systems, databases, mobile apps, automation, hosting, cybersecurity basics, and practical IT support. Through MayTech Solutions, he helps local businesses and community members access affordable, reliable, and professional technology services.
            </p>
            <p className="text-lg text-text-muted dark:text-gray-300 mb-8 leading-relaxed">
              We understand the unique challenges faced by local businesses in South Africa. Our mission is to bridge the digital divide by providing affordable websites, custom systems, and dedicated, reliable IT support that actually work for you, without the corporate jargon.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                { title: 'Local Success', desc: 'Passionate about local business success' },
                { title: 'Full-Stack', desc: 'Software & database expertise' },
                { title: 'Transparent', desc: 'Clear, transparent communication' },
                { title: 'Reliable', desc: 'Dedicated to secure solutions' }
              ].map((item, index) => (
                <div key={index} className="flex flex-col p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex items-center mb-2">
                    <CheckCircle2 className="h-5 w-5 text-primary-blue mr-2 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-primary-navy dark:text-white font-bold text-sm uppercase tracking-wider">{item.title}</span>
                  </div>
                  <span className="text-text-muted dark:text-gray-400 text-sm">{item.desc}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="animate-[fade-in-right_0.8s_ease-out_forwards]" delay={200} className="relative mt-8 lg:mt-0">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-visible p-4 transition-colors duration-300 relative z-10">
              

              <div className="relative group overflow-hidden rounded-xl bg-gray-50 dark:bg-slate-700/50 max-w-sm mx-auto w-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue/20 to-accent-blue/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <img 
                  src={founderPortraitImg} 
                  alt="Bafana May Bhuda, Founder and Lead Developer of MayTech Solutions" 
                  className="w-full h-auto object-contain max-h-[350px] sm:max-h-[400px] lg:max-h-[450px] rounded-xl transform group-hover:scale-[1.03] transition-transform duration-700 relative z-0" 
                />
              </div>
              <div className="text-center mt-6 pb-2 relative z-20 bg-white dark:bg-slate-800 rounded-lg">
                <div className="inline-block px-3 py-1 mb-3 rounded-full bg-primary-blue/10 dark:bg-accent-blue/10">
                  <p className="text-xs font-bold text-primary-blue dark:text-accent-blue uppercase tracking-widest">Founder & Lead Developer</p>
                </div>
                <h3 className="text-2xl font-bold text-primary-navy dark:text-white mb-2">Bafana May Bhuda</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-primary-blue to-accent-blue mx-auto rounded-full mb-3"></div>
                <p className="text-sm font-medium text-text-muted dark:text-gray-400 max-w-sm mx-auto leading-relaxed italic">
                  "Empowering local businesses with high-quality digital tools."
                </p>
              </div>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[radial-gradient(#CBD5E1_2px,transparent_2px)] dark:bg-[radial-gradient(#334155_2px,transparent_2px)] [background-size:10px_10px] -z-10 rounded-lg"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[radial-gradient(#CBD5E1_2px,transparent_2px)] dark:bg-[radial-gradient(#334155_2px,transparent_2px)] [background-size:10px_10px] -z-10 rounded-lg"></div>
          </AnimatedSection>
        </div>
      </div>
      
      <SectionDivider fillClass="fill-white dark:fill-slate-800" />
    </section>
  );
};

export default About;
