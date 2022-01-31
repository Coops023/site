import React from "react";
import "./About.css";
import { scroller } from "react-scroll";
import { Link } from "react-router-dom";

export default function About() {
  const scrollToContact = () => {
    scroller.scrollTo("contact-form", {
      duration: 100,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToProjects = () => {
    scroller.scrollTo("project-content", {
      duration: 300,
      delay: 0,
      smooth: "easeInQuad",
    });
  };

  return (
    <div>
      <div class="about-content">
        <div className="about-text-wrap">
          <h1 className="about-heading">Hey, Im Cooper</h1>

          <p className="about-paragraph">
            I am an Australian web developer based in Amsterdam. I enjoy
            building things with React JS, rock climbing and travelling.
            Interested in knowing more or working together?
          </p>
          <Link className="contact-btn" to="/contact" onClick={scrollToContact}>
            Contact me!
          </Link>
          <Link
            className="contact-btn"
            to="/contact"
            onClick={scrollToProjects}
          >
            Take a look at my work
          </Link>
        </div>
        <div className="about-img-container">
          <img
            className="home-img"
            src="./me-img.png"
            alt="an image of a man"
          />
          <div className="gradient"></div>
        </div>
      </div>
    </div>
  );
}
