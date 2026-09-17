export default function Paragraph({text, myClass}) {
  return (
    <p className={`lg:text-lg text-gray-500 text-left tracking-wide text-sm/7 ${myClass}`}>
      {text}
    </p>
  );
}
