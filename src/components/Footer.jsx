import React from 'react';
import logo from '../logos/darkmode_logo.jpeg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img src={logo} alt="MayTech Solutions Logo" className="h-16 w-auto object-contain hover:scale-105 transition-transform duration-300" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Led by a Computer Science graduate with hands-on experience in full-stack development, databases, mobile apps, business systems, and IT support.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 tracking-wide uppercase text-sm">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-primary-blue transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-primary-blue transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-primary-blue transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-primary-blue transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-primary-blue transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 tracking-wide uppercase text-sm">Our Services</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Website Development</li>
              <li>Custom Business Systems</li>
              <li>Mobile App Development</li>
              <li>Device & Home Office Support</li>
              <li>IT & Tech Support</li>
              <li>Hosting & Professional Emails</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 tracking-wide uppercase text-sm">Connect With Us</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="https://wa.me/27660179070" target="_blank" rel="noopener noreferrer" className="hover:text-primary-blue transition-colors">+27 66 017 9070</a></li>
              <li><a href="mailto:bafanamay585@gmail.com" className="hover:text-primary-blue transition-colors">bafanamay585@gmail.com</a></li>
              <li><a href="https://github.com/Bafana4949" target="_blank" rel="noopener noreferrer" className="hover:text-primary-blue transition-colors">GitHub: Bafana4949</a></li>
              <li><a href="https://www.linkedin.com/in/bafana-bhuda" target="_blank" rel="noopener noreferrer" className="hover:text-primary-blue transition-colors">LinkedIn: Bafana May Bhuda</a></li>
              <li>South Africa</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {currentYear} MayTech Solutions. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with passion for local businesses.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
