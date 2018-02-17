import React from 'react';

import '../../styles/about/welcome.scss';
import boxes from '../../../assets/images/Boxes.svg';

export const Welcome = () => {
  return (
    <div className="welcome">
      {/* <div className="card-wrapper">
        <div className="welcome-card" />
      </div>
      <div className="card-wrapper">
        <div className="welcome-card-center" />
      </div>
      <div className="card-wrapper">
        <div className="welcome-card" />
      </div> */}
      <img src={boxes} alt="about me boxes" />
    </div>
  );
};
