import React, { Component } from 'react';
import './App.css';

import { Banner } from './components/banner';

export const App = ( { children } ) => {
    return(
        <div>
          <Banner />
        </div>
    );
};
