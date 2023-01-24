import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
         <br /> <span className="info-name">Hi, I'm Austin Nguyen</span>.
         <br /> Welcome to my web portfolio, I hope you will be able to learn a lot about me!
        </div>
        <div className="about-photo">
          {/* <img 
            src={require("../../../assets/coding.png")}
            className="picture"
          /> */}
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;