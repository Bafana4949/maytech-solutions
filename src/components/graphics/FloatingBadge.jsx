import React from 'react';

const FloatingBadge = ({ icon: Icon, text, className = "", delay = "0s" }) => {
  return (
    <div 
      className={`absolute flex items-center bg-white dark:bg-slate-800 rounded-full shadow-lg border border-gray-100 dark:border-gray-700 py-2 px-4 animate-[bounce_3s_infinite_ease-in-out] ${className}`}
      style={{ animationDelay: delay }}
    >
      {Icon && (
        <div className="bg-primary-blue/10 dark:bg-slate-700 p-1.5 rounded-full mr-2">
          <Icon className="w-4 h-4 text-primary-blue dark:text-accent-blue" />
        </div>
      )}
      <span className="text-sm font-semibold text-primary-navy dark:text-white whitespace-nowrap">{text}</span>
    </div>
  );
};

export default FloatingBadge;
