import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';

export const Navigation = () => {
  return (
    <StyledAppBar position="sticky" color="default">
      <StyledNavLinks>
        <StyledNavLink>
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <Button>Home</Button>
          </NavLink>
        </StyledNavLink>
        <StyledNavLink>
          <NavLink to="/projects" style={{ textDecoration: 'none' }}>
            <Button>Projects</Button>
          </NavLink>
        </StyledNavLink>
        <StyledNavLink>
          <NavLink to="/resume" style={{ textDecoration: 'none' }}>
            <Button>Resume</Button>
          </NavLink>
        </StyledNavLink>
        <StyledNavLink>
          <NavLink to="/contact" style={{ textDecoration: 'none' }}>
            <Button>Contact</Button>
          </NavLink>
        </StyledNavLink>
      </StyledNavLinks>
    </StyledAppBar>
  );
};

const StyledAppBar = styled(AppBar)`
  width: 100%;
  height: 3.5em;
`;

const StyledNavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  height: 100%;
`;

const StyledNavLink = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 100%;
  margin: 0;
`;
