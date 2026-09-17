import Box from "../../cards/box";

export default function SectionFive() {
  return (
    <section className="relative w-full flex flex-column justify-center items-center just gap-8 lg:gap-15 flex-wrap px-5 py-10 md:py-20 lg:py-35" id="sectionFive">
      <div className="-z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-custom-radial rounded-full opacity-50 "></div>
      <div className="w-full flex flex-col justify-center items-start gap-5">
        <p className="text-[9px] text-gray-400">04 / CONTATTI</p>
        <h3 className="text-4xl">
          Hai un idea? <br />{" "}
          <span className="text-purple-600">Rendiamola concreta</span>
        </h3>
        <p className="text-xs text-gray-400">
          Raccontami il progetto, l’obiettivo o anche solo il problema da
          risolvere.
        </p>
        <a
          href="mailto:marcodevincentiis.yt@gmail.com"
          className="text-xs flex justify-center items-end border-b border-gray-400 w-fit"
        >
          <p>marcodevincentiis.yt@gmail.com</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M7 7h10m0 0v10m0-10L7 17"
            />
          </svg>
        </a>
      </div>
      <div className=" w-full flex flex-wrap justify-left items-center gap-3">
        <Box
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M7 7h10m0 0v10m0-10L7 17"
              />
            </svg>
          }
          text="Linkedin"
          myLink="https://www.linkedin.com/in/marco-de-vincentiis-98299a217/"
        />
        <Box
          svg={
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M18 21c1.232 0 2.231-1.151 2.231-2.571c0-2.248-.1-3.742 1.442-5.52c.436-.502.436-1.316 0-1.818c-1.542-1.777-1.442-3.272-1.442-5.52C20.231 4.151 19.232 3 18 3M6 21c-1.232 0-2.231-1.151-2.231-2.571c0-2.248.1-3.742-1.442-5.52c-.436-.502-.436-1.316 0-1.818C3.835 9.353 3.769 7.84 3.769 5.57C3.769 4.151 4.768 3 6 3"
              />
            </svg>
          }
          text="GitHub"
          myLink="https://github.com/Marco-MDV"
        />
        <Box
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 16 16"
            >
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M14.95 3.684L8.637 8.912a1 1 0 0 1-1.276 0l-6.31-5.228A.999.999 0 0 0 1 4v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a.999.999 0 0 0-.05-.316M2 2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m-.21 1l5.576 4.603a1 1 0 0 0 1.27.003L14.268 3z"
              />
            </svg>
          }
          text="Email"
          myLink="mailto:marcodevincentiis.yt@gmail.com"
        />
      </div>
    </section>
  );
}
