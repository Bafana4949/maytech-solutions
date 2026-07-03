import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-[fade-in-up_1s_ease-out_forwards]">
      <a
        href="https://wa.me/27660179070"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center bg-green-500 text-white rounded-full p-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-green-400 opacity-30 group-hover:animate-ping"></span>
        <MessageCircle className="w-8 h-8 relative z-10" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-gray-900 text-white text-sm font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden sm:block">
          Chat on WhatsApp
          <span className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></span>
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
