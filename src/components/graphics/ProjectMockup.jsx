import React from 'react';

const ProjectMockup = ({ type }) => {
  const renderContent = () => {
    switch (type) {
      case 'booking':
        return (
          <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900 p-3">
            <div className="h-6 w-1/3 bg-pink-100 dark:bg-pink-900/30 rounded mb-4"></div>
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="h-10 bg-white dark:bg-slate-800 rounded shadow-sm border border-gray-100 dark:border-gray-700"></div>
              <div className="h-10 bg-white dark:bg-slate-800 rounded shadow-sm border border-gray-100 dark:border-gray-700"></div>
              <div className="h-10 bg-pink-500 rounded shadow-sm"></div>
            </div>
            <div className="flex-grow bg-white dark:bg-slate-800 rounded shadow-sm border border-gray-100 dark:border-gray-700 p-2">
              <div className="grid grid-cols-4 gap-2 opacity-50">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="h-4 bg-gray-200 dark:bg-slate-700 rounded-sm"></div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'inventory':
        return (
          <div className="flex flex-row h-full bg-slate-50 dark:bg-slate-900">
            <div className="w-1/4 bg-slate-800 p-2 flex flex-col gap-2">
              <div className="h-4 w-full bg-blue-500/50 rounded mb-2"></div>
              <div className="h-3 w-3/4 bg-slate-600 rounded"></div>
              <div className="h-3 w-3/4 bg-slate-600 rounded"></div>
              <div className="h-3 w-3/4 bg-slate-600 rounded"></div>
            </div>
            <div className="w-3/4 p-3 flex flex-col">
              <div className="flex gap-2 mb-3">
                <div className="h-12 flex-1 bg-blue-100 dark:bg-blue-900/30 rounded border border-blue-200 dark:border-blue-800"></div>
                <div className="h-12 flex-1 bg-green-100 dark:bg-green-900/30 rounded border border-green-200 dark:border-green-800"></div>
              </div>
              <div className="flex-grow bg-white dark:bg-slate-800 rounded shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="h-6 border-b border-gray-100 dark:border-gray-700"></div>
                <div className="h-6 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-slate-750"></div>
                <div className="h-6 border-b border-gray-100 dark:border-gray-700"></div>
              </div>
            </div>
          </div>
        );
      case 'student':
        return (
          <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900 p-3">
            <div className="flex justify-between items-center mb-4">
              <div className="h-5 w-1/4 bg-purple-200 dark:bg-purple-900/40 rounded"></div>
              <div className="h-6 w-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            </div>
            <div className="flex gap-3 mb-4">
              <div className="w-1/3 aspect-square bg-purple-100 dark:bg-purple-900/20 rounded-full border-4 border-purple-500"></div>
              <div className="w-2/3 flex flex-col justify-center gap-2">
                <div className="h-4 w-full bg-gray-200 dark:bg-slate-700 rounded"></div>
                <div className="h-3 w-4/5 bg-gray-200 dark:bg-slate-700 rounded"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 flex-grow">
              <div className="bg-white dark:bg-slate-800 rounded shadow-sm border border-gray-100 dark:border-gray-700"></div>
              <div className="bg-white dark:bg-slate-800 rounded shadow-sm border border-gray-100 dark:border-gray-700"></div>
            </div>
          </div>
        );
      case 'website':
      default:
        return (
          <div className="flex flex-col h-full bg-white dark:bg-slate-800">
            <div className="h-8 border-b border-gray-100 dark:border-gray-700 flex items-center px-3 gap-2">
              <div className="h-3 w-12 bg-amber-500 rounded"></div>
              <div className="ml-auto h-2 w-6 bg-gray-200 dark:bg-gray-600 rounded"></div>
              <div className="h-2 w-6 bg-gray-200 dark:bg-gray-600 rounded"></div>
            </div>
            <div className="h-24 bg-amber-100 dark:bg-amber-900/20 flex flex-col items-center justify-center gap-2">
              <div className="h-4 w-1/2 bg-amber-500/50 rounded"></div>
              <div className="h-2 w-1/3 bg-amber-500/30 rounded"></div>
            </div>
            <div className="p-3 grid grid-cols-3 gap-2">
              <div className="h-16 bg-gray-100 dark:bg-slate-700 rounded"></div>
              <div className="h-16 bg-gray-100 dark:bg-slate-700 rounded"></div>
              <div className="h-16 bg-gray-100 dark:bg-slate-700 rounded"></div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-48 sm:h-56 bg-gray-200 dark:bg-slate-600 rounded-t-xl overflow-hidden flex flex-col shadow-inner">
      {/* Browser Chrome */}
      <div className="h-6 bg-gray-300 dark:bg-slate-700 flex items-center px-2 space-x-1.5 opacity-80">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
      </div>
      {/* Mockup Content */}
      <div className="flex-grow overflow-hidden relative">
        {renderContent()}
        {/* Overlay gradient to fade out bottom */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white dark:from-slate-700 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ProjectMockup;
