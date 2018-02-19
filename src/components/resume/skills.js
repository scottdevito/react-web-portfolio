import React from 'react';

export const Skills = props => {
  return (
    <div style={props.visible ? { display: 'block' } : { display: 'none' }}>
      <h3 className="skills header">Skills</h3>
      <div className="panel panel-default">
        <div className="panel-body skills-panel">
          <p className="child-skill">JavaScript</p>

          <p className="child-skill">ES2015+</p>

          <p className="child-skill">React JS</p>

          <p className="child-skill">React Native</p>

          <p className="child-skill">Redux</p>

          <p className="child-skill">HTML5</p>

          <p className="child-skill">CSS</p>

          <p className="child-skill">Git/GitHub</p>

          <p className="child-skill">NoSQL</p>

          <p className="child-skill">SQL</p>

          <p className="child-skill">Agile</p>

          <p className="child-skill">Elm</p>
        </div>
      </div>
    </div>
  );
};
