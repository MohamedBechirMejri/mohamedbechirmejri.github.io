import React from "react";

const Preloader = () => {
  return (
    <div className="fixed z-50 w-screen h-screen bg-zinc-200">
      <div className="absolute w-32 h-32 -translate-x-1/2 -translate-y-1/2 bg-green-500 rounded-full inset-1/2 rotate-animation"></div>
    </div>
  );
};

export default Preloader;
