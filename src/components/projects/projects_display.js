import React from 'react';
import ProjectCard from './project_card';

const ProjectsDisplay = () => (
  <div className="projects-display">
    <div className="header-box">
      <img
        className="header-img"
        src="https://avatars3.githubusercontent.com/u/16454542?v=4&s=460"
        alt="github profile"
      />
      <h2 className="header-text">scottdevito</h2>
    </div>

    <div className="project-display">
      <ProjectCard name="Lawman Jiu Jitsu Belt List" />
      <ProjectCard name="React Web Portfolio" />
      <ProjectCard name="Weather Cheese Pairing" />
      <ProjectCard name="Lawman Jiu Jitsu Teaching Assistant" />
    </div>

    <div className="header-box">
      <img
        className="header-img"
        src="https://avatars3.githubusercontent.com/u/31260897?v=4&s=200"
        alt="github profile"
      />
      <h2 className="header-text">Long Island Javascript Meetup</h2>
    </div>

    <div className="project-display">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  </div>
);

export default ProjectsDisplay;
