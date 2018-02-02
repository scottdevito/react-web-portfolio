import React, { Component } from 'react';
import { Intro } from './intro';
import { Welcome } from './welcome';

import '../../styles/about/about.scss';

class About extends Component {
  render() {
    return (
      <div className="about">
        <Welcome />
        <Intro />
      </div>
    );
  }
}

export default About;
