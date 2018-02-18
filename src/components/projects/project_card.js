import React from 'react';
import styled from 'styled-components';

const ProjectCard = props => (
  <StyledProjectDiv>
    <StyledProjectCard>
      <StyledProjectLink
        href={props.projLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledCardTitle>{props.name}</StyledCardTitle>
        <img src={props.img} alt="project" />
        <StyledCardText>{props.desc}</StyledCardText>
      </StyledProjectLink>
    </StyledProjectCard>
  </StyledProjectDiv>
);

export default ProjectCard;

const StyledProjectDiv = styled.div`
  flex: 1 1 50%;
  flex-direction: column;
  width: 100%;
`;

const StyledProjectCard = styled.div`
  padding: 4em;
`;

const StyledCardTitle = styled.h3`
  font-weight: bold;
`;

const StyledCardText = styled.p`
  margin-top: 1em;
`;

const StyledProjectLink = styled.a`
  text-decoration: none;
`;
