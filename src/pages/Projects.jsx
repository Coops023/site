import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="project-wrap">
      <h1 className="project-title">Projects i have worked on</h1>

      <div className="clearfix">
        <img
          src="./vinevibe.png"
          className="img col-md-6 float-md-end mb-3 ms-md-3"
          alt="screenshot of vinevibe page"
        />

        <p>
          Vinevibe was my 3rd project i worked on during my ironhack web dev
          bootcamp. I worked on this project with 3 other students. Our goal was
          to implement all the skills we had learnt so far (JS, nodeJS,
          ExpressJs, MongoDb, Axios) and also implemt react into the project. We
          decided to create a virtual wine cellar where we could virtually store
          all of the wines we loved, and hoard all of the ones we hadn’t tried
          yet!
        </p>
        <p>
          My role during this project was mostly working on the back-end logic
          of the app, and some small parts in the front-end. We worked on this
          project for 7 days in total, it was a great experience learning to
          work together in team. take a look for yourself.
          <a href="https://vinevibe.herokuapp.com/">
            {" "}
            Heroku deployment,{" "}
          </a>{" "}
          <a href="https://github.com/VineVibe/VineVibe">Github repository</a>
        </p>
      </div>
      <div className="clearfix">
        <img
          src="./what-t-fridge.png"
          className="img col-md-6 float-md-end mb-3 ms-md-3"
          alt="screenshot of what the fridge page"
        />

        <p>
          What the fridge was my 2nd project during the bootcamp, and i worked
          on this with one other student. The goal for the app was to focus on
          back-end routing using nodeJS, Express, MongoDB and handlebars
          templating language. The concept of the app is a search function that
          provides recipes based on ingredients you have at home. We achieved
          this by calling an external API and saving the recipe results to your
          user profile.
        </p>
        <p>
          As this was our first larger project during the bootcamp, and only
          working with one other student we mostly worked together doing pair
          coding sesions. A really enjoyable project for me to work on take a
          look for yourself.
          <a href="https://what-the-fridge-coop.herokuapp.com/">
            {" "}
            Heroku deployment,{" "}
          </a>
          <a href="https://github.com/Coops023/project-2-What-the-fridge">
            Github repository
          </a>
        </p>
      </div>
      <div className="clearfix">
        <img
          src="./game.png"
          className="img col-md-6 float-md-end mb-3 ms-md-3"
          alt="screenshot of free solo viking climbing game"
        />

        <p>
          My first project during the ironhack bootcamp, free solo viking. The
          project was to build a game using HTML canvas and javascript. I
          decided to build a climbing game due to my obvioud love for climbing.
          The game was a solo project and our first real challenge from the
          course. Through many ups and downs i learned alot while building this
          game, most of all how to find and fix bugs!
        </p>
        <p>
          Take a look for yourself!
          <a href="https://coops023.github.io/Free-Solo-viking/#">
            {" "}
            Deployment,{" "}
          </a>
          <a href="https://github.com/Coops023/Free-Solo-viking">
            Github repository
          </a>
        </p>
      </div>
      <div className="clearfix">
        <img
          src="./weatherapp.png"
          className="img-weather-app col-md-6 float-md-end mb-3 ms-md-3"
          alt="screenshot of shorts sheriff weather app."
        />

        <p>
          The shorts sheriff is a small weather app that i made as a bit of a
          joke among a group of friends. Though the app does demonstrate use of
          reactJS, calling an expternal API, geolocation and conditonal
          rendering based on API results.
        </p>
        <p>
          Take a look for yourself!
          <a href="https://shorts-sheriff.herokuapp.com/">
            {" "}
            Heroku deployment,{" "}
          </a>{" "}
          <a href="https://github.com/Coops023/shorts-sheriff">
            Github repository
          </a>
        </p>
      </div>
    </div>
  );
}
