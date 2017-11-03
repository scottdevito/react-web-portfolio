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
      <ProjectCard
        name="Lawman Jiu Jitsu Belt List"
        img="https://s3.amazonaws.com/sdevito-web-portfolio/LMJJ+Monitor.svg"
        desc="A React site to allow LMJJ students to log in and access technique information for their current rank."
      />
      <ProjectCard
        name="Good Days"
        img="https://s3.amazonaws.com/sdevito-web-portfolio/Good+Days+Phone.svg"
        desc="A React Native app to help you reflect on what your perfect day would look like."
      />
      <ProjectCard
        name="React Web Portfolio"
        img="https://s3.amazonaws.com/sdevito-web-portfolio/RWP+Monitor.svg"
        desc="A React site to showcase my projects and share my contact information."
      />
      <ProjectCard
        name="Lawman Jiu Jitsu Teaching Assistant"
        img="https://s3.amazonaws.com/sdevito-web-portfolio/LMJJTA+Monitor.svg"
        desc="An interactive teaching assistant app for LMJJ instructors to use on the mat."
      />
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
      <ProjectCard name="Array Methods Presentation" />
      <ProjectCard />
    </div>

    <div className="header-box">
      <img
        className="header-img"
        src="https://avatars3.githubusercontent.com/u/31260897?v=4&s=200"
        alt="figma profile"
      />
      <h2 className="header-text">Designs</h2>
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
