import React, { Component } from 'react';

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
  toggleResumeFilter(id, event) {
    this.setState({
      visibleComponent: id,
    });
  }
  render() {
    return (
      <div className="resume">
        <div className="filters">
          <div
            className="btn-group btn-group-justified"
            role="group"
            aria-label="..."
          >
            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn btn-default"
                onClick={this.toggleResumeFilter.bind(this, 'full')}
              >
                Full Resume
              </button>
            </div>
            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn btn-default"
                onClick={this.toggleResumeFilter.bind(this, 'skills')}
              >
                Skills
              </button>
            </div>
            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn btn-default"
                onClick={this.toggleResumeFilter.bind(this, 'experience')}
              >
                Experience
              </button>
            </div>
            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn btn-default"
                onClick={this.toggleResumeFilter.bind(this, 'education')}
              >
                Education
              </button>
            </div>
          </div>
        </div>

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
    );
  }
}

export default Resume;
