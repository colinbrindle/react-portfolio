import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "../styles/Navigation.css";

function Navigation() {
  const [currentSection, setCurrentSection] = useState("#");

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top p-3">
          <a className="navbar-brand" href="#" id="#">
            CB
          </a>
          <a
            href="#About"
            onClick={() => setCurrentSection("About")}
            className={
              currentSection === "#About"
                ? "navbar-nav mr-auto nav-item nav-link active"
                : "navbar-nav mr-auto nav-item nav-link"
            }
          >
            About
          </a>
          <a
            href="#Portfolio"
            onClick={() => setCurrentSection("Portfolio")}
            className={
              currentSection === "#Portfolio"
                ? "navbar-nav mr-auto nav-item nav-link active"
                : "navbar-nav mr-auto nav-item nav-link"
            }
          >
            Portfolio
          </a>
          <a
            href="#Contact"
            onClick={() => setCurrentSection("Contact")}
            className={
              currentSection === "#Contact"
                ? "navbar-nav mr-auto nav-item nav-link active"
                : "navbar-nav mr-auto nav-item nav-link"
            }
          >
            Contact
          </a>
          <a href="#" className="nav-link">
            Resume
          </a>
        </nav>
      </header>
    </BrowserRouter>
  );
}

export default Navigation;
