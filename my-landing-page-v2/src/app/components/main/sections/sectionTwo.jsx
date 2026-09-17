import SectionNumber from "../../text/sectionNumber"
import CardSectionTwo from "../../cards/cardSectionTwo"


export default function SectionTwo() {
  return (
    <section className="flex flex-column md:flex-row flex-wrap gap-8 w-full px-5 md:px-15 lg:px-20 xl:px-25 pb-15">
        <div className="flex flex-col flex-wrap w-full gap-15">
          <SectionNumber text="02 / COSA FACCIO"/>
          <h2 className="text-white text text-4xl">
              Competenze che diventano valore.
          </h2>
        </div>
        <div className="flex flex-row flex-wrap lg:flex-nowrap gap-8 w-full">
          <CardSectionTwo/>
        </div>
    </section>
  )
}
