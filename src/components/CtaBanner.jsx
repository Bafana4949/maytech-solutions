import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import TechBackground from './graphics/TechBackground';

const CtaBanner = ({ title, subtitle }) => {
  return (
    <div className="relative overflow-hidden bg-primary-blue rounded-2xl shadow-xl my-16 mx-4 sm:mx-6 lg:mx-8 transition-colors duration-300">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <TechBackground />
      </div>
      
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue via-blue-600 to-accent-blue opacity-90 pointer-events-none"></div>

      <div className="relative z-10 py-12 px-6 sm:px-12 lg:py-16 lg:px-16 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
        <div className="mb-8 lg:mb-0 lg:mr-8 max-w-2xl">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
            {title || "Need a website, business system, or tech support?"}
          </h2>
          <p className="text-lg text-blue-100">
            {subtitle || "Let’s discuss your problem and recommend the best affordable solution for your business, home, or organization."}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-bold rounded-lg text-primary-blue bg-white hover:bg-gray-50 hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <a
            href="https://wa.me/27660179070"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-green-600 hover:bg-green-500 hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default CtaBanner;
