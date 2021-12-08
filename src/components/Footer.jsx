import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright, faLink } from "@fortawesome/free-solid-svg-icons";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <span className="copywrite">
        <div>
          {" "}
          <FontAwesomeIcon icon={faCopyright} /> 2021
        </div>
        <a className="footer-link" href="/">
          Cooper Bjokelund
        </a>
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
