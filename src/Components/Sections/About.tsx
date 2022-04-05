import React from "react";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-screen gap-12 px-12 py-24 text-lg text-[161616] "
      style={{
        fontSize: "clamp(1rem, 3vw, 1.3rem)",
        fontWeight: 300,
      }}
      id="about"
    >
      <h1 className="w-full text-[clamp(3rem,1vw,4rem)] text-center font-[400] p-12 before:content-[''] before:bg-green-500 before:opacity-70 before:w-2/5 before:h-8 before:absolute before:left-1/2 before:-z-10 before:-rotate-[2deg] relative before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 ">
        About Me
      </h1>
      <p className="max-w-[65rem] text-justify">
        <span
          style={{
            lineHeight: 1.1,
            fontStyle: "italic",
          }}
        >
          I have been facinated by technology for as long as I can remember. I
          used to spend hours messing with my android phone (flashing custom
          roms and root apps) and hacking windows' core apps just to change how
          it looks or add some new features. <strong> problem solving </strong>
          and logic games were ( and still are ) my favorite past time.
        </span>
        <br />
        <br />
        Right after I learned about web development<strong> I knew </strong>it
        was the right career for me and I started learning how to code in march
        of 2021
        <em> (it's so fun).</em>
        <br />
        <br />I always keep an eye on latest technologies, tools and concepts
        and having a clean code base is a must for me.
        <strong> My goal is to create amazing software </strong>that will help
        people and businesses.
        <br />
        <br />
        <em style={{ letterSpacing: "-0.65px" }}>
          <strong>Fun fact:</strong> I used love music but then discovered that
          my religion doesn't allow listening to music. so I switched to reading
          books and it was one of the best decisions I've ever made.
        </em>
      </p>
    </div>
  );
};

export default About;
