import MdvLogo from "../text/mdvLogo"

export default function MyNavbar() {
  return (
    <nav className="z-20 fixed left-1/2  top-2 -translate-x-1/2 border border-white/10 bg-neutral-950/60 backdrop-blur-md shadow-lg shadow-black/20 flex items-center justify-between rounded-3xl p-4 w-[calc(100%-2rem)] ">
      <MdvLogo myClassMdv="" />
      <div className="hidden lg:flex items-center  lg:visible">
        <ul className="flex items-center gap-4 text-gray-400 ">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#sectionOne">About</a>
          </li>
          <li>
            <a href="#sectionFive">Contact</a>
          </li>
        </ul>
      </div>
      <a href="mailto:marcodevincentiis.yt@gmail.com" target="_blank" rel="noopener noreferrer" >
        <button className="flex items-center gap-2 text-black  bg-white p-2 rounded-xl hover:bg-gray-200 transition-colors duration-300">
          <p className="font-bold text-sm">
            Parliamone
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M7 7h10m0 0v10m0-10L7 17"
            />
          </svg>
        </button>
      </a>
    </nav>
  );
}
