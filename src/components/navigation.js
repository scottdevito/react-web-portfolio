import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

export const Navigation = () => {
  return (
    <Navbar fixedTop collapseOnSelect fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Scott DeVito</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <IndexLinkContainer to="/">
            <NavItem>Home</NavItem>
          </IndexLinkContainer>
          <LinkContainer to="/resume">
            <NavItem>Resume</NavItem>
          </LinkContainer>
          <LinkContainer to="/projects">
            <NavItem>Projects</NavItem>
          </LinkContainer>
          <LinkContainer to="/contact">
            <NavItem>Contact</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
