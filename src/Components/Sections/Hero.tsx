import React from "react";
import { CgChevronDown } from "react-icons/cg";

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-screen gap-20 font-[400] text-[#161616] []"
      style={{
        fontSize: "clamp(1rem, 7vw, 5rem)",
      }}
      id="hero"
    >
      <div className="flex flex-col justify-center items-left">
        <p className="text-sm"> Hey, </p>
        <p>I'm Mohamed Bechir,</p>
        <p>A full-stack developer</p>
        <p>based in Tunisia ❤️</p>
      </div>
      <p className=" animate-[bounce_1.5s_linear_infinite]">
        <CgChevronDown className="text-3xl" />
      </p>
    </div>
  );
};

export default Hero;
