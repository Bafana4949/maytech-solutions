import React from 'react';
import ProjectCard from './ProjectCard';
import { Scissors, ShoppingCart, GraduationCap, Building2, Server } from 'lucide-react';
import imgApplyAssist from '../project pictures/ApplyAssistSA.png';
import imgWeighTruck from '../project pictures/WeighTruck.png';
import imgWitbankKota from '../project pictures/Witbank King Kota.png';
import SectionDivider from './graphics/SectionDivider';
import AnimatedSection from './animations/AnimatedSection';

const Portfolio = () => {
  const projects = [
    {
      title: 'WeighTruck — Tonnage Tracking & Compliance SaaS',
      description: 'A logistics compliance system designed to manage tonnage tracking, axle weight validation, safety induction checks, medical expiry validation, and weighbridge reconciliation.',
      category: 'SaaS / Business System',
      status: 'Live Demo',
      icon: Building2,
      bgGradient: 'from-blue-500 to-cyan-500',
      image: imgWeighTruck,
      mockupType: 'inventory',
      techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'TypeScript'],
      githubLink: 'https://github.com/Bafana4949/WeightTruck',
      liveLink: 'https://weight-truck.vercel.app/',
      problem: 'Manual and error-prone tracking of truck tonnage, compliance expirations, and safety inductions.',
      solution: 'Automated weight validation, live reconciliation, and expiry tracking via a unified dashboard.'
    },
    {
      title: 'Witbank King Kota POS',
      description: 'A real-time point-of-sale system for a fast-food business, designed to manage live shifts, ordering queues, and sales tracking.',
      category: 'Point of Sale',
      status: 'Live Demo',
      icon: ShoppingCart,
      bgGradient: 'from-orange-500 to-amber-500',
      image: imgWitbankKota,
      mockupType: 'booking',
      techStack: ['TypeScript', 'HTML5', 'CSS3'],
      liveLink: 'https://witbank-king-kota-pos.vercel.app',
      problem: 'Manual order and sales tracking can slow down a fast-food business.',
      solution: 'A point-of-sale system for managing orders, shifts, and sales tracking.'
    },
    {
      title: 'ApplyAssist-SA',
      description: 'A South African student admissions web app that helps matriculants calculate APS scores and match university admission requirements.',
      category: 'Web App',
      status: 'Live Demo',
      icon: GraduationCap,
      bgGradient: 'from-purple-500 to-pink-500',
      image: imgApplyAssist,
      mockupType: 'website',
      techStack: ['JavaScript', 'HTML5', 'CSS3'],
      githubLink: 'https://github.com/Bafana4949/ApplyAssist-SA',
      liveLink: 'https://bafana4949.github.io/ApplyAssist-SA/',
      problem: 'Students struggle to manually calculate APS scores and find universities they qualify for.',
      solution: 'An automated calculator that matches scores to actual university admission criteria.'
    },
    {
      title: 'SyncBank Transaction Manager',
      description: 'A Java concurrency project simulating synchronized banking transactions using thread coordination and locking to prevent race conditions.',
      category: 'Backend System',
      status: 'Source Code',
      icon: Server,
      bgGradient: 'from-emerald-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      mockupType: 'inventory',
      techStack: ['Java', 'OOP', 'Concurrency'],
      githubLink: 'https://github.com/Bafana4949/SyncBank-Transaction-Manager',
      problem: 'Race conditions and data corruption in multi-threaded financial transactions.',
      solution: 'Thread-safe banking operations using proper locks and synchronization.'
    },
    {
      title: 'Native Android Mobile Application',
      description: 'A Kotlin Android mobile application with REST API integration and local SQLite/Room database caching for offline accessibility.',
      category: 'Mobile App',
      status: 'Case Study',
      icon: Scissors,
      bgGradient: 'from-indigo-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      mockupType: 'booking',
      techStack: ['Kotlin', 'Android Studio', 'REST APIs', 'SQLite'],
      problem: 'Mobile users unable to access data without an active internet connection.',
      solution: 'Implemented Room database for local caching and seamless offline support.'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background-light dark:bg-slate-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-primary-navy dark:text-white sm:text-4xl">
            Our Portfolio
          </h2>
          <p className="mt-4 text-xl text-text-muted dark:text-gray-300">
            Take a look at some of the custom digital solutions we are building for local businesses.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 150} className="h-full">
              <ProjectCard 
                title={project.title}
                description={project.description}
                category={project.category}
                status={project.status}
                icon={project.icon}
                bgGradient={project.bgGradient}
                image={project.image}
                mockupType={project.mockupType}
                techStack={project.techStack}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                problem={project.problem}
                solution={project.solution}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
      
      <SectionDivider fillClass="fill-gray-50 dark:fill-slate-950" />
    </section>
  );
};

export default Portfolio;
