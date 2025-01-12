import React from 'react';
import ProjectCard from './p-card';

interface Project {
  id: string;
  client: string;
  category: string;
  imageUrl: any;
  
}

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div className=" min-h-screen  overflow-hidden  pr-10 pl-10" >
      {/* Animated background elements */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div> */}
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.client}
          category={project.category}
          imageUrl={project.imageUrl}
          id={project.id}
        />
      ))}
    </div>
    </div>
    // </div>
  );
};

export default ProjectGrid;