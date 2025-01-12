import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: any;
  id: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, imageUrl, id }) => {
  return (
    <Link to={`/project/${id}`}>
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        <div className="aspect-w-16 aspect-h-12 w-full">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100">
          {/* Sliding up content container */}
          <div className="absolute bottom-0 w-full translate-y-full transform p-6 transition-transform duration-500 ease-out group-hover:translate-y-0">
            {/* Category pill with subtle rotation */}
            <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm text-white backdrop-blur-sm transition-transform duration-300 group-hover:rotate-2">
              {category}
            </span>
            
            {/* Title with staggered fade-in effect */}
            <h3 className="mt-2 text-xl font-semibold text-white opacity-0 transition-all delay-100 duration-300 group-hover:opacity-100">
              {title}
            </h3>
          </div>
        </div>

        {/* Animated corner accents */}
        <div className="absolute left-0 top-0 h-16 w-16 -translate-x-full -translate-y-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="absolute left-2 top-2 h-8 w-[1px] bg-white/40"></div>
          <div className="absolute left-2 top-2 h-[1px] w-8 bg-white/40"></div>
        </div>
        
        <div className="absolute bottom-0 right-0 h-16 w-16 translate-x-full translate-y-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="absolute bottom-2 right-2 h-8 w-[1px] bg-white/40"></div>
          <div className="absolute bottom-2 right-2 h-[1px] w-8 bg-white/40"></div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;