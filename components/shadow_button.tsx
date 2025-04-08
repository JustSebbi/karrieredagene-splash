"use client";
export default function ShadowButton() {
  return (
    <div className="relative inline-block">
      {/* Shadow layer */}
      <div className="absolute left-1 top-1 bg-gray-800 w-full h-full rounded" />

      {/* Main button */}
      <button className="relative px-10 py-3 bg-green-300 text-black font-bold border-2 hover:bg-green-400">
        Kontakt oss
      </button>
    </div>
  );
}
