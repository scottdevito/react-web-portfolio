import React from 'react';

export const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <a href="https://github.com/scottdevito" target="_blank">
          <div className="contact-btn">
            <h5>Github</h5>
          </div>
        </a>

        <a href="mailto:scottadevito@gmail.com">
          <div className="email-logo" />
        </a>

        <a href="https://www.linkedin.com/in/scott-devito" target="_blank">
          <div className="contact-btn">
            <h5>LinkedIn</h5>
          </div>
        </a>
      </div>
    </div>
  );
};
