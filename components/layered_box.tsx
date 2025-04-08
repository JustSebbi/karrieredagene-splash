import React from "react";

interface LayeredBoxProps {
  children: React.ReactNode;
  bgColor?: string; // e.g. 'bg-green-300'
  textColor?: string; // e.g. 'text-black'
  shadowColor?: string; // e.g. 'bg-gray-800'
  className?: string; // extra styling if needed
}

const LayeredBox: React.FC<LayeredBoxProps> = ({
  children,
  bgColor = "bg-green-300",
  textColor = "text-black",
  shadowColor = "bg-gray-800",
  className = "",
}) => {
  return (
    <div className="relative inline-block">
      {/* Shadow layer */}
      <div
        className={`absolute left-1 top-1 ${shadowColor} w-full h-full rounded`}
      />

      {/* Foreground layer */}
      <div
        className={`relative px-10 py-5 border-2 rounded font-bold ${bgColor} ${textColor} ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default LayeredBox;
