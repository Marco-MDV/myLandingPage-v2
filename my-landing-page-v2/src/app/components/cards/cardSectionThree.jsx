const myData = [
  {
    word: "A",
    upTitle: "DIGITAL PRESENCE",
    title: "Landing page per brand locali",
    description:
      "Identità, contatti e conversione raccolti in una presenza online essenziale e riconoscibile.",
    myClass: "bg-gradient-to-r from-[#000000] to-[#4f39f6]",
  },
  {
    word: "B",
    upTitle: "PRODUCT DEVELOPMENT",
    title: "Applicazioni web su misura",
    description:
      "Interfacce moderne e architetture pensate per evolvere insieme al prodotto.",
    myClass: "bg-gradient-to-r from-[#000000] from- to-orange-500",
  },
  {
    word: "C",
    upTitle: "OPERATIONS",
    title: "Processi più intelligenti",
    description:
      "Integrazioni e automazioni che trasformano operazioni manuali in flussi affidabili.",
    myClass: "bg-gradient-to-r from-[#000000] to-emerald-600",
  }
];

export default function CardSectionThree() {
  return (
    <>
      {myData.map((e, i) => (
        <div key={i} className={`text-zinc-400 ${e.myClass} rounded-2xl p-5 md:p-10 flex flex-wrap md:flex-nowrap md:flex-row gap-5 transition-all duration-500 transform hover:scale-90 opacity-85 opacity w-full justify-between `}>
          <div className="w-full flex justify-between md:justify-start lg:w-fit md:gap-10 lg:justify-start lg:gap-12 items-center">
            <h4 className="md:text-xl">{e.word}</h4>
            <svg
              className="w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#9898a0"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M18 21c1.232 0 2.231-1.151 2.231-2.571c0-2.248-.1-3.742 1.442-5.52c.436-.502.436-1.316 0-1.818c-1.542-1.777-1.442-3.272-1.442-5.52C20.231 4.151 19.232 3 18 3M6 21c-1.232 0-2.231-1.151-2.231-2.571c0-2.248.1-3.742-1.442-5.52c-.436-.502-.436-1.316 0-1.818C3.835 9.353 3.769 7.84 3.769 5.57C3.769 4.151 4.768 3 6 3"
              />
            </svg>
          </div>
          <div className="flex flex-wrap lg:flex-col stretch-text gap-3 md:gap-8 lg:w-1/2">
            <p className="text-sm">{e.upTitle}</p>
            <h3 className="leading-8 text-white text-4xl">{e.title}</h3>
            <p className="text-sm">{e.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
