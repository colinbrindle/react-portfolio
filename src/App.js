import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Project from "./components/pages/Project";

function App() {
  return (
    <div>
      <Navigation />
      <About />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
