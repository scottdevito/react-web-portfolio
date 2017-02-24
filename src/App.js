import React from 'react';

import { Banner } from './components/banner';
import { Nav } from './components/nav';

export const App = ( { children } ) => {
    return(
        <div>
          <Nav />
          <Banner />
          {children}
        </div>
    );
};

// JQuery for Nav and Banner blur onscroll effect
// About component onscroll opacity effect
// TODO: refactor with React animation
window.onscroll = function(e) {
  var banner = document.getElementsByClassName("banner")[0],
      nav = document.getElementsByClassName("navbar")[0],
      resume = document.getElementsByClassName("resume")[0],
      contact = document.getElementsByClassName("contact")[0],
      intro = document.getElementsByClassName("intro-container")[0],
      range = 50,
      scrollTop = document.body.scrollTop;

  // Intro is undefined if the About component isn't active
  if ((scrollTop > range) && (intro !== undefined)) {
      intro.classList.add("intro-container-scroll");
      banner.classList.add("blurred");
      nav.classList.add("nav-scroll");
  } else if ((scrollTop < range) && (intro !== undefined)) {
      intro.classList.remove("intro-container-scroll");
      banner.classList.remove("blurred");
      nav.classList.remove("nav-scroll");
  } else if ((scrollTop > range) && ((contact !== undefined) || (resume !== undefined))) {
      banner.classList.add("blurred");
      nav.classList.add("nav-scroll");
  } else if ((scrollTop < range) && ((contact !== undefined) || (resume !== undefined))) {
      banner.classList.remove("blurred");
      nav.classList.remove("nav-scroll");
  }
}
