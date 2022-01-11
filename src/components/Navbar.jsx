import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
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
