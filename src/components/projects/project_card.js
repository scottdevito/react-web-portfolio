import React from 'react';

const ProjectCard = props => (
  <div className="project-div">
    <div className="project-card">
      <h4 className="card-text">{props.name}</h4>
      <img
        className="project-img"
        src="https://avatars3.githubusercontent.com/u/16454542?v=4&s=460"
        alt="github profile"
      />
      <p className="card-text">
        This is a description of the project. Not too long, not too short, just
        right.
      </p>
    </div>
  </div>
);

export default ProjectCard;
