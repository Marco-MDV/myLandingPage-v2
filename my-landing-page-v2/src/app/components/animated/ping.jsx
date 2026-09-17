export default function Ping() {
  return (
    <div className="relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 animate-ping bg-green-500 opacity-50 rounded-full"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 animate-ping bg-green-500 opacity-75 rounded-full"></div>
    </div>
  );
}
