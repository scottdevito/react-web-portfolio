import React from 'react';
import styled from 'styled-components';

import ProjectCard from './project_card';

const ProjectsDisplay = () => (
  <StyledProjectsDisplay>
    <StyledHeaderBox>
      <a
        href="https://github.com/scottdevito"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledHeaderImage
          src="https://avatars3.githubusercontent.com/u/16454542?v=4&s=460"
          alt="github profile"
        />
      </a>
      <StyledHeaderText>scottdevito</StyledHeaderText>
    </StyledHeaderBox>

    <StyledProjectDisplay>
      <ProjectCard
        name="Storm Lacrosse Academy"
        img="https://s3.amazonaws.com/sdevito-web-portfolio/Storm+AcademyMonitor.svg"
        desc="Company website for Storm Lacrosse Academy: a lacrosse business that holds multiple clinics per year for children of all ages."
        projLink="https://s3.amazonaws.com/sdevito-web-portfolio/StormMockup.png"
      />
      <ProjectCard
        name="Sunny B Solar"
        img="https://s3.amazonaws.com/sdevito-web-portfolio/Sunny+B+Solar+Monitor.svg"
        desc="Company website for Sunny B Solar: a solar installation business that installs solar systems for clients in New York."
        projLink="https://sunny-b-solar.firebaseapp.com"
      />
      <ProjectCard
        name="Jade and Antler"
        img="https://s3.amazonaws.com/sdevito-web-portfolio/Jade+and+Antler+Monitor.svg"
        desc="Company website for Jade and Antler: a yoga business that holds classes and seminars in San Diego and Denver."
        projLink="https://jadeandantler.com"
      />
      <ProjectCard
        name="Deep Space Fun"
        img="https://s3.amazonaws.com/sdevito-web-portfolio/Deep+Space+Monitor.svg"
        desc="Messing around with a responsive space landing page."
        projLink="http://deep-space-fun.surge.sh"
      />

      <ProjectCard
        name="Bad Beer Tasting"
        img="https://s3.amazonaws.com/sdevito-web-portfolio/Bad+Beer+Tasting+Monitor.svg"
        desc="A React app used to host a bad beer tasting party."
        projLink="https://badbeertasting.com"
      />
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
        definedWidth={'118px'}
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
    </StyledProjectDisplay>

    <StyledHeaderBox>
      <a
        href="https://www.meetup.com/long-island-javascript-group/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledHeaderImage
          className="no-border"
          src="https://avatars3.githubusercontent.com/u/31260897?v=4&s=200"
          alt="github profile"
        />
      </a>
      <StyledHeaderText>Long Island Javascript Meetup</StyledHeaderText>
    </StyledHeaderBox>

    <StyledProjectDisplay>
      <ProjectCard
        name="Callbacks, Promises and Async/Await Presentation"
        img="https://s3.amazonaws.com/sdevito-web-portfolio/Async+Await+Presentation.svg"
        desc="A presentation for the LIJS Meetup that covers the basics of async Javascript."
        projLink="https://docs.google.com/presentation/d/15myJKm2YrTfv9L0-TGCsltJLZzsMNYs7-YDIvEC1AFQ/edit?usp=sharing"
      />
      <ProjectCard
        name="React Native Presentation"
        img="https://s3.amazonaws.com/sdevito-web-portfolio/LIJS+React+Native+Presentation.svg"
        desc="A presentation for the LIJS Meetup that covers the basics of React Native."
        projLink="https://github.com/lijs-meetup/react-native"
      />
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
    </StyledProjectDisplay>

    <StyledHeaderBox>
      <a href="https://figma.com" target="_blank" rel="noopener noreferrer">
        <StyledHeaderImage
          src="https://downloads.intercomcdn.com/i/o/12862/9a035be09d24574778b2f63e/touch-180.png"
          alt="figma profile"
        />
      </a>
      <StyledHeaderText>Designs</StyledHeaderText>
    </StyledHeaderBox>

    <StyledProjectDisplay>
      <ProjectCard
        img="https://s3.amazonaws.com/sdevito-web-portfolio/SceneCardShadow.svg"
        definedWidth={'300px'}
      />
      <ProjectCard img="https://s3.amazonaws.com/sdevito-web-portfolio/mountains-tent.svg" />
      <ProjectCard img="https://s3.amazonaws.com/sdevito-web-portfolio/Autmn+Cabin.svg" />
      <ProjectCard img="https://s3.amazonaws.com/sdevito-web-portfolio/Buttons.svg" />
      <ProjectCard img="https://s3.amazonaws.com/sdevito-web-portfolio/Books+and+Tea.svg" />
    </StyledProjectDisplay>
  </StyledProjectsDisplay>
);

export default ProjectsDisplay;

const StyledProjectsDisplay = styled.div`
  font-family: sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const StyledProjectDisplay = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
`;

const StyledHeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 5rem;
  color: #000000;
  padding: 5em;
  background: linear-gradient(135deg, #e4fcd0 1%, #829870 100%);
`;

const StyledHeaderImage = styled.img`
  height: 85px;
  width: 85px;
  border: 2px solid #ddd;
  border-radius: 4px;
`;

const StyledHeaderText = styled.h2`
  margin: 0;
`;
