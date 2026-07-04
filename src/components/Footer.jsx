import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logos/darkmode_logo.jpeg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = logo;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      const ctx = canvas.getContext('2d');
      // Draw top-left pixel to get the background color
      ctx.drawImage(img, 0, 0, 1, 1, 0, 0, 1, 1);
      const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
      
      if (footerRef.current) {
        footerRef.current.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className="border-t border-gray-800 text-white pt-12 sm:pt-16 pb-8 transition-colors duration-300 relative overflow-hidden z-0" style={{ backgroundColor: '#0B1120' }}>
      
      {/* Background Logo Watermark */}
      <div 
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{ 
          backgroundImage: `url(${logo})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          <div className="lg:col-span-1">
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              MayTech Solutions is your trusted local technology partner, providing affordable websites, business systems, and comprehensive IT support for businesses and communities.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 tracking-wide uppercase text-sm">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-primary-blue transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary-blue transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-primary-blue transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary-blue transition-colors">Portfolio</Link></li>
              <li><Link to="/packages" className="hover:text-primary-blue transition-colors">Packages</Link></li>
              <li><Link to="/faq" className="hover:text-primary-blue transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-primary-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 tracking-wide uppercase text-sm">Our Services</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Website Development</li>
              <li>Business Systems</li>
              <li>Mobile App Development</li>
              <li>Database Solutions</li>
              <li>Device & Home Office Support</li>
              <li>IT & Tech Support</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 tracking-wide uppercase text-sm">Connect With Us</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="https://wa.me/27660179070" target="_blank" rel="noopener noreferrer" className="hover:text-primary-blue transition-colors">+27 66 017 9070</a></li>
              <li><a href="mailto:bafanamay585@gmail.com" className="hover:text-primary-blue transition-colors">bafanamay585@gmail.com</a></li>
              <li><a href="mailto:info@maytechsolutions.co.za" className="hover:text-primary-blue transition-colors">info@maytechsolutions.co.za</a></li>
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
