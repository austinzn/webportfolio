import React from "react";
import "./intro.css";
import Separator from "../../common/separator";

function Intro() {
  return (
    <div className="intro">
      <Separator />
      <div className="intro-top">
        <div className="intro-info">
        <label className="section-title">About Me</label>
         <br /> I'm currently a student at the University of North Carolina Chapel Hill. I'm currently majoring in computer
         science and minoring in statistics. My hobbies include looking for new places to eat, playing video games, and I've also
         been learning to play the guitar! I'm always looking for opportunities to gain more experience with computer science 
         and hope that you'll reach out and connect with me!
        </div>
        <div className="about-photo">
        </div>
      </div>
    </div>
  );
}

export default Intro;