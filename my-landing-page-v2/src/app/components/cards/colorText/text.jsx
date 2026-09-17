import OrangeText from "./orangeText";
import BlueText from "./blueText";

const arrData = [
  { 1: "strategy:", 2: "clear" },
  { 1: "design:", 2: "purposeful" },
  { 1: "code:", 2: "scalable" },
];
export default function Text({}) {
  return (
    <div className="w-full flex flex-col justify-center items-left text-md px-2 pb-2 lg:pl-15 lg:pt-10 md:py-5 md:px-10 text-base/8 tracking-wide">
      <p><span className="text-[#c084fc] pr-1">const</span> solution ={` {`}</p>
      {arrData.map((item, index) => {
        if (index != 2) {
          return (
            <span key={index} className="flex flex-row gap-1 pl-4">
              <span></span>
              <BlueText text={item[1]} /> <OrangeText text={item[2]} />,
            </span>
          );
        } else {
          return (
            <span key={index} className="flex flex-row gap-1 pl-4">
              <BlueText text={item[1]} /> <OrangeText text={item[2]} />
            </span>
          );
        }
      })}
      {`}`}
    </div>
  );
}
