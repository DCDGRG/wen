import React from "react";
import './hero.css';

function heroSection() {
  return (
    <div className="heroContainer">

      <div className="avatar">
        <img src="https://github.com/DCDGRG/image/blob/08d2b2e5976ec18f45da68ac8200472a72dd48f8/IMG_2140.jpeg" alt="avatar" />
      </div>

      <div className="hero">
        <h2>Hi, I'm Terry.<br />
          I'm a student graduate from XiDian University.<br />
          and now I'm going to find a formal job or internship.<br />
          Besides, I'm considering to continue with master studies. </h2>

        <div className="social-links"></div>

      </div>

    </div>
  );
}

export default heroSection;