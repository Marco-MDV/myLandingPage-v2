const data = [
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#8b5cf6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-code-xml"
        aria-hidden="true"
      >
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </svg>
    ),
    title: "Siti web & Web App",
    description:
      "Esperienze digitali veloci, responsive e costruite intorno agli obiettivi reali del brand.",
    skills: ["React", "Next.js", "Tailwind"],
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#8b5cf6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-cloud"
        aria-hidden="true"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
    title: "Consulenza IT & Cloud",
    description:
      "Supporto tecnico e strategico per rendere infrastrutture e processi più solidi e scalabili.",
    skills: ["Cloud", "Architecture", "Support"],
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#8b5cf6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-workflow"
        aria-hidden="true"
      >
        <rect width="8" height="8" x="3" y="3" rx="2" />
        <path d="M7 11v4a2 2 0 0 0 2 2h4" />
        <rect width="8" height="8" x="13" y="13" rx="2" />
      </svg>
    ),
    title: "Automazione",
    description:
      "Workflow, API e strumenti su misura per eliminare attività ripetitive e liberare tempo.",
    skills: ["API", "Integration", "Efficiency"],
  },
];

export default function CardSectionTwo() {
  return (
    <>
      {data.map((element, i) => {
        return (
          <div key={i} className="group border rounded-xl p-6 border-[#ffffff1f] bg-[#141419] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:bg-radial-[at_100%_0%] hover:from-[#8b5cf6]/25 hover:via-[#8b5cf6]/5 hover:to-[#141419] hover:to-75% flex flex-wrap"> 
            <div className="w-full flex flex-row justify-between items-center pb-20">
              <p className="text-[#85858f] text-xs">0{i + 1}</p>
              {element.svg}
            </div>
            <div className=" flex flex-col flex-wrap gap-5 pb-3">
              <h3 className=" text-4xl">{element.title}</h3>
              <p className=" text-[#a1a1aa]">{element.description}</p>
            </div>
            <div className="flex flex-column w-full justify-between items-center">
              <div className="flex gap-2">
                {element.skills.map((skill, i) => {
                  return <p key={i} className="border p-2 text-xs rounded-3xl border-[#ffffff1f] text-[#a1a1aa]">{skill}</p>; 
                })}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide text-[#57575e] group-hover:text-[#8b5cf6] transition-colors duration-300 lucide-arrow-up-right card-arrow"
                aria-hidden="true"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </div>
          </div>
        );
      })}
    </>
  );
}

