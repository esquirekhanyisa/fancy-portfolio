import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and CSS.",
    image: "https://www.esquire.co.za",
    demoLink: "https://www.esquire.co.za",
    codeLink: "https://www.esquire.co.za",
  },
  {
    title: "Todo App",
    description: "A simple todo app with React hooks and local storage.",
    image: "https://via.placeholder.com/300x180?text=Todo+App",
    demoLink: "#",
    codeLink: "https://github.com/khanyisa/todo-app",
  },
  {
    title: "Weather Dashboard",
    description: "Weather app using OpenWeatherMap API and React.",
    image: "https://via.placeholder.com/300x180?text=Weather+Dashboard",
    demoLink: "#",
    codeLink: "https://github.com/khanyisa/weather-dashboard",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map(({ title, description, image, demoLink, codeLink }) => (
          <div key={title} className="project-card">
            <img src={image} alt={title} className="project-image" />
            <div className="project-info">
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="project-links">
                <a href={demoLink} target="_blank" rel="noopener noreferrer" className="btn">
                  Live Demo
                </a>
                <a href={codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
