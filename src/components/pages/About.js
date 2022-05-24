import React from "react";
import "../../styles/About.css";
import headshot from "../imgs/headshot.png";

console.log(headshot);

function About() {
  return (
    <div>
      <a name="About"></a>

      <div className="container about-margin">
        <div className="row align-items-center">
          <div className="col-lg-3 col-sm-12">
            <img
              src={headshot}
              alt="An image of my face. You're not missing much if it doesn't load."
              className="headshot"
            />
          </div>
          <div className="col-lg-9 col-sm-12">
            <h1>Hi, I'm Colin! 歡迎您來到我的網站！</h1>
            <p>
              Welcome to my portfolio page! It's a pleasure to{" "}
              <strong>
                <i>sort of</i>
              </strong>{" "}
              meet you.
            </p>
            <p>
              My name is Colin Brindle. I'm a former management consultant
              actively learning and developing my JavaScript, Node, and React
              skills with the goal of breaking into tech. (A dream of mine that
              I've waited too long to pursue!)
            </p>
            <p>
              A little bit about myself: I am half Taiwanese-American (my mom's
              side is Taiwanese) and I currently live in Atlanta, GA with my
              boyfriend, Mikey, and my wonderful cat, Katya Ravioli Brindle --
              we call her Kat for short. You'll usually find me busy in the
              kitchen or glued to my couch playing Elden Ring in my free time.
              I'm also a big fan of the outdoors and love a good hike!
            </p>
            <p>
              If you like what you see here, don't hesitate to reach out by
              navigating to my <a href="#Contact">contact form</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
