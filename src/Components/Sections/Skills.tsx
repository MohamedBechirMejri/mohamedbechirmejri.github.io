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
import firebase from "../../Assets/Logos/firebase.svg";

const logos = [
  {
    name: "HTML5",
    logo: html5,
  },
  {
    name: "CSS3",
    logo: css3,
  },

  {
    name: "JavaScript",
    logo: javascript,
  },
  {
    name: "TypeScript",
    logo: typescript,
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
    name: "Node.js",
    logo: nodejs,
  },
  {
    name: "React",
    logo: react,
  },
  {
    name: "Rails",
    logo: rails,
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
    name: "Jest",
    logo: jest,
  },
  {
    name: "MongoDB",
    logo: mongodb,
  },

  {
    name: "npm",
    logo: npm,
  },

  {
    name: "Webpack",
    logo: webpack,
  },
  {
    name: "Yarn",
    logo: yarn,
  },
  {
    name: "Firebase",
    logo: firebase,
  },
];

const Skills = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-screen p-8"
      id="skills"
    >
      <h1 className="w-full text-[clamp(2rem,2vw,4rem)] text-center font-[400] p-12 before:content-[''] before:bg-yellow-500 before:opacity-70 before:w-2/5 before:h-8 before:absolute before:left-1/2 before:-z-10 before:-rotate-[2deg] relative before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 ">
        Some of my Skills
      </h1>

      <div className="grid items-center justify-center grid-cols-4 sm:grid-cols-5 gap-8 p-8 rounded-lg max-w-[50rem] lg:grid-cols-6 lg:max-w-[60rem]">
        {logos.map(({ name, logo }, i) => (
          <div
            className="relative group animate-bounce"
            style={{
              animationDuration: `${i + 1 * 1}s`,
            }}
            key={`${i}-${name}`}
          >
            <p className="absolute p-4 text-xs text-center transition-all -translate-x-1/2 translate-y-1/2 bg-white border shadow opacity-0 left-1/2 top-1/2 group-hover:opacity-100 group-hover:translate-y-[60%] z-50 font-semibold">
              {name}
            </p>
            <img src={logo} alt={name} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
