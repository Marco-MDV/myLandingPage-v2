import CardSectionThree from "../../cards/cardSectionThree"


export default function SectionThree() {
  return (
    <section className="bg-white text-black w-full px-5 md:px-15 lg:px-20 xl:px-25 py-15 text-xs flex flex-wrap gap-10">
        <div className="flex flex-wrap w-full gap-5">
            <p className="text-gray-400" id="work">03 / SELECTED WORK</p>
            <div className="flex flex-row w-full justify-between flex-wrap md:flex-nowrap gap-5 md:gap-0">
              <h3 className="text-4xl">Progetti costruiti con intenzione.</h3>
              <a href="https://github.com/Marco-MDV?tab=repositories" target="_blank" rel="noopener noreferrer" className="border-b pb-1 justify-center gap-2 items-end flex font-bold">
                  <p>Tutti i repository</p>
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
              </a>
            </div>
        </div>
        <div className="flex flex-wrap gap-3">
        <CardSectionThree/>
      </div>
    </section>
  );
}
