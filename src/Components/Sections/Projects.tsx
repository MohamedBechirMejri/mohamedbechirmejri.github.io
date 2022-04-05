import React from "react";
import blog from "../../Assets/Gifs/blog.gif";
import etch from "../../Assets/Gifs/etch.gif";
import library from "../../Assets/Gifs/library.gif";
import motus from "../../Assets/Gifs/motus.gif";
import waldo from "../../Assets/Gifs/waldo.gif";

const Projects = () => {
  const projects = [
    {
      name: "Blog App",
      description: "A simple Blog App to familiarize myself with Rails.",
      link: "https://evening-refuge-13847.herokuapp.com/",
      sourceCode: "https://github.com/MohamedBechirMejri/blog-rails",
      image: blog,
      technologies: ["Ruby on Rails", "Tailwind CSS"],
    },
    {
      name: "Etch-A-Sketch",
      description:
        "Replicating the original Etch-A-Sketch Toy. I'm proud of this one.",
      link: "https://mohamedbechirmejri.github.io/ETCH-A-SKETCH/",
      sourceCode: "https://github.com/MohamedBechirMejri/ETCH-A-SKETCH",
      image: etch,
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Library App",
      description: "A Library App to familiarize myself with the backend.",
      link: "https://library-top-a7458.web.app/",
      sourceCode: "https://github.com/MohamedBechirMejri/LIBRARY",
      image: library,
      technologies: ["ReactJS", "Firebase"],
    },
    {
      name: "Unlimited Wordle",
      description:
        "My first TS project, Wordle Clone with unlimited rounds per day. made in the Style of Motus because dad loves that show. ",
      link: "https://mohamedbechirmejri.github.io/unlimited-wordle",
      sourceCode: "https://github.com/MohamedBechirMejri/unlimited-wordle",
      image: motus,
      technologies: ["TypeScript", "ReactJS", "Tailwind CSS"],
    },
    {
      name: "Photo Tagging Game",
      description: "Character finding game with global realtime leaderboard. ",
      link: "https://photo-tagging-game-6d738.web.app/",
      sourceCode:
        "https://github.com/MohamedBechirMejri/where-s-waldo-a-photo-tagging-app",
      image: waldo,
      technologies: ["ReactJS", "Firebase", "Tailwind CSS"],
    },
  ];

  return (
    <div
      className="flex flex-col items-center w-full min-h-screen p-8 pt-16 "
      id="projects"
    >
      <h1 className="w-full text-[clamp(2rem,2vw,4rem)] text-center font-[400] p-12 before:content-[''] before:bg-red-500 before:opacity-70 before:w-2/5 before:h-8 before:absolute before:left-1/2 before:-z-10 before:-rotate-[2deg] relative before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2">
        Some of my Projects:
      </h1>
      <div className="flex flex-col items-center justify-center gap-8 max-w-[35rem] ">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="pb-4 overflow-hidden transition-all rounded "
            >
              <img
                src={project.image}
                alt="project"
                className="w-full rounded-lg"
              />
              <h2 className="p-6 text-xl font-medium">{project.name}</h2>
              <p className="mx-4 bg-[#eee] w-full p-4">
                <code> {project.description}</code>
              </p>
              <p className="flex flex-wrap gap-2 p-4">
                <span>Built using</span>
                {project.technologies.map((technology, index) => {
                  return (
                    <span key={index}>
                      {technology}
                      {index === project.technologies.length - 2
                        ? " and"
                        : index === project.technologies.length - 1
                        ? "."
                        : ","}
                    </span>
                  );
                })}
              </p>
              <div className="flex flex-row justify-center w-full gap-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 font-bold text-white transition-all rounded bg-zinc-700 hover:bg-zinc-600"
                >
                  Live
                </a>
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 font-bold text-white transition-all rounded bg-zinc-700 hover:bg-zinc-600"
                >
                  Source Code
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <a
        href="https://github.com/MohamedBechirMejri/"
        target="_blank"
        rel="noreferrer"
        className="p-4 m-8 text-center text-white transition-all rounded bg-zinc-700 hover:bg-zinc-600"
      >
        40+ More...
      </a>
    </div>
  );
};

export default Projects;
