import React from 'react';

const SectionDivider = ({ position = 'bottom', className = '', fillClass = 'fill-white dark:fill-slate-800' }) => {
  return (
    <div className={`absolute left-0 right-0 w-full overflow-hidden leading-[0] ${position === 'top' ? 'top-0 rotate-180' : 'bottom-0'} ${className}`}>
      <svg 
        className="relative block w-[calc(100%+1.3px)] h-[25px] sm:h-[40px] lg:h-[50px]" 
        data-name="Layer 1" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
      >
        <path 
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z" 
          className={`${fillClass} transition-colors duration-300`}
        ></path>
      </svg>
    </div>
  );
};

export default SectionDivider;
