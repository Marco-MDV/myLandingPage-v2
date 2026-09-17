export default function CustomButton({ classButton, classAnchor, data, text, svg , classSpecialAnchor=[]}) {
  return (
    <a href={data} className={`w-full md:w-fit ${classAnchor}`} target={classSpecialAnchor[0]} rel={classSpecialAnchor[1]}>
      <button className={`flex items-center gap-2 rounded-xl p-2 duration-300  justify-center w-full  ${classButton}`}>
        <p className="font-bold text-sm">{text}</p>
        {svg}
      </button>
    </a>
  );
}
