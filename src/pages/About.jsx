import React from "react";
import "./About.css";

export default function About() {
  return (
    <div>
      <div class="about-content">
        <div className="about-text-wrap">
          <h1 className="about-heading">Hey, Im Cooper</h1>

          <p className="about-paragraph">
            I’m an amazing full stack web developer, bla bla bla. Saying in the
            first lines that you are a recently graduate is not that sexy :) You
            gotta sell yourself better. Again not what you’ve learned,
            technologies that you’re using in your workflow. Confidence this is
            what I want to get by reading this and experience.
            <a className="contact-span" href="/contact">
              {" "}
              contact with me
            </a>{" "}
            i would love to hear from you.
          </p>
        </div>

        <img src="./me-img.png" alt="an image of a man" />
      </div>
    </div>
  );
}
