import React from 'react';

interface TechBadgeProps {
  tech: string;
}

const TechBadge = ({ tech }: TechBadgeProps) => {
  return (
    <span className="tag" style={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}>
      {tech}
    </span>
  );
};

export default TechBadge;
