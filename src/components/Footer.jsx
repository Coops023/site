import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright, faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { scroller } from "react-scroll";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToAbout = () => {
    scroller.scrollTo("navbar", {
      duration: 150,
      delay: 0,
      smooth: "linear",
    });
  };

  return (
    <div className="footer">
      <span className="copywrite">
        <div>
          {" "}
          <FontAwesomeIcon icon={faCopyright} /> 2021
        </div>
        <Link className="footer-link" to="/" onClick={scrollToAbout}>
          Cooper Bjokelund
        </Link>
      </span>

      <span className="socials">
        Socials
        <div className="social-icon-wrap">
          {" "}
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/cooper-bjorkelund/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className="footer-link" href="https://github.com/Coops023">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </span>
    </div>
  );
}
