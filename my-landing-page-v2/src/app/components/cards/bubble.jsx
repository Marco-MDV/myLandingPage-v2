export default function Bubbles({svg, text, myClassDiv, myClassP}) {
  return (
    <div className={`absolute h-15 w-15 p-4 flex flex-row items-center justify-center rounded-full border border-[#ffffff29] bg-[#ffffff0a] hover:bg-[#ffffff1a] bg-[linear-gradient(145deg,#211c2eed,#0e0e12f0)] animate-bounce [animation-duration:3s] ${myClassDiv}`}>
      {svg}
      <p className={myClassP}>{text}</p>
    </div>
  )
}
