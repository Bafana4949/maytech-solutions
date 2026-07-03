import React from 'react';
import AnimatedSection from './animations/AnimatedSection';
import { Layers, Server, Database, Smartphone, Wrench } from 'lucide-react';
import SectionDivider from './graphics/SectionDivider';

const TechStack = () => {
  const stackCategories = [
    {
      name: 'Frontend',
      icon: Layers,
      color: 'text-blue-500',
      techs: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3']
    },
    {
      name: 'Backend',
      icon: Server,
      color: 'text-indigo-500',
      techs: ['Java Spring Boot', 'C# ASP.NET Web API', 'Express.js', 'REST APIs']
    },
    {
      name: 'Databases',
      icon: Database,
      color: 'text-cyan-500',
      techs: ['Microsoft SQL Server', 'PostgreSQL', 'MySQL', 'Supabase', 'Firebase Firestore']
    },
    {
      name: 'Mobile',
      icon: Smartphone,
      color: 'text-purple-500',
      techs: ['Kotlin', 'Android Studio', 'SQLite/Room']
    },
    {
      name: 'DevOps, Hosting & Tools',
      icon: Wrench,
      color: 'text-orange-500',
      techs: ['Docker', 'Vercel', 'Git', 'GitHub', 'Linux', 'cPanel', 'WHM', 'DNS Configuration']
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-background-light dark:bg-slate-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-primary-navy dark:text-white sm:text-4xl">
            Technologies We Use
          </h2>
          <p className="mt-4 text-xl text-text-muted dark:text-gray-300">
            We use modern, scalable, and secure technologies to build robust digital solutions.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {stackCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <AnimatedSection key={index} delay={index * 150} className="flex flex-col h-full">
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-slate-700 flex flex-col h-full hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <Icon className={`w-6 h-6 mr-3 ${category.color}`} />
                    <h3 className="text-lg font-bold text-primary-navy dark:text-white">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.techs.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 bg-gray-50 dark:bg-slate-700 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-md border border-gray-100 dark:border-slate-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
      <SectionDivider fillClass="fill-white dark:fill-slate-950" />
    </section>
  );
};

export default TechStack;
