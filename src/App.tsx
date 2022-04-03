import React from "react";
import About from "./Components/Sections/About";
import Hero from "./Components/Sections/Hero";
import Skills from "./Components/Sections/Skills";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default App;
