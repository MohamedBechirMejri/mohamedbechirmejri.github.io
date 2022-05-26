import React from "react";

const Preloader = () => {
  const [loaded, setLoaded] = React.useState(false);

  window.onload = () => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  };
  return (
    <div
      className={`fixed z-50 ring-zinc-200 -translate-x-1/2 -translate-y-1/2 bg-zinc-700 rounded-full ring-[500vw] p-8 inset-1/2 ${
        loaded ? ` onload-scale` : "rotate-animation"
      }`}
    />
  );
};

export default Preloader;
