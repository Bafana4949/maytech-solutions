import React from 'react';
import { ArrowRight, MessageCircle, CheckCircle } from 'lucide-react';
import founderImg from '../assets/founder/founder.jpg';
import TechBackground from './graphics/TechBackground';
import SectionDivider from './graphics/SectionDivider';
import AnimatedSection from './animations/AnimatedSection';

const Hero = () => {
  const highlights = [
    'Websites',
    'Business Systems',
    'Laptop Support',
    'Cellphone Support',
    'WiFi Setup',
    'Home Office Setup',
    'CCTV Installation'
  ];

  return (
    <section id="home" className="bg-background-light dark:bg-slate-900 py-20 lg:py-32 relative overflow-hidden transition-colors duration-300">
      <TechBackground />
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-navy/5 dark:bg-primary-blue/5 -skew-x-12 translate-x-32 hidden lg:block rounded-l-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <AnimatedSection animation="animate-[fade-in-left_0.8s_ease-out_forwards]" className="lg:col-span-7">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-navy dark:text-white tracking-tight leading-[1.15] mb-6">
              Websites, business systems & tech support for local businesses and communities.
            </h1>
            
            <p className="text-lg sm:text-xl text-text-muted dark:text-gray-300 mb-6 max-w-2xl leading-relaxed">
              MayTech Solutions helps local businesses, schools, churches, and community members solve real technology problems. We build professional websites, custom business systems, and provide reliable support for laptops, cellphones, WiFi, CCTV cameras, and home office technology.
            </p>

            <p className="text-lg sm:text-xl text-text-muted dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Whether you need to get your business online, manage your work better, fix a slow device, or set up your office technology, we make tech simple, affordable, and useful.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg text-white bg-primary-blue hover:bg-blue-700 hover:shadow-lg hover:shadow-primary-blue/30 transform hover:-translate-y-1 transition-all duration-300"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg text-primary-navy dark:text-white bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 hover:border-primary-blue dark:hover:border-accent-blue hover:bg-gray-50 dark:hover:bg-slate-700 transform hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                View Services
              </a>
              <a 
                href="https://wa.me/27660179070" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white bg-green-600 hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3">
              {highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center text-sm font-medium text-primary-navy dark:text-gray-300 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-full border border-gray-200 dark:border-slate-700 shadow-sm">
                  <CheckCircle className="w-4 h-4 mr-1.5 text-primary-blue dark:text-accent-blue" />
                  {highlight}
                </div>
              ))}
            </div>

          </AnimatedSection>
          
          {/* Image Content */}
          <AnimatedSection animation="animate-[fade-in-right_0.8s_ease-out_forwards]" delay={200} className="lg:col-span-5 relative mt-16 lg:mt-0 lg:ml-8 animate-[bounce_6s_infinite_ease-in-out]">
            <div className="relative">
              {/* Decorative elements behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue to-accent-blue rounded-2xl transform translate-x-4 translate-y-4 opacity-50 dark:opacity-30"></div>
              <div className="absolute -inset-4 border-2 border-dashed border-primary-blue/30 dark:border-accent-blue/30 rounded-3xl hidden sm:block"></div>
              
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 group z-10 hover:shadow-primary-blue/20 transition-all duration-300">
                <img 
                  src={founderImg} 
                  alt="Bafana May Bhuda, Founder" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      <SectionDivider fillClass="fill-gray-50 dark:fill-slate-800" />
    </section>
  );
};

export default Hero;
