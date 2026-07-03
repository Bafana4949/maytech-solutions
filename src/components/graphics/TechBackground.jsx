import React from 'react';

const TechBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Soft gradient blobs */}
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary-blue/5 dark:bg-primary-blue/10 blur-[100px]" />
      <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-cyan-400/5 dark:bg-accent-blue/10 blur-[120px]" />
      
      {/* Digital Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          color: 'var(--tw-text-opacity) == 1 ? currentColor : #000'
        }}
      />
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '160px 160px'
        }}
      />

      {/* Floating abstract connection nodes */}
      <svg className="absolute w-full h-full opacity-20 dark:opacity-30" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15%" cy="25%" r="2" fill="currentColor" className="text-primary-blue animate-pulse" />
        <circle cx="25%" cy="30%" r="1" fill="currentColor" className="text-accent-blue" />
        <path d="M 15% 25% L 25% 30%" stroke="currentColor" strokeWidth="0.5" className="text-primary-blue/50" />
        
        <circle cx="85%" cy="65%" r="3" fill="currentColor" className="text-primary-blue animate-pulse delay-700" />
        <circle cx="75%" cy="75%" r="1.5" fill="currentColor" className="text-accent-blue" />
        <path d="M 85% 65% L 75% 75%" stroke="currentColor" strokeWidth="0.5" className="text-primary-blue/50" />
      </svg>
    </div>
  );
};

export default TechBackground;
