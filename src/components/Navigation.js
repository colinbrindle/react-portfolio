import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "../styles/Navigation.css";
import brand from "./imgs/favicon.png";

function Navigation() {
  const [currentSection, setCurrentSection] = useState("#");

  useEffect(() => {
    console.log(currentSection);
  });

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top p-2">
          <a
            href="#"
            onClick={() => setCurrentSection("#")}
            className={currentSection === "#" ? "navbar-brand" : "navbar-brand"}
          >
            <img src={brand} width="30" height="30" alt="" />
          </a>
          <a
            href="#About"
            onClick={() => setCurrentSection("About")}
            className={
              currentSection === "About"
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
              currentSection === "Portfolio"
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
              currentSection === "Contact"
                ? "navbar-nav mr-auto nav-item nav-link active"
                : "navbar-nav mr-auto nav-item nav-link"
            }
          >
            Contact
          </a>
          <a href="#" className="navbar-nav mr-auto nav-item nav-link">
            Resume
          </a>
        </nav>
      </header>
    </BrowserRouter>
  );
}

export default Navigation;
