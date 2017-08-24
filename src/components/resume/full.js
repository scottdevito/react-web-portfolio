import React from 'react';

import { Skills } from './skills';
import { Experience } from './experience';
import { Education } from './education';

export const Full = props => {
  return (
    <div
      className="full"
      style={props.visible ? { display: 'block' } : { display: 'none' }}
    >
      <div className="skills-container">
        <Skills visible="true" />
      </div>
      <Experience visible="true" />
      <Education visible="true" />
    </div>
  );
};
