import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import HowItWorks from '../components/HowItWorks';
import CtaBanner from '../components/CtaBanner';

const HomePage = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <Services limit={4} />
      <WhyUs limit={3} />
      <HowItWorks />
      <CtaBanner />
    </div>
  );
};

export default HomePage;
