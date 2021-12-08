import React from "react";
import "./About.css";

export default function About() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="about-content col-12">
            <h1 className="about-heading">Hey, Im Cooper!</h1>
            <p className="about-paragraph">
              A recently graduated full stack developer from Australia, based in
              Amsterdam. I attended Ironhack's fulltime web dev course and
              completed it in October 2021. I am now in search of a junior web
              developer position! Some of the technologies i learned and
              currently use are: Javascript (ES6), MongoDB, Express, React,
              NodeJS, Git , HTML & CSS.
            </p>
            <p className="about-paragraph">
              Prior to beginning my new journey as a developer, i worked as a
              barber for several years. Although the barbering industry is
              something i am still very passionate about, new issues in the
              world (Covid) have caused me seek an alternate career path.
              Through searching i found a love for coding, in particular
              building websites and apps.
            </p>
            <p className="about-paragraph">
              Outside of my work life i love rock climbing and travelling. The
              beauty of climbing is the places you get to see around the world,
              and the problem solving nature of the sport, very similar to
              coding! If you are interested in getting in
              <a className="contact-span" href="/contact">
                {" "}
                contact with me
              </a>{" "}
              i would love to hear from you.
            </p>
            <div className="about-img-wrap">
              <div className="single-img-wrap">
                <img
                  src="./climbing.jpeg"
                  className="img-about col-md-6 float-md-end mb-3 ms-md-3"
                  alt="multipitch climb in mallorca"
                />
                <span className="img-text">
                  Multipitch climbing in Mallorca
                </span>
              </div>
              <div className="single-img-wrap">
                <img
                  src="./climb2.jpeg"
                  className="img-about col-md-6 float-md-end mb-3 ms-md-3"
                  alt="multipitch climb in mallorca"
                />
                <span className="img-text">Sport climbing in Mallorca</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
