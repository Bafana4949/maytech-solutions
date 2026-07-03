import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import AnimatedSection from './animations/AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation is handled by HTML5 required attributes
    setIsSubmitted(true);
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-background-light dark:bg-slate-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-primary-navy dark:text-white sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 text-xl text-text-muted dark:text-gray-300">
            Ready to start your digital journey? Contact us for a free consultation and quote.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimatedSection animation="animate-[fade-in-left_0.8s_ease-out_forwards]">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 transition-colors duration-300 relative overflow-hidden group">
              
              {/* Decorative background icon */}
              <MessageCircle className="absolute -bottom-10 -right-10 w-48 h-48 text-primary-blue/5 dark:text-accent-blue/5 transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700 pointer-events-none" />
              
              <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-6 relative z-10">Contact Information</h3>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary-blue mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-primary-navy dark:text-white">Phone / WhatsApp</p>
                    <p className="text-text-muted dark:text-gray-400 mt-1">+27 66 017 9070</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary-blue mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-primary-navy dark:text-white">Email Address</p>
                    <p className="text-text-muted dark:text-gray-400 mt-1">bafanamay585@gmail.com</p>
                    <p className="text-text-muted dark:text-gray-500 text-sm">(info@maytechsolutions.co.za)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary-blue mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-primary-navy dark:text-white">Location</p>
                    <p className="text-text-muted dark:text-gray-400 mt-1">South Africa</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 relative z-10">
                <a 
                  href="https://wa.me/27660179070" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group w-full flex items-center justify-center px-4 py-4 border border-transparent rounded-lg shadow-md text-base font-bold text-white bg-green-600 hover:bg-green-500 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Contact Form */}
          <AnimatedSection animation="animate-[fade-in-right_0.8s_ease-out_forwards]">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center py-16 text-center animate-fade-in-up">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-6 shadow-sm border border-green-200 dark:border-green-800">
                    <Send className="w-10 h-10 transform translate-x-1 -translate-y-1" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-primary-navy dark:text-white mb-3">Message Sent!</h3>
                  <p className="text-lg text-text-muted dark:text-gray-300">Thank you for reaching out. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="mb-6">
                    <p className="text-lg font-medium text-primary-navy dark:text-white mb-2">Tell us what you need help with.</p>
                    <p className="text-sm text-text-muted dark:text-gray-400">Whether it is a website, custom system, slow laptop, cellphone setup, WiFi problem, or home office setup, send us a message and we will get back to you.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-blue focus:border-primary-blue dark:bg-slate-700 dark:text-white transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-blue focus:border-primary-blue dark:bg-slate-700 dark:text-white transition-colors"
                        placeholder="+27 00 000 0000"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-blue focus:border-primary-blue dark:bg-slate-700 dark:text-white transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Service Needed <span className="text-red-500">*</span>
                      </label>
                      <select 
                        id="service" 
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-blue focus:border-primary-blue bg-white dark:bg-slate-700 dark:text-white transition-colors"
                      >
                        <option value="" disabled>Select a service...</option>
                        <option value="Website Development">Website Development</option>
                        <option value="Business System">Business System</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Database Solution">Database Solution</option>
                        <option value="Laptop Support">Laptop Support</option>
                        <option value="Cellphone Support">Cellphone Support</option>
                        <option value="WiFi Troubleshooting">WiFi Troubleshooting</option>
                        <option value="Home Office Setup">Home Office Setup</option>
                        <option value="Device Setup">Device Setup</option>
                        <option value="CCTV Installation & Repair">CCTV Installation & Repair</option>
                        <option value="IT Support">IT Support</option>
                        <option value="Hosting & Email Setup">Hosting & Email Setup</option>
                        <option value="Business Automation">Business Automation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-blue focus:border-primary-blue resize-none dark:bg-slate-700 dark:text-white transition-colors"
                      placeholder="Tell us about your project or needs..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue transition-colors"
                  >
                    Send Message
                  </button>
                  <p className="text-xs text-text-muted dark:text-gray-400 text-center mt-4">
                    Your details are only used to respond to your request.
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
