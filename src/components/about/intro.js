import React from 'react';
import Footer from './footer';

export const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-container">
        <img
          className="me"
          src="https://s3.amazonaws.com/sdevito-web-portfolio/testingPresentation.png"
          role="presentation"
        />
        <div className="description">
          <h1>Hey, I'm Scott</h1>
          <p>
            I'm a 27 year old software engineer. I love creating things,
            collaborating with people, and solving problems. I'm constantly
            looking for new ways to grow.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
