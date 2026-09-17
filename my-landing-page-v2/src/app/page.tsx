const mdvLogo = `
    ███▄ ▄███▓  ██████▄   ██▒   █▓
    ▓██▒▀█▀ ██▒  ██▒  ██▒ ▓██░   █▒
    ▓██    ▓██░  ██░  ██▒  ▓██  █▒░
    ░██    ░██   ██░  ██▄   ▒██ █░ 
    ░██▒   ░██▒ ██████▀▒     ▒██▒  
    ░ ▒░   ░  ░ ░▓▒  ▄▒      ░ ▐░  
    ░  ░      ░ ░▒   ▒       ░ ░░  
          ░     ░ ░   ░        ░░  
                ░               ░  
    [ DESIGNED & DEVELOPED BY MDV - 2026 ]
`;
console.log(
  `%c${mdvLogo}`,
  "color: #00ff88; font-family: monospace; font-weight: bold;",
);

import MyNavbar from "./components/navbar/myNavbar";
import MyMain from "./components/main/myMain";
import MdvLogo from "./components/text/mdvLogo";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <>
      <header className="flex flex-col items-center justify-center text-white w-full  static">
        <MyNavbar />
      </header>
      <MyMain />
      <footer className="text-[#71717a] text-sm flex flex-row flex-wrap justify-between items-center gap-10 p-5">
        <Analytics/>
        <SpeedInsights/>
        <MdvLogo myClassMdv="" />
        <p>© 2026 Marco De Vincentiis.</p>
        <button className="flex flex-row gap-2 justify-content-center items-center hover:text-[#a78bfa] duration-300 ">
          <a href="#home">
            torna su
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400 group-hover:text-[#8b5cf6] transition-colors duration-300"
          >
            <path d="m18 16 4-4-4-4" />
            <path d="m6 8-4 4 4 4" />
            <path d="m14.5 4-5 16" />
          </svg>
        </button>
      </footer>
    </>
  );
}
