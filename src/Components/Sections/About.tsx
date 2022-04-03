import React from "react";

const About = () => {
  return (
    <div
      className="flex flex-col items-start justify-start w-full h-screen gap-12 px-12 py-24 text-lg text-[161616]"
      style={{
        fontSize: "clamp(1rem, 3vw, 1.3rem)",
        fontWeight: 300,
      }}
    >
      <h1 className="text-2xl bg-blue-100 drop-shadow">About Me</h1>
      <p>
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
