import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="project-wrap">
      <div className="project-content">
        <div className="proj-text">
          <h2 className="proj-heading">Vine Vibe</h2>
          <ul className="tech-list">
            <li>NodeJs</li>
            <li>ExpressJs</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <p className="project-para">
            My role during this project was mostly working on the back-end logic
            of the app, and some small parts in the front-end. We worked on this
            project for 7 days in total, it was a great experience learning to
            work together in team. take a look for yourself.
            <div className="button-wrap">
              <a className="button" href="https://vinevibe.herokuapp.com/">
                {" "}
                Heroku deployment,{" "}
              </a>{" "}
              <a className="button" href="https://github.com/VineVibe/VineVibe">
                Github
              </a>
            </div>
          </p>
        </div>

        <img
          src="./vinevibe.png"
          className="project-img"
          alt="screenshot of vinevibe page"
          width={800}
        />
      </div>
      <div className="project-content">
        <img
          src="./vinevibe.png"
          className="project-img"
          alt="screenshot of vinevibe page"
          width={800}
        />

        <p className="project-para">
          My role during this project was mostly working on the back-end logic
          of the app, and some small parts in the front-end. We worked on this
          project for 7 days in total, it was a great experience learning to
          work together in team. take a look for yourself.
          <div className="button-wrap">
            <a href="https://vinevibe.herokuapp.com/"> Heroku deployment, </a>{" "}
            <a href="https://github.com/VineVibe/VineVibe">Github repository</a>
          </div>
        </p>
      </div>
      <div className="project-content">
        <p className="project-para">
          My role during this project was mostly working on the back-end logic
          of the app, and some small parts in the front-end. We worked on this
          project for 7 days in total, it was a great experience learning to
          work together in team. take a look for yourself.
          <div className="button-wrap">
            <a href="https://vinevibe.herokuapp.com/"> Heroku deployment, </a>{" "}
            <a href="https://github.com/VineVibe/VineVibe">Github repository</a>
          </div>
        </p>

        <img
          src="./vinevibe.png"
          className="project-img"
          alt="screenshot of vinevibe page"
          width={800}
        />
      </div>
    </div>
  );
}
