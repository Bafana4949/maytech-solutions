import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ITSupportServices from './components/ITSupportServices';
import WhatWeCanBuild from './components/WhatWeCanBuild';
import Portfolio from './components/Portfolio';
import HowItWorks from './components/HowItWorks';
import WhyUs from './components/WhyUs';
import Packages from './components/Packages';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-slate-900 font-sans transition-colors duration-300 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <ITSupportServices />
        <WhatWeCanBuild />
        <Portfolio />
        <HowItWorks />
        <WhyUs />
        <Packages />
        <FAQ />
        <Contact />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
