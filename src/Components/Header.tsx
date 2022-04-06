import React from "react";
import Nav from "./Header/Nav";

const Header = () => {
  return (
    <header className="fixed flex items-center justify-between w-screen px-8 py-1 font-semibold">
      <p
        className="cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: document.getElementById("hero")!.offsetTop,
            behavior: "smooth",
          });
        }}
      >
        MBM
      </p>
      <Nav />
    </header>
  );
};

export default Header;
