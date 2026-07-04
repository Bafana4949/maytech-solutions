import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import lightLogo from '../logos/horizontal_logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Packages', href: '/packages' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white dark:bg-primary-navy text-primary-navy dark:text-white fixed w-full top-0 z-50 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={lightLogo} 
                alt="MayTech Solutions Logo" 
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-baseline space-x-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) => 
                    `relative group px-3 py-2 text-sm font-semibold transition-colors duration-300 ${isActive ? 'text-primary-blue dark:text-accent-cyan' : 'text-primary-navy dark:text-gray-300 hover:text-primary-blue dark:hover:text-accent-cyan'}`
                  }
                >
                  {link.name}
                  <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-primary-blue dark:bg-accent-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </NavLink>
              ))}
            </div>
            
            <Link 
              to="/contact"
              className="hidden lg:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg text-white bg-primary-blue hover:bg-blue-700 transition-colors shadow-sm"
            >
              Get a Quote
            </Link>
          </div>
          <div className="flex items-center md:hidden space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-primary-blue focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 ease-in-out bg-white dark:bg-primary-navy border-t border-gray-100 dark:border-gray-800 ${
          isOpen ? 'max-h-[80vh] opacity-100 shadow-lg overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive ? 'bg-blue-50 dark:bg-slate-800 text-primary-blue dark:text-accent-cyan' : 'text-primary-navy dark:text-white hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-primary-blue dark:hover:text-accent-cyan'}`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="block w-full text-center mt-4 px-4 py-3 text-base font-semibold rounded-lg text-white bg-primary-blue hover:bg-blue-700 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
