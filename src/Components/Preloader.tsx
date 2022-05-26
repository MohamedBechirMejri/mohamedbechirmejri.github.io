import React from "react";

const Preloader = () => {
  const [loaded, setLoaded] = React.useState(false);

  window.onload = () => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  };
  return (
    <div className="fixed z-50 w-screen h-screen bg-zinc-200">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 bg-green-500 rounded-full h-36 w-36 inset-1/2 rotate-animation"></div>{" "}
      <div className="absolute font-mono text-xl font-bold -translate-x-1/2 -translate-y-1/2 inset-1/2 w-max h-max text-zinc-200 animate-pulse">
        Loading...
      </div>
    </div>
  );
};

export default Preloader;
