import React from 'react';
import { categories } from '../../portfolio-data/portfolioData';

interface FilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const ProjectFilter: React.FC<FilterProps> = ({ activeFilter, onFilterChange }) => {
  const filters = categories;

  return (
    
    <div className=" shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-wrap justify-center gap-4 sm:space-x-4">
  {filters.map((filter) => (
    <button
      key={filter.id}
      onClick={() => onFilterChange(filter.id)}
      className={`px-4 py-2 rounded-md text-sm sm:text-base  transition-colors ${
        activeFilter === filter.id
          ? 'bg-gradient-to-r from-blue-500 to-purple-500 font-medium hover:opacity-90 transition-all hover:scale-105 text-white'
          : ' text-white hover:scale-105 border'
      }`}
    >
      {filter.label}
    </button>
  ))}
</div>

      </div>
    </div>
  );
};

export default ProjectFilter;