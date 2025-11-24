import React from "react";
import "./Hero.css"; // Import the CSS file for styling



export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-title">Hi, I'm Khanyisa Hlungwani</h1>
      <p className="hero-subtitle">Full Stack Web Developer</p>
      <a href="#projects" className="hero-button">
        View My Work
      </a>
    </section>
  );
}
