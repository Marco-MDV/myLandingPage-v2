import CustomButton from "../../buttons/customButton";
import ArrowBottomRight from "../../arrows/arrowBottomRight";
import Paragraph from "../../text/paragraph";
import DivCard from "../../cards/divCard";
import Ping from "../../animated/ping";

export default function HeroMain() {
  return (
    <section className="flex flex-col items-left justify-center w-full lg:p-20 gap-8 px-5 md:px-15 lg:px-20 xl:px-25 bg-[#09090b] bg-spotlight ">
      <div className="w-full flex flex-col flex-wrap lg:flex-row gap-5 lg:flex-nowrap pt-20">
        <div className="w-full flex flex-col flex-wrap gap-10 ">
          <div className="flex w-fit flex-row items-center justify-start gap-6 text-xs border border-white/10 bg-neutral-950/60 backdrop-blur-md shadow-lg shadow-black/20 rounded-3xl py-3 px-5">
            <Ping />
            <p>DISPONIBILE PER NUOVI PROGETTI</p>
          </div>
          <Paragraph
            text={"Consulente informatico · Web developer"}
            myClass={"uppercase font-bold"}
          />
          <h1 className="text-5xl lg:text-6xl font-bold text-left">
            Trasformo idee in{" "}
            <span className="bg-linear-100 from-[#bba6ff] from-10% via-[#7c3aed] via-55% to-[#ff7b48] bg-clip-text text-transparent">
              {" "}
              soluzioni digitali{" "}
            </span>{" "}
            che funzionano davvero.
          </h1>
          <Paragraph
            text="Sono Marco De Vincentiis. Progetto siti web, applicazioni e sistemi digitali che aiutano brand e professionisti a comunicare meglio, lavorare più velocemente e crescere con basi solide."
            myClass={"text-xl "}
          />
          <div className="flex flex-col flex-wrap items-center justify-center gap-4 w-full">
            <div className="flex flex-row flex-wrap items-center justify-center md:justify-start gap-4 w-full">
              <CustomButton
                data={"#aziende"}
                text={"Esplora il mio lavoro"}
                svg={<ArrowBottomRight />}
                classButton={
                  "bg-[#8b5cf6] hover:bg-[#7c3aed] font-bold py-2 px-4 rounded-full flex items-center gap-2 shadow-md shadow-[#7c3aed40]"
                }
                classAnchor={"w-full"}
              />
              <CustomButton
                data={"mailto:marcodevincentiis.yt@gmail.com"}
                text={"Scrivimi"}
                classButton={
                  "bg-[#ffffff0a] hover:bg-[#ffffff1a] border border-[#ffffff29] font-bold py-2 px-4 rounded-full flex items-center gap-2"
                }
                classAnchor={"w-full"}
                classSpecialAnchor={["_blank","noopener noreferrer"]}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full md:px-38 md:py-40 lg:px-0 xl:justify-center">
          <DivCard />
        </div>
      </div>
      <div className="w-full flex flex-column items-center justify-start gap-4 pt-4 pb-24">
        <p className=" text-[9px] text-[#6d6d75]">SCROLL TO DISCOVER</p>
        <div className="w-18 h-[1px] bg-[#6d6d75]"></div>
      </div>
    </section>
  );
}
