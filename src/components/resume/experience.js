import React from 'react';

export const Experience = props => {
  return (
    <div style={props.visible ? { display: 'block' } : { display: 'none' }}>
      <h3 className="experience header">Experience</h3>
      <div className="experience panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">IT Analyst</h3>
        </div>
        <div className="panel-body">
          <h4 className="company">Bethpage Federal Credit Union</h4>
          <h5 className="dates">February 2016 - Present</h5>
          <p>
            Technical lead on multiple, full-environment scope projects (core
            banking software upgrades/deployments, network security
            initiatives).
          </p>
        </div>
      </div>

      <div className="experience panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Jr. IT Analyst</h3>
        </div>
        <div className="panel-body">
          <h4 className="company">Bethpage Federal Credit Union</h4>
          <h5 className="dates">December 2013 - February 2016</h5>
          <p>
            Systems troubleshooting and administration. Incident resolution in a
            production environment.
          </p>
        </div>
      </div>

      <div className="experience panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">IT Intern</h3>
        </div>
        <div className="panel-body">
          <h4 className="company">Bethpage Federal Credit Union</h4>
          <h5 className="dates">June 2013 - December 2013</h5>
          <p>
            Collaborate with team members, business units, vendors, and partner
            credit unions to ensure the smooth and reliable operation of banking
            systems.
          </p>
        </div>
      </div>
    </div>
  );
};
