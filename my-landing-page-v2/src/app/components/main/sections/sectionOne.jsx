import SectionNumber from "../../text/sectionNumber"

const arrData = [{data:"2021", text:"inizio del percorso"}, {data:"3", text:"Aree di competenza"}, {data:"\u221E", text:"Curiosità applicata"}]

export default function SectionOne() {
  return (
    <section className="flex flex-column lg:flex-row flex-wrap gap-8 bg-white w-full px-5 md:px-15 lg:px-20 xl:px-25" id="sectionOne">
        <SectionNumber text="01 / profilo"/>
        <div className="flex flex-col flex-wrap lg:flex-row lg:flex-nowrap lg:justify-between gap-9 w-full">
            <h2 className="text-black text-4xl">Strategia tecnica. <br /> Sensibilità per il brand.</h2>
            <div className="flex flex-column flex-wrap justify-content-center items-center gap-14 lg:w-1/2">
                <div className="text-sm/7">
                    <h3 className="text-black text-2xl">Non mi limito a scrivere codice. Traduco bisogni complessi in esperienze semplici, chiare e curate in ogni dettaglio.</h3>
                    <p className="text-[#756f67]">Dal 2021 collaboro con professionisti, realtà tech e startup, unendo sviluppo software, cloud e sicurezza informatica. Ogni progetto parte dall’ascolto e arriva a una soluzione concreta, misurabile e pronta a evolvere.</p>
                </div>
                <div className="flex-column flex-wrap w-full">
                    <div className="border w-full border-[#d6d0c7] "></div>

                    <div className="flex flex-row w-full justify-between items-inline pt-4 pb-20 ">
                        {
                            arrData.map((element, i)=>{
                                return(
                                    <div className="text-sm/6" key={i}>
                                        <h3 className="text-black text-2xl font-bold">
                                            {`${element.data}`}
                                        </h3>
                                        <p className="text-[#77716b] text-[9px] font-light">
                                            {element.text}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
