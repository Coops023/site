import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="project-wrap">
      <div className="project-content">
        <div className="proj-text">
          <h2 className="proj-heading">Vine Vibe</h2>
          <ul className="tech-list-1 tech-list">
            <li>Node</li>
            <li>Express</li>
            <li>React</li>
            <li>Axios</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <p className="project-para">
            Your virtual wine cellar. We decided to create a virtual wine cellar
            where we could virtually store all of the wines we loved, and hoard
            all of the ones we hadn’t tried yet!
            <div className="button-wrap">
              <a className="button" href="https://vinevibe.herokuapp.com/">
                {" "}
                Heroku deployment{" "}
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
        />
      </div>
      <div className="project-content">
        <img
          src="./what-t-fridge.png"
          className="project-img project-img-fr"
          alt="screenshot of vinevibe page"
        />
        <div className="proj-text">
          <h2 className="proj-heading">What the fridge</h2>
          <ul className="tech-list-2 tech-list">
            <li>Node</li>
            <li>Express</li>
            <li>Axios</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <p className="project-para">
            Want to make dinner with the few items you have lying around at
            home? What the fridge is for you. Save your items into your virtual
            fridge hit search and you will be sent back some recipe's you can
            make!
            <div className="button-wrap">
              <a
                className="button"
                href="https://what-the-fridge-coop.herokuapp.com/"
              >
                {" "}
                Heroku deployment{" "}
              </a>{" "}
              <a
                className="button"
                href="https://github.com/Coops023/project-2-What-the-fridge"
              >
                Github
              </a>
            </div>
          </p>
        </div>
      </div>
      <div className="project-content">
        <div className="proj-text">
          <h2 className="proj-heading">Free solo viking</h2>
          <ul className="tech-list-3 tech-list">
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <p className="project-para">
            Scale the cliff dodging falling rock's and collecting food for bonus
            points! Free solo viking is a rock-climbing game created using HTML
            canvas and Javascript. check it out!
            <div className="button-wrap">
              <a
                className="button"
                href="https://coops023.github.io/Free-Solo-viking/#"
              >
                {" "}
                Deployment{" "}
              </a>{" "}
              <a
                className="button"
                href="https://github.com/Coops023/Free-Solo-viking"
              >
                Github
              </a>
            </div>
          </p>
        </div>

        <img
          src="./game.png"
          className="project-img"
          alt="screenshot of vinevibe page"
        />
      </div>
    </div>
  );
}
