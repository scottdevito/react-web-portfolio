import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './styles/index.css';

import { NotFound } from './components/not_found';
import About from './components/about/about';
import Resume from './components/resume/resume';

render((
  <Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={About} />
          <Route path="/resume" component={Resume} />
          {/*<Route path="/contact" component={Contact} />*/}
      </Route>
      <Route path="*" component={NotFound} />
  </Router>
), document.getElementById('root'))
