import React, { useState } from "react";

const Resume = () => {
  const [links, setLinks] = useState([
    {
      name: "Website",
      url: "https://MohamedBechirMejri.dev",
      after: "MohamedBechirMejri.dev",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/MohamedBechirMejri/",
      after: " ",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/mohamed_bechir_mejri/",
      after: " ",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mohamedbechirmejri/",
      after: " ",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/21655209052",
      after: " ",
    },
  ]);

  const [skills, setSkills] = useState([
    " Ability to Work Under Pressure",
    "Problem Solving",
    "Decision Making",
    "Time Management",
    "Computer Skills",
    "Leadership",
    "Fast Learner",
    "Collaboration & Teamwork",
    "Adaptability",
    "TailwindCSS",
  ]);

  const [languages, setLanguages] = useState([
    {
      name: "English",
      proficiency: "fluent",
    },
    {
      name: "Arabic",
      proficiency: "native",
    },
    {
      name: "French",
      proficiency: "beginner",
    },
  ]);

  // bg-[url(https://i.imgur.com/f8BkePk.jpeg)]

  return (
    <div className="max-w-[900px] m-auto min-h-screen bg-gradient-to-r    from-[#C9FFBF] to-[#FFAFBD] bg-cover bg-no-repeat my-4 rounded-lg prose overflow-scroll [font-family:tt_commons]">
      <div className="w-[900px] min-h-screen bg-[#fffffff1] backdrop-blur-lg grid grid-cols-4 p-16 gap-8">
        <div className="flex justify-center ">
          <div
            className="w-24 h-24 bg-[url(https://i.imgur.com/f8BkePk.jpeg)] rounded-full bg-cover"
            style={{
              backgroundPosition: "-1154px 3443px",
            }}
          />
        </div>
        <div className="col-span-3 ">
          <p className="text-[#94969d] m-0 font-light text-sm">
            28, st. 62951 Omrane Superieur, Tunis, 1091
          </p>
          <p className="m-0 text-sm">
            <a
              href="tel:+21655209052"
              className="text-[#94969d] no-underline font-light hover:underline transition-all"
            >
              +216 55 209 052
            </a>
            {" · "}
            <a
              href="mailto:mohamedbechir.mejri.dev@gmail.com"
              className="text-[#94969d] no-underline font-light hover:underline transition-all"
            >
              mohamedbechir.mejri.dev@gmail.com
            </a>
          </p>

          <h1 className="m-0 mt-8 text-3xl font-bold">
            <span>Mohamed Bechir Mejri, </span>
            <span>Web Developer</span>
          </h1>
          <p className="mt-2 text-lg font-medium ">
            · Experienced Web Developer adept in all stages of advanced web
            development. <br /> · Knowledgeable in user interface, testing, and
            debugging processes. <br /> · Bringing forth expertise in design,
            installation, testing and maintenance of web systems. <br /> ·
            Equipped with a diverse and promising skill-set. <br /> · Proficient
            in an assortment of technologies, including Javascript, Typescript,
            NodeJS, React, Next.js, Firebase and many more. <br /> · Able to
            effectively self-manage during independent projects, as well as
            collaborate in a team setting.
          </p>
        </div>
        <div className="">
          <h4 className="text-[#94969d] m-0 font-medium">Employment History</h4>
        </div>
        <div className="col-span-3 ">
          <h3 className="m-0">Freelancer</h3>
          <p className="text-[#94969d] font-light text-sm">
            September 2021 – Present
          </p>
        </div>{" "}
        <div className="">
          <h4 className="text-[#94969d] m-0 font-medium">Education</h4>
        </div>
        <div className="col-span-3 ">
          <h3 className="m-0">Full Stack Developer, The Odin Project</h3>
          <p className="text-[#94969d] font-light text-sm">
            November 2020 – September 2022
          </p>
        </div>{" "}
        <div className="">
          <h4 className="text-[#94969d] m-0 font-medium">Links</h4>
        </div>
        <div className="grid grid-cols-2 col-span-3 gap-6">
          {links.map(l => (
            <p key={l.name} className="m-0">
              <a href={l.url} className="font-medium underline">
                {l.name}
              </a>
              <span className="ml-4 text-sm text-[#94969d]"> {l.after}</span>
            </p>
          ))}
        </div>
        <div className="">
          <h4 className="text-[#94969d] m-0 font-medium">Skills</h4>
        </div>
        <div className="grid grid-cols-2 col-span-3 gap-8">
          {skills.map(s => (
            <p key={s} className="m-0 font-medium">
              {s}
            </p>
          ))}
        </div>
        <div className="">
          <h4 className="text-[#94969d] m-0 font-medium">Languages</h4>
        </div>
        <div className="grid grid-cols-2 col-span-3 gap-8">
          {languages.map(l => (
            <p key={l.name} className="m-0 font-medium">
              {l.name}{" "}
              <span className="capitalize text-[#94969d] text-sm font-light ml-2">
                {l.proficiency}
              </span>
            </p>
          ))}
        </div>{" "}
        <div className="">
          <h4 className="text-[#94969d] m-0 font-medium">Hobbies</h4>
        </div>
        <p className="col-span-3 m-0 font-semibold">
          Swimming, Gaming, Coding, Traveling, Sleeping, Equestrianism...
        </p>
      </div>
    </div>
  );
};

export default Resume;
