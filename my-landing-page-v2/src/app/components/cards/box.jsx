export default function Box({text, svg, myClassDiv, myClassP, myLink}) {
  return (
    <div className={`${myClassDiv} flex flex-row items-center justify-center gap-2 text-gray-400 border-gray-400/20 rounded-xl p-2 bg-[#0a0a0dd1] border `}>
      {svg}
      {myLink?(
          <a className={`text-[#ffffff99] text-sm ${myClassP}`} href={myLink} target="_blank" rel="noopener noreferrer">{text}</a>
        ):(
          <p className={`text-[#ffffff99] text-sm ${myClassP}`}>{text}</p>
        )
      }
    </div>
  );
}
