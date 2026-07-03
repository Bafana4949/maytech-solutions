import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, features = [] }) => {
  return (
    <div className="bg-white dark:bg-slate-700 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 p-8 hover:shadow-lg hover:border-primary-blue/30 dark:hover:border-accent-blue/50 transition-all duration-300 group flex flex-col h-full transform hover:-translate-y-1 relative overflow-hidden">
      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-blue to-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative w-14 h-14 mb-6">
        <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
        <div className="absolute inset-0 bg-blue-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center transform -rotate-3 group-hover:bg-primary-blue dark:group-hover:bg-primary-blue transition-colors duration-300 shadow-sm border border-white dark:border-slate-700">
          <Icon className="h-6 w-6 text-primary-blue dark:text-accent-blue group-hover:text-white transition-colors duration-300" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-3">{title}</h3>
      <p className="text-text-muted dark:text-gray-300 mb-6 leading-relaxed">
        {description}
      </p>
      <ul className="space-y-3 flex-grow mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-blue mt-2 mr-2 flex-shrink-0"></span>
            <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
          </li>
        ))}
      </ul>
      <a href="#contact" className="inline-flex items-center text-sm font-semibold text-primary-blue dark:text-accent-blue hover:text-blue-700 dark:hover:text-blue-400 transition-colors mt-auto">
        Request service
        <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};

export default ServiceCard;
