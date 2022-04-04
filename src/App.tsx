import React from "react";
import About from "./Components/Sections/About";
import Hero from "./Components/Sections/Hero";
import Skills from "./Components/Sections/Skills";
import Header from "./Components/Header";
import SmoothScroll from "./Components/SmoothScroll/SmoothScroll.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <SmoothScroll>
        <Hero /> 
        <About />
        <Skills />
      </SmoothScroll>
    </div>
  );
}

export default App;
