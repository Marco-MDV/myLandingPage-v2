"use client";

import HeroMain from "./hero/heroMain";
import SectionOne from "./sections/sectionOne";
import SectionTwo from "./sections/sectionTwo";
import SectionThree from "./sections/sectionThree";
import SectionFour from "./sections/sectionFour";
import SectionFive from "./sections/sectionFive";
import { useEffect } from "react";

export default function MyMain() {
  
  useEffect(() => {
    const mdvLogo = `
    ███▄ ▄███▓  ██████▄   ██▒   █▓
    ▓██▒▀█▀ ██▒  ██▒  ██▒ ▓██░   █▒
    ▓██    ▓██░  ██░  ██▒  ▓██  █▒░
    ░██    ░██   ██░  ██▄   ▒██ █░ 
    ░██▒   ░██▒ ██████▀▒     ▒██▒  
    ░ ▒░   ░  ░ ░▓▒  ▄▒      ░ ▐░  
    ░  ░      ░ ░▒   ▒       ░ ░░  
          ░     ░ ░  ░        ░░  
                ░               ░  
    [ DESIGNED & DEVELOPED BY MDV - 2026 ]
    `;
    console.log(
      `%c${mdvLogo}`,
      "color: #00ff88; font-family: monospace; font-weight: bold;",
    );
  }, []);

  return (
    <main
      className="flex flex-col items-center justify-center text-white w-full "
      id="home"
    >
      <HeroMain />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </main>
  );
}