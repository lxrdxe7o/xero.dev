import React from 'react';

interface ProjectCardProps {
  name: string;
  description: string;
  link: string;
}

const ProjectCard = ({ name, description, link }: ProjectCardProps) => {
  return (
    <div className="border-2 p-md" style={{ borderColor: 'var(--border-color)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3 style={{ fontSize: 'var(--fs-xl)', marginBottom: 'var(--space-sm)' }}>{name}</h3>
        <p style={{ fontSize: 'var(--fs-sm)', marginBottom: 'var(--space-md)' }}>{description}</p>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '100%' }}>
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
