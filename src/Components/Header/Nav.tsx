import React from "react";

const Nav = () => {
  return (
    <nav className="flex items-center">
      <p
        className="p-4 cursor-pointer hover:underline"
        onClick={() => {
          window.scrollTo({
            top: document.getElementById("about")!.offsetTop,
            behavior: "smooth",
          });
        }}
      >
        About
      </p>
      <p
        className="p-4 cursor-pointer hover:underline"
        onClick={() => {
          window.scrollTo({
            top: document.getElementById("skills")!.offsetTop,
            behavior: "smooth",
          });
        }}
      >
        Skills
      </p>
      <p
        className="p-4 cursor-pointer hover:underline"
        onClick={() => {
          window.scrollTo({
            top: document.getElementById("projects")!.offsetTop,
            behavior: "smooth",
          });
        }}
      >
        Projects
      </p>
      <p
        className="p-4 cursor-pointer hover:underline"
        onClick={() => {
          window.scrollTo({
            top: document.getElementById("contact")!.offsetTop,
            behavior: "smooth",
          });
        }}
      >
        Contact
      </p>
    </nav>
  );
};

export default Nav;
