import React from "react";
import About from "./Components/Sections/About";
import Hero from "./Components/Sections/Hero";
import Skills from "./Components/Sections/Skills";
import Header from "./Components/Header";
import Projects from "./Components/Sections/Projects";
import Contact from "./Components/Sections/Contact";
import SocialLinks from "./Components/SocialLinks";
// @ts-ignore
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";

function App() {
  return (
    <div className="App">
      <CustomCursor
        targets={[".link", ".your-css-selector"]}
        customClass="custom-cursor"
        dimensions={30}
        fill="#FFF"
        smoothness={{
          movement: 0.2,
          scale: 0.1,
          opacity: 0.2,
        }}
        targetOpacity={0.5}
      />
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
