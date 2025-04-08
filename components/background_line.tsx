interface SwirlingBackgroundProps {
  color?: string;
  width?: string;
  height?: string;
  className?: string;
}

export default function SwirlingBackground({
  color = "#677b4c",
  width = "100%",
  height = "100%",
  className = "",
}: SwirlingBackgroundProps) {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 500 1000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M300,0 C250,100 200,200 250,300 C300,400 350,500 300,600 C250,700 200,800 250,900 C275,950 300,1000 300,1000 L1000,1000 L1000,0 Z"
          fill="none"
          stroke={color}
          strokeWidth="6"
        />
      </svg>
    </div>
  );
}
