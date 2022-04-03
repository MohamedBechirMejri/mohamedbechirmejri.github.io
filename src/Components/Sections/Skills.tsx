import React from "react";
import css3 from "../../Assets/Logos/css3.svg";
import eslint from "../../Assets/Logos/eslint.svg";
import git from "../../Assets/Logos/git.svg";
import github from "../../Assets/Logos/github.svg";
import heroku from "../../Assets/Logos/heroku.svg";
import html5 from "../../Assets/Logos/html5.svg";
import javascript from "../../Assets/Logos/javascript.svg";
import jest from "../../Assets/Logos/jest.svg";
import mongodb from "../../Assets/Logos/mongodb.svg";
import nodejs from "../../Assets/Logos/nodejs.svg";
import npm from "../../Assets/Logos/npm.svg";
import rails from "../../Assets/Logos/rails.svg";
import react from "../../Assets/Logos/react.svg";
import ruby from "../../Assets/Logos/ruby.svg";
import sass from "../../Assets/Logos/sass.svg";
import tailwind from "../../Assets/Logos/tailwind.svg";
import typescript from "../../Assets/Logos/typescript.svg";
import webpack from "../../Assets/Logos/webpack.svg";
import yarn from "../../Assets/Logos/yarn.svg";

const logos = [
  {
    name: "CSS3",
    logo: css3,
  },
  {
    name: "ESLint",
    logo: eslint,
  },
  {
    name: "Git",
    logo: git,
  },
  {
    name: "GitHub",
    logo: github,
  },
  {
    name: "Heroku",
    logo: heroku,
  },
  {
    name: "HTML5",
    logo: html5,
  },
  {
    name: "JavaScript",
    logo: javascript,
  },
  {
    name: "Jest",
    logo: jest,
  },
  {
    name: "MongoDB",
    logo: mongodb,
  },
  {
    name: "Node.js",
    logo: nodejs,
  },
  {
    name: "npm",
    logo: npm,
  },
  {
    name: "Rails",
    logo: rails,
  },
  {
    name: "React",
    logo: react,
  },
  {
    name: "Ruby",
    logo: ruby,
  },
  {
    name: "Sass",
    logo: sass,
  },
  {
    name: "Tailwind",
    logo: tailwind,
  },
  {
    name: "TypeScript",
    logo: typescript,
  },
  {
    name: "Webpack",
    logo: webpack,
  },
  {
    name: "Yarn",
    logo: yarn,
  },
];

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-4">
      <h1>Skills</h1>

      <div className="grid items-center justify-center grid-cols-5 gap-8 p-8 rounded-lg shadow-lg">
        {logos.map((logo, i) => (
          <div className={`flex justify-center after:content-['${logo.name}']`}>
            <img src={logo.logo} alt={logo.name} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
