import React from 'react';
import { IndexLink, Link } from 'react-router';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

export const Navigation = () => {
    return (
        <Navbar fixedTop collapseOnSelect>
            <Navbar.Header>
            <Navbar.Brand>
                <IndexLink to="/" activeClassName="active">Scott DeVito</IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1}><IndexLink to="/" activeClassName="active">Home</IndexLink></NavItem>
                <NavItem eventKey={2}><Link to="/resume" activeClassName="active">Resume</Link></NavItem>
                <NavItem eventKey={3}><Link to="/contact" activeClassName="active">Contact</Link></NavItem>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};