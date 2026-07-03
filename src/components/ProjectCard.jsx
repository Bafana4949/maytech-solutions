import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ProjectMockup from './graphics/ProjectMockup';

const ProjectCard = ({ title, description, category, status, icon: Icon, bgGradient, mockupType, image, techStack = [], liveLink, githubLink, problem, solution }) => {
  return (
    <div className="bg-white dark:bg-slate-700 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 overflow-hidden hover:shadow-xl hover:border-primary-blue/30 transition-all duration-300 flex flex-col h-full group transform hover:-translate-y-1">
      <div className="relative">
        {image ? (
          <img src={image} alt={title} className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <ProjectMockup type={mockupType} />
        )}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
        <div className="absolute top-4 right-4 z-10 flex gap-2">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full shadow-sm backdrop-blur-md ${
            status === 'Live' || status === 'Demo available' ? 'bg-green-100/90 dark:bg-green-900/80 text-green-700 dark:text-green-300' : 'bg-gray-100/90 dark:bg-slate-600/80 text-gray-700 dark:text-gray-300'
          }`}>
            {status}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs font-bold text-accent-blue uppercase tracking-wider mb-2">{category}</span>
        <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-3">{title}</h3>
        <p className="text-text-muted dark:text-gray-300 text-sm leading-relaxed mb-4">{description}</p>
        
        {problem && solution && (
          <div className="mb-4 text-sm bg-gray-50 dark:bg-slate-800 p-4 rounded-lg border border-gray-100 dark:border-slate-700">
            <p className="text-primary-navy dark:text-gray-200 mb-2"><strong>Problem:</strong> {problem}</p>
            <p className="text-primary-navy dark:text-gray-200"><strong>Solution:</strong> {solution}</p>
          </div>
        )}

        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {techStack.map((tech, i) => (
              <span key={i} className="px-2 py-1 bg-primary-blue/10 dark:bg-slate-600 text-primary-blue dark:text-blue-300 text-xs font-medium rounded border border-primary-blue/20 dark:border-slate-500">
                {tech}
              </span>
            ))}
          </div>
        )}
        
        <div className="mt-auto flex gap-3">
          {(liveLink || status === 'Demo available' || status === 'Live') ? (
            <a href={liveLink || '#'} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-primary-blue/10 dark:bg-slate-800 text-primary-blue dark:text-accent-blue font-semibold rounded-lg hover:bg-primary-blue hover:text-white dark:hover:bg-primary-blue dark:hover:text-white transition-colors duration-300 border border-primary-blue/20 dark:border-slate-600">
              <ExternalLink className="h-4 w-4 mr-2" />
              View Demo
            </a>
          ) : (
            <button disabled className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gray-50 dark:bg-slate-800 text-gray-500 dark:text-gray-400 font-semibold rounded-lg cursor-not-allowed border border-gray-100 dark:border-slate-700">
              Coming Soon
            </button>
          )}
          
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors duration-300 border border-gray-200 dark:border-slate-600">
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
