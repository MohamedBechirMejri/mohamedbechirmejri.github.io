import React from "react";

const Contact = () => {
  return (
    <div
      className="p-8 bg-[#afafaf] h-screen w-full flex flex-col items-center justify-center"
      id="contact"
    >
      <h1
        className="w-full text-[clamp(3rem,6vw,4rem)] text-center font-[400] p-4 before:content-[''] before:bg-fuchsia-600 before:opacity-70 before:w-1/3 before:h-8 before:absolute before:left-1/2 before:-z-10 before:-rotate-[2deg] relative before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 "
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        Get in touch
      </h1>
      <p className=" text-lg font-[300] text-center max-w-3xl p-4">
        I'm currently looking for a role as a front-end/back-end web developer.
        Whether you have a question, an offer or just want to chat, send me an
        email and I will get back to you!
      </p>{" "}
      <a
        href="mailto:mohamedbechirmejri.dev@gmail.com
            "
        target="_blank"
        rel="noopener noreferrer"
        // className="px-8 py-4 m-4 transition-all rounded text-zinc-200 bg-zinc-800 hover:shadow-[0_0_0_8px] hover:bg-zinc-300 hover:text-zinc-800 font-bold shadow-[0_0_0_5px] active:shadow-[0_0_0_4px] "
        className="px-8 py-4 m-4 transition-all rounded text-zinc-300 bg-zinc-800 hover:text-zinc-800 font-bold active:shadow-[0_0_0_4px] relative overflow-hidden before:absolute before:transition-transform before:-z-10 before:inset-0 before:bg-zinc-300 border-2 border-zinc-800 before:duration-[350ms] before:ease-in-out duration-[350ms] hover:before:scale-x-100 hover:before:origin-left before:origin-right before:scale-x-0"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        Say hello!
      </a>
    </div>
  );
};

export default Contact;
