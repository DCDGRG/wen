import React from "react";
import './hero.css';

function heroSection() {
  return (
    <div id="home" className="heroContainer">

      <div className="avatar">
        <img src="https://github.com/DCDGRG/image/blob/main/IMG_2140.jpeg?raw=true" alt="avatar" />
      </div>

      <div className="hero">
        <p className="hero-kicker">Computer Science Graduate</p>
        <h1>Hi, I'm Terry.</h1>
        <p className="hero-copy">
          I graduated from XiDian University and am currently looking for a full-time software role or internship.
          I am also considering continuing with master's studies.
        </p>
        <div className="hero-highlights" aria-label="Profile highlights">
          <span>React</span>
          <span>Full-stack</span>
          <span>Open to opportunities</span>
        </div>

        <div className="social-links"></div>

      </div>
    </div>
  );
}

export default heroSection;
