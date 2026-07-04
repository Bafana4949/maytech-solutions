import React from 'react';
import Services from '../components/Services';
import ITSupportServices from '../components/ITSupportServices';
import WhatWeCanBuild from '../components/WhatWeCanBuild';
import CtaBanner from '../components/CtaBanner';

const ServicesPage = () => {
  return (
    <div className="animate-fade-in">
      <Services />
      <ITSupportServices />
      <WhatWeCanBuild />
      <CtaBanner 
        title="Ready to automate and grow your business?"
        subtitle="Contact us today to discuss your website or custom business system requirements."
      />
    </div>
  );
};

export default ServicesPage;
