import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, CheckCircle, ShieldCheck, Globe, Database, Laptop, Smartphone, Wifi, Home, Award, Monitor, Wrench } from 'lucide-react';
import founderWorkingImg from '../pictures of me/WhatsApp Image 2026-06-29 at 16.00.42.jpeg';
import TechBackground from './graphics/TechBackground';
import SectionDivider from './graphics/SectionDivider';
import AnimatedSection from './animations/AnimatedSection';
import horizontalLogo from '../logos/horizontal_logo.jpeg';

const Hero = () => {
  const highlights = [
    { text: 'Websites', icon: Globe },
    { text: 'Business Systems', icon: Database },
    { text: 'Laptop Support', icon: Laptop },
    { text: 'Cellphone Support', icon: Smartphone },
    { text: 'WiFi Setup', icon: Wifi },
    { text: 'Home Office Setup', icon: Home }
  ];

  return (
    <section id="home" className="bg-background-light dark:bg-slate-900 pt-8 pb-12 lg:pt-16 lg:pb-24 relative overflow-hidden transition-colors duration-300">
      <TechBackground />
      {/* Decorative background grid and shapes */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiM2MzY2RjEiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-60 dark:opacity-20 z-0 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-navy/5 dark:bg-primary-blue/5 -skew-x-12 translate-x-32 hidden lg:block rounded-l-[100px] z-0"></div>
      
      {/* Background Watermark Logos */}
      <div 
        className="absolute inset-0 z-0 opacity-5 dark:opacity-[0.08] pointer-events-none"
        style={{ 
          backgroundImage: `url(${horizontalLogo})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '70%'
        }}
      ></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          
        {/* Text Content */}
        <AnimatedSection animation="animate-[fade-in-up_0.8s_ease-out_forwards]" className="flex flex-col items-center w-full">
            
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-primary-blue dark:text-accent-cyan text-sm font-semibold mb-6 shadow-sm">
              <Award className="w-4 h-4" />
              Trusted local tech partner for businesses & communities
            </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl lg:leading-[1.2] font-extrabold text-primary-navy dark:text-white tracking-tight mb-6 drop-shadow-sm max-w-4xl mx-auto px-2 sm:px-0">
            Websites, Business Systems & Tech Support for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-accent-cyan dark:from-accent-cyan dark:to-blue-400">Local Businesses.</span>
          </h1>
            
          {/* Supporting paragraph */}
          <p className="text-lg sm:text-xl text-text-muted dark:text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            MayTech Solutions helps small businesses, schools, churches, shops, salons, and community members get reliable digital and IT support. We build websites, custom systems, and provide help with laptops, cellphones, WiFi, email setup, and home office technology.
          </p>

          {/* Short impact line */}
          <p className="text-lg font-medium text-primary-navy dark:text-gray-200 mb-8 max-w-2xl mx-auto">
            Simple, affordable, and practical technology solutions for your business or home.
          </p>
            
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch sm:items-center gap-4 mb-8 w-full sm:w-auto px-4 sm:px-0">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-primary-blue hover:bg-blue-700 hover:shadow-lg hover:shadow-primary-blue/30 transform hover:-translate-y-1 transition-all duration-300"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="https://wa.me/27660179070" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-green-600 hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
              <Link 
                to="/services" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl text-primary-navy dark:text-white bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 hover:border-primary-blue dark:hover:border-accent-cyan hover:bg-gray-50 dark:hover:bg-slate-700 transform hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                View Services
              </Link>
            </div>

          {/* Trust line & Local service */}
          <div className="flex flex-col items-center gap-1.5 mb-12 opacity-90">
            <div className="flex items-center justify-center flex-wrap text-sm font-medium text-text-muted dark:text-gray-400">
              <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1 text-green-500" /> Free quote</span>
              <span className="mx-3 hidden sm:inline">•</span>
              <span className="flex items-center mt-1 sm:mt-0"><CheckCircle className="w-4 h-4 mr-1 text-green-500" /> WhatsApp support</span>
              <span className="mx-3 hidden sm:inline">•</span>
              <span className="flex items-center mt-1 sm:mt-0"><CheckCircle className="w-4 h-4 mr-1 text-green-500" /> Based in South Africa</span>
            </div>
            <p className="text-sm font-medium text-text-muted dark:text-gray-400/80">
              Serving Pretoria, Witbank/eMalahleni, Gauteng, Mpumalanga & South Africa remotely
            </p>
          </div>

          {/* Highlights / Service chips */}
          <div className="flex flex-wrap justify-center max-w-4xl gap-2 px-2 sm:px-0">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center text-xs sm:text-sm font-medium text-primary-navy dark:text-gray-200 bg-white dark:bg-slate-800/80 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-gray-100 dark:border-slate-700 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-primary-blue/30 dark:hover:border-accent-cyan/30">
                <highlight.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-primary-blue dark:text-accent-cyan" />
                {highlight.text}
              </div>
            ))}
          </div>

        </AnimatedSection>
      </div>

      
      <SectionDivider fillClass="fill-gray-50 dark:fill-slate-800" />
    </section>
  );
};

export default Hero;
