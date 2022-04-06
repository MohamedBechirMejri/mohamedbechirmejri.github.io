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
        targets={[".link", "a", ".cursor-pointer"]}
        customClass="custom-cursor"
        dimensions={37}
        fill="#F5F5F5"
        strokeColor="#000"
        strokeWidth={1}
        smoothness={{
          movement: 0.13,
          scale: 0.09,
          opacity: 0.47,
        }}
        targetOpacity={0.5}
        targetScale={1.65}
      />
      <CustomCursor
        targets={[".link", "a", ".cursor-pointer"]}
        customClass="custom-cursor"
        dimensions={7}
        fill="#000"
        strokeColor="#000"
        strokeWidth={1}
        smoothness={{
          movement: 1,
          scale: 0.09,
          opacity: 0.47,
        }}
        targetOpacity={0.8}
        targetScale={2}
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
