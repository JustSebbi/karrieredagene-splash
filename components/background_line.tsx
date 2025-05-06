interface SwirlingBackgroundProps {
  color?: string;
  width?: number;
  className?: string;
}

export default function SwirlingBackground({
  color = "#677b4c",
  width = 6,
  className = "",
}: SwirlingBackgroundProps) {
  return (
    <div
      className={`fixed inset-y-0 left-[2%] lg:left-1/5 -z-10 h-full ${className}`}
    >
      <svg
        width="100"
        height="100%"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M50,0 C30,100 70,200 40,300 C20,400 60,500 40,600 C20,700 60,800 40,900 C30,950 50,1000 50,1000"
          fill="none"
          stroke={color}
          strokeWidth={width}
          strokeLinecap="round"
          pathLength="1"
          style={{
            strokeDasharray: "1",
            strokeDashoffset: "0",
          }}
        />
      </svg>
    </div>
  );
}
