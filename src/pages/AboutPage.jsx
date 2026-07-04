import React from 'react';
import About from '../components/About';
import AreasWeServe from '../components/AreasWeServe';
import ClientReviews from '../components/ClientReviews';

const AboutPage = () => {
  return (
    <div className="animate-fade-in">
      <About />
      <AreasWeServe />
      <ClientReviews />
    </div>
  );
};

export default AboutPage;
