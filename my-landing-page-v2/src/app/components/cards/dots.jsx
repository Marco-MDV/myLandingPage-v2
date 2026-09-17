export default function Dots({arrColors}) {
  return (
    <div>
      {arrColors.map((color, index) => (
        <span
          key={index}
          className={`w-2 h-2 rounded-full inline-block mr-1`}
          style={{ backgroundColor: color }}
        ></span>
      ))}
    </div>
  );
}
