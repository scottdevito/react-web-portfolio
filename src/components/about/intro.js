import React from 'react';

export const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-container">
        <img
          className="me"
          src="https://s3.amazonaws.com/sdevito-web-portfolio/aboutMe.jpg"
          role="presentation"
        />
        <div className="description">
          <h1>Hey, I'm Scott</h1>
          <p>
            I'm a 26 year old programmer and analyst. I love creating things,
            collaborating with people, and solving problems. The ever-changing
            nature of modern web technology fascinates me and I'm constantly
            looking for new ways to grow.
          </p>
        </div>
      </div>
      <div className="footer">
        <div className="cloud-animation-div">
          <img
            className="clouds cloud-first"
            src="https://s3.amazonaws.com/sdevito-web-portfolio/cloud3.svg"
            alt="clouds"
          />
        </div>
        <div className="cloud-animation-div">
          <img
            className="clouds cloud-second"
            src="https://s3.amazonaws.com/sdevito-web-portfolio/cloud3.svg"
            alt="clouds"
          />
        </div>
        <div className="cloud-animation-div">
          <img
            className="clouds cloud-third"
            src="https://s3.amazonaws.com/sdevito-web-portfolio/cloud3.svg"
            alt="clouds"
          />
        </div>
        <img
          className="mountains"
          src="https://s3.amazonaws.com/sdevito-web-portfolio/mountains-tent.svg"
          alt="mountain img"
        />
      </div>
    </div>
  );
};
