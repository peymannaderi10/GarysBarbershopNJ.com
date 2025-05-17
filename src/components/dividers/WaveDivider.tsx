import React from "react";

interface WaveDividerProps {
  topColor?: string;
  bottomColor?: string;
  className?: string;
  id?: string;
}

const WaveDivider: React.FC<WaveDividerProps> = ({ 
  topColor = "white", 
  bottomColor = "#F7F7F7", // barber-light
  className = "",
  id
}) => {
  return (
    <div 
      id={id}
      className={`relative w-full overflow-hidden ${className}`} 
      role="separator"
      aria-hidden="true"
    >
      <svg
        className="absolute bottom-0 w-full h-[50px] md:h-[70px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ 
          display: 'block',
          width: '100%',
        }}
      >
        <defs>
          <linearGradient id={`wave-gradient-${id || 'default'}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={topColor} />
            <stop offset="100%" stopColor={bottomColor} />
          </linearGradient>
        </defs>
        <path
          d="M0,0 C240,95 480,120 720,120 C960,120 1200,95 1440,0 L1440,120 L0,120 Z"
          fill={`url(#wave-gradient-${id || 'default'})`}
        />
      </svg>
    </div>
  );
};

export default WaveDivider; 