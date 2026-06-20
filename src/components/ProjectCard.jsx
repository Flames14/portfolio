import React from 'react';

const ProjectCard = ({ title, description, tags, icon }) => {
  return (
    <div className="project-card">
      <div className="project-icon">
        {icon}
      </div>
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{description}</p>
      
      <div className="project-tags">
        {tags.map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
