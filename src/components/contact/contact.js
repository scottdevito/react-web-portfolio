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
          <img
            className="email-logo"
            src="https://s3.amazonaws.com/sdevito-web-portfolio/mailIcon1.png"
            role="presentation"
          />
        </a>

        <a href="https://www.linkedin.com/scott-devito" target="_blank">
          <div className="contact-btn">
            <h5>LinkedIn</h5>
          </div>
        </a>
      </div>
    </div>
  );
};
