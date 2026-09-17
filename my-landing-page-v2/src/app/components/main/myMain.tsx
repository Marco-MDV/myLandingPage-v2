import HeroMain from "./hero/heroMain";
import SectionOne from "./sections/sectionOne"
import SectionTwo from "./sections/sectionTwo"
import SectionThree from "./sections/sectionThree"
import SectionFour from "./sections/sectionFour"
import SectionFive from "./sections/sectionFive"
export default function MyMain() {
  return (
    <main className="flex flex-col items-center justify-center text-white w-full " id="home">
      <HeroMain/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
    </main>
  )};
