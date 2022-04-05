import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Todo List",
      description: "A simple todo list app",
      link: "https://todo-list-app-mohamed-bechir.herokuapp.com/",
      sourceCode: "https://github.com/MohamedBechirMejri",
      image: "https://picsum.photos/700/700",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Passport",
        "Jest",
        "Enzyme",
        "React Testing Library",
      ],
    },
    {
      name: "Tic Tac Toe",
      description: "A simple tic tac toe game",
      link: "https://tic-tac-toe-mohamed-bechir.herokuapp.com/",
      sourceCode: "https://github.com/MohamedBechirMejri",
      image: "https://picsum.photos/700/700",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Passport",
        "Jest",
        "Enzyme",
        "React Testing Library",
      ],
    },
    {
      name: "Weather App",
      description: "A simple weather app",
      link: "https://weather-app-mohamed-bechir.herokuapp.com/",
      sourceCode: "https://github.com/MohamedBechirMejri",
      image: "https://picsum.photos/700/700",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Passport",
        "Jest",
        "Enzyme",
        "React Testing Library",
      ],
    },
    {
      name: "Tic Tac Toe",
      description: "A simple tic tac toe game",
      link: "https://tic-tac-toe-mohamed-bechir.herokuapp.com/",
      sourceCode: "https://github.com/MohamedBechirMejri",
      image: "https://picsum.photos/700/600",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Passport",
        "Jest",
        "Enzyme",
        "React Testing Library",
      ],
    },
  ];

  return (
    <div className="w-full h-screen p-8 pt-16" id="projects">
      <h1 className="p-8 text-lg font-[300]">And Some of My Projects</h1>
      <div className="flex flex-col items-center justify-center gap-8">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="pb-4 overflow-hidden transition-all rounded   hover:bg-[#fafafa]"
            >
              <img src={project.image} alt="project" />
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
    </div>
  );
};

export default Projects;
