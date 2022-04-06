import React from "react";
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io";
import { SiDiscord } from "react-icons/si";

const SocialLinks = () => {
  const casualLinks = [
    {
      icon: <IoLogoFacebook />,
      url: "https://www.facebook.com/MohamedBechirMejri",
    },
    {
      icon: <IoLogoTwitter />,
      url: "https://twitter.com/MohamedBechirMe",
    },
    // {
    //   icon: <SiDiscord />,
    //   url: "https://discord.gg/hhhhhhh",
    // },
    // {
    //   icon: <IoLogoWhatsapp />,
    //   url: "https://wa.me/hhhhhhh,
    // },
  ];
  const proLinks = [
    {
      icon: <IoLogoGithub />,
      url: "https://github.com/MohamedBechirMejri/",
    },
    {
      icon: <IoLogoLinkedin />,
      url: "https://www.linkedin.com/in/mohamed-bechir-mejri-b03b3720a/",
    },
  ];

  return (
    <div>
      <div className="fixed flex flex-col gap-2 text-xl bottom-0 left-3 text-zinc-600 after:content-[''] after:w-[1px] after:h-16 after:bg-zinc-600 items-center after:mt-6 ">
        {proLinks.map(link => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:scale-[1.5]"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <div className="fixed flex flex-col gap-2 text-xl bottom-0 right-3 text-zinc-600 after:content-[''] after:w-[1px] after:h-16 after:bg-zinc-600 items-center after:mt-6 ">
        {casualLinks.map(link => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:scale-[1.5]"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
