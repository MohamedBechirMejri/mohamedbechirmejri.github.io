import React from "react";
import About from "./Components/Sections/About";
import Hero from "./Components/Sections/Hero";
import Skills from "./Components/Sections/Skills";
import Header from "./Components/Header";
import Projects from "./Components/Sections/Projects";
import Contact from "./Components/Sections/Contact";
import SocialLinks from "./Components/SocialLinks";

function App() {
  return (
    <div className="App">
      <Header />
      <SocialLinks />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
