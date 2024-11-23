import React from "react";

export interface WorkExpBoxContext {
  title: string;
  companyInfo: string;
  contributions: string[];
  duration: string;
}

function WorkExpBox({ title, companyInfo, contributions, duration }: WorkExpBoxContext) {
  return (
    <div className="relative group">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-20 group-hover:opacity-75 transition duration-300"></div>
    <div className="relative p-6 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-bold text-white mb-1">{companyInfo}</h2>
          <h3 className="text-lg font-medium text-purple-400 mb-1">{title}</h3>
          <p className="text-gray-400">{duration}</p>
        </div>
      </div>
      <ul className="space-y-2 text-gray-300">
        {contributions.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
}

export default WorkExpBox;
