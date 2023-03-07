import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import About from "./pages/About/About";
// import Home from "./pages/Home/Home";
// import Contact from "./pages/Contact/Contact";
// import Resume from "./pages/Resume/Resume";
// import Projects from "./pages/Projects/Projects";
// import NavBar from "./components/NavBar/NavBar";
import { projectData } from "./data/data";
// import React, { useState } from "react";
import React from "react";
import { Link } from "react-scroll";
import ProjectCard from "./components/ProjectCard/ProjectCard";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="landing" spy={true} smooth={true}>
              Yong Park
            </Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="portfolio" spy={true} smooth={true}>
              Portfolios
            </Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <section id="landing" className="landing-section">
        <h1>
          Hi there, 👋 <br />
          I'm Yong Park.
        </h1>
        <h2>Fullstack Engineer</h2>
        <p>
          Specializing in Full-stack development: JavaScript | TypeScript |
          React.js | Node.js | Express.js | PostgreSQL | MongoDB
        </p>
      </section>
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          Hi! I am a Software Engineer with experience in management, working in
          a team environement, and open to new challenges. I specialize in
          full-stack MERN/PERN [JavaScript, TypeScript, React.js, Express.js,
          Node.js, PostgreSQL, MongoDB and RESTful APIs.]
        </p>
        <p>
          Immigrating from Korea to the US and having to quickly learn English
          instilled in me a love for adapting new languages to different
          environments. That passion led me to coding, where I use those same
          skills to build dynamic web-based applications. My experience also
          includes working as a cafe manager, which taught me how to work
          effectively in a team environment.
        </p>
      </section>
      <section id="portfolio" className="portfolio-section">
        <h2>Portfolio</h2>
        <p>Here are some of my recent projects:</p>
        {projectData.reverse().map((project) => (
          <>
            <ProjectCard project={project} />
          </>
        ))}
      </section>
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default App;
