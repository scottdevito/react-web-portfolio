import React, { Component } from 'react';

import TabNav from './tab_nav';
import { Full } from './full';
import { Skills } from './skills';
import { Experience } from './experience';
import { Education } from './education';

class Resume extends Component {
  constructor(props) {
    super(props);

    //State to keep track of which child component(s) to display
    this.state = {
      visibleComponent: 'full',
    };
  }

  //Event Handler for resume filter
  toggleResumeFilter = id => {
    this.setState({
      visibleComponent: id,
    });
  };

  render() {
    return (
      <div>
        <TabNav toggleResumeFilter={this.toggleResumeFilter} />
        <div className="resume">
          <a
            className="btn btn-primary btn-sm"
            href="https://s3.amazonaws.com/sdevito-web-portfolio/Scott_DeVito_SoftwareEngineer_Resume.pdf"
            target="_blank"
            role="button"
          >
            Download Resume
          </a>

          <Full visible={this.state.visibleComponent === 'full'} />
          <Skills visible={this.state.visibleComponent === 'skills'} />
          <Experience visible={this.state.visibleComponent === 'experience'} />
          <Education visible={this.state.visibleComponent === 'education'} />
        </div>
      </div>
    );
  }
}

export default Resume;
