// @ts-ignore
import etch from "../../Assets/Videos/Previews/etch.webm";
// @ts-ignore
import library from "../../Assets/Videos/Previews/library.webm";
// @ts-ignore
import motus from "../../Assets/Videos/Previews/motus.webm";
// @ts-ignore
import waldo from "../../Assets/Videos/Previews/waldo.webm";
// @ts-ignore

const Projects = () => {
  const projects = [
    {
      name: "nyutab",
      description: "A Better NewTab page for Chrome/FireFox (WIP)",
      link: null,
      sourceCode: "https://github.com/MohamedBechirMejri/nyutab",
      previewImg:
        "https://github.com/MohamedBechirMejri/nyutab/raw/main/.github/Assets/screenshot-2v0.8.png",
      technologies: ["ReactJS", "Tailwind CSS"],
    },
    {
      name: "Facebook Clone",
      description: "TheOdinProject's Capstone project",
      link: "https://odinbook-next.vercel.app/",
      sourceCode: "https://github.com/MohamedBechirMejri/facebook-next",
      previewImg: "/odinbook-next.vercel.app_ (1).png",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Firebase",
        "MongoDB",
        "TypeScript",
        "Websocket",
        "More...",
      ],
    },
    {
      name: "Etch-A-Sketch",
      description:
        "Replicating the original Etch-A-Sketch Toy. I'm proud of this one.",
      link: "https://mohamedbechirmejri.github.io/ETCH-A-SKETCH/",
      sourceCode: "https://github.com/MohamedBechirMejri/ETCH-A-SKETCH",
      preview: etch,
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Library App",
      description: "A Library App to familiarize myself with the backend.",
      link: "https://library-top-a7458.web.app/",
      sourceCode: "https://github.com/MohamedBechirMejri/LIBRARY",
      preview: library,
      technologies: ["ReactJS", "Firebase"],
    },
    {
      name: "Unlimited Wordle",
      description:
        "My first TS project, Wordle Clone with unlimited rounds per day. made in the Style of Motus because dad loves that show. ",
      link: "https://mohamedbechirmejri.github.io/unlimited-wordle",
      sourceCode: "https://github.com/MohamedBechirMejri/unlimited-wordle",
      preview: motus,
      technologies: ["TypeScript", "ReactJS", "Tailwind CSS"],
    },
    {
      name: "Photo Tagging Game",
      description: "Character finding game with global realtime leaderboard. ",
      link: "https://photo-tagging-game-6d738.web.app/",
      sourceCode:
        "https://github.com/MohamedBechirMejri/where-s-waldo-a-photo-tagging-app",
      preview: waldo,
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
              {project.previewImg ? (
                <img src={project.previewImg} alt="" />
              ) : (
                <video
                  src={project.preview}
                  className="w-full rounded-lg"
                  autoPlay
                  loop
                  muted
                />
              )}
              <h2 className="p-6 text-xl font-medium">{project.name}</h2>
              <p className="bg-[#eee] w-full p-4">
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
              <div className="flex flex-row justify-center w-full gap-2 p-2">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 font-bold text-white transition-all rounded bg-zinc-700 hover:bg-zinc-600"
                  >
                    Live
                  </a>
                )}
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
        70+ More...
      </a>
    </div>
  );
};

export default Projects;
