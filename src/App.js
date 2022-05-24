import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Project from "./components/pages/Project";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div>
      <Navigation />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
