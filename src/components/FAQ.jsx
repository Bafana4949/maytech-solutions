import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import AnimatedSection from './animations/AnimatedSection';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-gray-200 dark:border-slate-700 rounded-lg mb-4 overflow-hidden bg-white dark:bg-slate-800 transition-colors duration-300">
      <button
        className="w-full px-4 sm:px-6 py-4 flex justify-between items-center bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors duration-300"
        onClick={onClick}
      >
        <span className="font-semibold text-primary-navy dark:text-white text-left">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180 text-primary-blue dark:text-accent-blue' : ''
          }`}
        />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 sm:px-6 pb-5 text-text-muted dark:text-gray-300">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How much does a website cost?',
      answer: 'Pricing depends on the size of the project. A simple one-page website is very affordable, while a complex custom system requires more investment. Contact us for a free quote tailored to your budget.'
    },
    {
      question: 'How long does it take to build a website?',
      answer: 'Most standard websites can be completed within 1 to 2 weeks, depending on how quickly you provide your content. Larger business systems may take longer. We always agree on a timeline before starting.'
    },
    {
      question: 'Do you offer support after the website is done?',
      answer: 'Yes, absolutely. We do not disappear after launching your project. We offer ongoing maintenance, updates, and troubleshooting to keep your technology running smoothly.'
    },
    {
      question: 'Can you help with slow laptops and cellphones?',
      answer: 'Yes! We offer practical IT support. If your device is slow, freezing, or needs a software refresh, we can diagnose the issue and help you fix it or upgrade it.'
    },
    {
      question: 'Do you help with WiFi and home office setup?',
      answer: 'Yes. We can help you set up your router, extend your WiFi range, connect your printers, and ensure your home office technology works reliably.'
    },
    {
      question: 'Can you build a custom system for my business?',
      answer: 'Yes. If standard software doesn’t fit your needs, we can build custom databases, student portals, booking systems, or stock management tools designed specifically for how your business works.'
    },
    {
      question: 'Do I need to pay monthly?',
      answer: 'It depends on what you need. Most of our projects are a once-off fee. However, if you need us to host your website, manage your professional emails, or provide ongoing monthly IT support, we offer affordable monthly packages.'
    },
    {
      question: 'Do you work with clients outside Pretoria and Witbank?',
      answer: 'Yes! While we are based in South Africa and support local communities in Gauteng and Mpumalanga, we provide remote services like website development and software building to clients anywhere.'
    }
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-background-light dark:bg-slate-900 transition-colors duration-300 border-t border-gray-100 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-primary-navy dark:text-white sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-text-muted dark:text-gray-300">
            Clear, honest answers to the questions we hear most from our clients.
          </p>
        </AnimatedSection>

        <div className="mb-12">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 50}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center bg-gray-50 dark:bg-slate-800 rounded-xl p-8 border border-gray-100 dark:border-slate-700">
          <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-2">Still have questions?</h3>
          <p className="text-text-muted dark:text-gray-400 mb-6">We are happy to chat and explain things simply.</p>
          <a 
            href="https://wa.me/27660179070" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Ask on WhatsApp
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQ;
