import React from 'react';
import Packages from '../components/Packages';
import CtaBanner from '../components/CtaBanner';

const PackagesPage = () => {
  return (
    <div className="animate-fade-in">
      <Packages />
      <CtaBanner 
        title="Unsure which package is right for you?" 
        subtitle="Get in touch and we'll help you pick the perfect solution for your budget." 
      />
    </div>
  );
};

export default PackagesPage;
