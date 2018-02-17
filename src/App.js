import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
      <div>
        <Navigation />
        <Banner />
        <Route exact path="/" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={ProjectDisplay} />
        <Route path="/contact" component={Contact} />

        <Route path="*" component={NotFound} />
      </div>
    </Router>
  );
};
