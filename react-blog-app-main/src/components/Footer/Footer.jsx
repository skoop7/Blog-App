import React from "react";
import { Github, LinkedinIcon, Twitter, Instagram } from "lucide-react";
import { Container } from "../index";
import SocialLinkButton from "../SocialLinkButton";

const Footer = () => {
  const navItems = [
    {
      icon: Github,
      url: "https://github.com/skoop7",
    },
    {
      icon: LinkedinIcon,
      url: "https://www.linkedin.com/in/saurabh-kobarne",
    },
    {
      icon: Twitter,
      url: "https://x.com/SKobarne",
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/skoop7_gg",
    },
  ];

  return (
    <footer className="py-4">
      <Container
        className={
          "flex gap-2 flex-col sm:flex-row sm:gap-6 justify-center items-center"
        }
      >
        <ul className="flex flex-wrap justify-center items-center gap-6">
          <li className="text-2xl font-medium">skoop7</li>
          <li className="text-2xl font-medium">/</li>
          {navItems.map((item, index) => (
            <li key={index} className="flex">
              <SocialLinkButton url={item.url}>
                <item.icon />
              </SocialLinkButton>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
