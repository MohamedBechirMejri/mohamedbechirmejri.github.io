import React from "react";

const Contact = () => {
  return (
    <div className="p-8 bg-[#afafaf] h-screen w-full flex flex-col items-center justify-center">
      <h1 className="w-full text-[clamp(3rem,6vw,4rem)] text-center font-[400] p-4">
        Get in touch
      </h1>
      <p className=" text-lg font-[300] text-center max-w-3xl p-4">
        I'm currently looking for a role as a front-end/back-end web developer.
        Whether you have a question, an offer or just want to chat, send me an
        email and I will get back to you!
      </p>{" "}
      <a
        href="mailto:mohamedbechir.mejri.dev@gmail.com
            "
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 m-4 transition-all rounded text-zinc-200 bg-zinc-800 hover:shadow-[0_0_0_8px] hover:bg-zinc-300 hover:text-zinc-800 font-bold shadow-[0_0_0_5px] active:shadow-[0_0_0_4px] "
      >
        Say hello!
      </a>
    </div>
  );
};

export default Contact;
