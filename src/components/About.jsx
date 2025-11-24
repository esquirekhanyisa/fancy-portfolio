import React from "react";
import "./About.css";
import profilePic from "../photo/cht.png"; // ✅ corrected path

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <img
          src={profilePic}
          alt="Khanyisa Magugu"
          className="about-photo"
        />
        <div className="about-text">
          <p>
            Hello! I’m Khanyisa Hlungwani, a passionate Full Stack Developer with strong expertise in 
            <strong> PHP (Laravel Framework), React, and C# </strong>. 
            I specialize in building scalable, secure, and user-friendly applications that deliver real value.
          </p>
          <p>
            With hands-on experience in backend development using Laravel and PHP, 
            as well as dynamic frontends with React, I excel at turning ideas into 
            reliable digital solutions. My background in C# also strengthens my 
            versatility across different environments and business applications.
          </p>
          <p>
            I thrive on solving complex problems, learning new technologies, 
            and delivering clean, maintainable code. 
            
          </p>
        </div>
      </div>
    </section>
  );
}
