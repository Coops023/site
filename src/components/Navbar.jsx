import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import { scroller } from "react-scroll";

export default function Navbar() {
  const scrollToProjects = () => {
    scroller.scrollTo("project-content", {
      duration: 300,
      delay: 0,
      smooth: "easeInQuad",
    });
  };

  const scrollToContact = () => {
    scroller.scrollTo("container", {
      duration: 100,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToAbout = () => {
    scroller.scrollTo("project-content", {
      duration: 300,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <h2 className="name-logo">Cooper Bjorkelund</h2>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navlink-wrap collapse navbar-collapse justify-content-end"
            id="navbarTogglerDemo02"
          >
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="projects"
                  onClick={scrollToProjects}
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/contact"
                  onClick={scrollToContact}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <nav className="navbar navbar-dark ">
        <div className="container-fluid">
      
          <NavLink className="navbar-brand" to="/">
            <img
              src="headshot.jpg"
              alt=""
              width="70"
              className="d-inline-block align-text-top"
            />
            <h2 className="name-logo">Cooper Bjorkelund</h2>
          </NavLink>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/projects"
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav> */}
    </>
  );
}
