import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import { Intro } from './intro';

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="welcome">
          <h1>Welcome!</h1>
          <p>Thanks for taking the time to stop by</p>
          <Glyphicon glyph="chevron-down" />
        </div>
        <Intro />
      </div>
    );
  }
}

export default About;
