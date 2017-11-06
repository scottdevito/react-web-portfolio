import React from 'react';

const ProjectCard = props => (
  <div className="project-div">
    <a href={props.projLink} target="_blank" rel="noopener noreferrer">
      <div className="project-card">
        <h3 className="card-title">{props.name}</h3>
        <img className="project-img" src={props.img} alt="project" />
        <p className="card-text">{props.desc}</p>
      </div>
    </a>
  </div>
);

export default ProjectCard;
