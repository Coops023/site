import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/about">
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
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/about"
              >
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
      </nav>
    </>
  );
}
