import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './index.css';

import { NotFound } from './components/not_found';

render((
  <Router history={browserHistory}>
      <Route path="/" component={App}>
          {/*<IndexRoute component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />*/}
      </Route>
      <Route path="*" component={NotFound} />
  </Router>
), document.getElementById('root'))
