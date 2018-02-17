import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Banner } from './components/banner';
import { Navigation } from './components/navigation';
import { NotFound } from './components/not_found';
import About from './components/about/about';
import Resume from './components/resume/resume';
import { Contact } from './components/contact/contact';
import ProjectDisplay from './components/projects/projects_display';

export const App = () => {
  return (
    <Router>
      <StyledApp>
        <Navigation />
        <Banner />
        <Route
          pattern="/"
          render={props => {
            window.scrollTo(0, 0);
            return null;
          }}
        />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={ProjectDisplay} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </StyledApp>
    </Router>
  );
};

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;
