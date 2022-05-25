import React from "react";
import "../../styles/Project.css";
import unn from "../imgs/unn.png";
import thisiswar from "../imgs/thisiswar.png";
import readme from "../imgs/readme.png";
import mossii from "../imgs/drmossii.png";
import placeholder from "../imgs/placeholder.png";

function Project() {
  return (
    <div>
      <a name="Portfolio"></a>
      <div className="container project-margin">
        <div className="row">
          <div className="col-lg-3 col-sm-12 text-lg-end text-sm-start">
            <h2>Portfolio</h2>
          </div>
          <div className="col-lg-9 col-sm-12">
            <div class="row">
              <div class="col-lg-6 col-sm-12">
                <div class="card bg-dark text-white">
                  <img
                    class="card-img opacity-50"
                    src={unn}
                    alt="Screenshot of U.N.N."
                  />
                  <div class="card-img-overlay">
                    <h5 class="card-title">Ukraine News Now</h5>
                    <p class="card-text">
                      Ukraine News Now (UNN) was developed with the goal of
                      keeping people informed and up-to-date on the ongoing
                      Ukraine crisis.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-sm-12">
                <div class="card bg-dark text-white">
                  <img
                    class="card-img opacity-50"
                    src={thisiswar}
                    alt="Screenshot of This is War!"
                  />
                  <div class="card-img-overlay">
                    <h5 class="card-title">This is War!</h5>
                    <p class="card-text">
                      This is War! was my project group's first full-stack web
                      application. It's a simple "web game" that allows you to
                      create an account, character, and fight.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 col-sm-12">
                <div class="card bg-dark text-white">
                  <img
                    class="card-img opacity-50"
                    src={placeholder}
                    alt="Placeholder image"
                  />
                  <div class="card-img-overlay">
                    <h5 class="card-title">Habit Tracker</h5>
                    <p class="card-text">
                      This simple full-stack application allows users to create
                      and track progress on different habits they would like to
                      develop.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-sm-12">
                <div class="card bg-dark text-white">
                  <img
                    class="card-img opacity-50"
                    src={readme}
                    alt="Screenshot of readme generator in VSC"
                  />
                  <div class="card-img-overlay">
                    <h5 class="card-title">README Generator</h5>
                    <p class="card-text">
                      This command line application allows a user to quickly
                      create a high quality README.md file for their project
                      repositories.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 col-sm-12">
                <div class="card bg-dark text-white">
                  <img
                    class="card-img opacity-50"
                    src={mossii}
                    alt="Screenshot of Dr. Mossii infomercial"
                  />
                  <div class="card-img-overlay">
                    <h5 class="card-title">Dr. Mossii Infomercial</h5>
                    <p class="card-text">
                      Created an infomercial for a Seattle-based skincare brand.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-sm-12">
                <div class="card bg-dark text-white">
                  <img
                    class="card-img opacity-50"
                    src={placeholder}
                    alt="Placeholder image"
                  />
                  <div class="card-img-overlay">
                    <h5 class="card-title">Placeholder 6</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
