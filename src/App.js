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
import Badges from "./components/Badges/Badges";

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
              Projects
            </Link>
          </li>
          <li>
            <Link to="resume" spy={true} smooth={true}>
              Resume
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
        <div class="flip-card" tabIndex="0">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <i class="fa-regular fa-user"></i>
              <h3>Hover!</h3>
            </div>
            <div class="flip-card-back">
              <img
                className="profilePic"
                src="https://media.licdn.com/dms/image/C5603AQGpjoopTdN3lQ/profile-displayphoto-shrink_800_800/0/1612428126745?e=1680739200&v=beta&t=ibltgJVe03quCf0bIwo28ny9ZNpPb5qbjDYJX97xwmg"
                alt=""
              />
            </div>
          </div>
        </div>

        <h2>Fullstack Engineer</h2>

        <div className="badgeContainer">
          <Badges />
        </div>
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
        <h2>Projects</h2>
        <p>Here are some of my recent projects:</p>
        {projectData.reverse().map((project) => (
          <>
            <ProjectCard project={project} />
          </>
        ))}
      </section>
      <section id="resume" className="resume-section">
        <h2>Resume</h2>
        <a href="https://docs.google.com/document/d/1REybROf7CZ0VOvv0Ajx_WuCAevN5WTezVJFaFA2geHc/edit?usp=sharing">
          <i class="fa-solid fa-file"></i> See My Resume
        </a>
      </section>
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <div className="contactDesc">
          <p>
            I would love to hear from you! <br /> If you have any questions or
            comments, let me know!
          </p>
          <h3>pyongho0306@gmail.com</h3>
          <div className="contactMail">
            <a href="mailto:pyongho0306@gmail.com">
              <i class="fa-solid fa-at"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
