import React from 'react';
import './styles/App.css';

import { Banner } from './components/banner';
import { Nav } from './components/nav';

export const App = ( { children } ) => {
    return(
        <div>
          <Nav />
          <Banner />
          {children}
        </div>
    );
};
