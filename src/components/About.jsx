import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <img
          src="https://i.pravatar.cc/250?img=12" 
          alt="Khanyisa Magugu"
          className="about-photo"
        />
        <div className="about-text">
          <p>
            Hello! I’m Khanyisa Magugu, a passionate Full Stack Web Developer dedicated to crafting
            beautiful, responsive, and user-friendly websites and applications.
          </p>
          <p>
            With expertise in React, JavaScript, and modern web technologies, I love transforming ideas
            into impactful digital experiences.
          </p>
          <p>
            When I’m not coding, I enjoy photography, hiking, and exploring the latest tech trends.
          </p>
        </div>
      </div>
    </section>
  );
}
