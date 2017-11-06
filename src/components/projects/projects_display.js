import React from 'react';
import ProjectCard from './project_card';

const ProjectsDisplay = () => (
  <div className="projects-display">
    <div className="header-box">
      <a
        href="https://github.com/scottdevito"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="header-img"
          src="https://avatars3.githubusercontent.com/u/16454542?v=4&s=460"
          alt="github profile"
        />
      </a>
      <h2 className="header-text">scottdevito</h2>
    </div>

    <div className="project-display">
      <ProjectCard
        name="Lawman Jiu Jitsu Belt List"
        img="https://s3.amazonaws.com/sdevito-web-portfolio/LMJJ+Monitor.svg"
        desc="A React site to allow LMJJ students to log in and access technique information for their current rank."
        projLink="http://lmjj.surge.sh"
      />
      <ProjectCard
        name="Good Days"
        img="https://s3.amazonaws.com/sdevito-web-portfolio/Good+Days+Phone.svg"
        desc="A React Native app to help you reflect on what your perfect day would look like."
        projLink="https://github.com/scottdevito/good-days"
      />
      <ProjectCard
        name="React Web Portfolio"
        img="https://s3.amazonaws.com/sdevito-web-portfolio/RWP+Monitor.svg"
        desc="A React site to showcase my projects and share my contact information."
        projLink="https://sdevito.com"
      />
      <ProjectCard
        name="Lawman Jiu Jitsu Teaching Assistant"
        img="https://s3.amazonaws.com/sdevito-web-portfolio/LMJJTA+Monitor.svg"
        desc="An interactive teaching assistant app for LMJJ instructors to use on the mat."
        projLink="http://jj-guide.com"
      />
    </div>

    <div className="header-box">
      <a
        href="https://www.meetup.com/long-island-javascript-group/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="header-img no-border"
          src="https://avatars3.githubusercontent.com/u/31260897?v=4&s=200"
          alt="github profile"
        />
      </a>
      <h2 className="header-text">Long Island Javascript Meetup</h2>
    </div>

    <div className="project-display">
      <ProjectCard
        name="Array Methods Presentation"
        img="https://s3.amazonaws.com/sdevito-web-portfolio/LIJS+Array+Methods+Monitor.svg"
        desc="A presentation for the LIJS Meetup that covers array methods in Javascript."
        projLink="https://github.com/lijs-meetup/array-methods"
      />
      <ProjectCard
        name="Data Structures and Algorithms Presentation"
        img="https://s3.amazonaws.com/sdevito-web-portfolio/LIJS+Data+Structures+and+Algos+Monitor.svg"
        desc="A presentation for the LIJS Meetup that covers data structures and algorithms."
        projLink="https://github.com/lijs-meetup"
      />
    </div>

    <div className="header-box">
      <a href="https://figma.com" target="_blank" rel="noopener noreferrer">
        <img
          className="header-img"
          src="https://downloads.intercomcdn.com/i/o/12862/9a035be09d24574778b2f63e/touch-180.png"
          alt="figma profile"
        />
      </a>
      <h2 className="header-text">Designs</h2>
    </div>

    <div className="project-display">
      <ProjectCard img="https://s3.amazonaws.com/sdevito-web-portfolio/Mountains.svg" />
      <ProjectCard img="https://s3.amazonaws.com/sdevito-web-portfolio/Autmn+Cabin.svg" />
      <ProjectCard img="https://s3.amazonaws.com/sdevito-web-portfolio/Buttons.svg" />
      <ProjectCard img="https://s3.amazonaws.com/sdevito-web-portfolio/Books+and+Tea.svg" />
    </div>
  </div>
);

export default ProjectsDisplay;
