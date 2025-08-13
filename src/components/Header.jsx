import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <a href="#about" className="nav-link">About</a>
        <a href="#skills" className="nav-link">My Skills</a>
        <a href="#projects" className="nav-link">View My Work</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
    </header>
  );
}
