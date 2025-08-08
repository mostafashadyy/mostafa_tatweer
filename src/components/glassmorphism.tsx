import React from "react";

interface glassProps {
  width: number;
  height: number;
  children: React.ReactNode;
  className?: string;
  outerRadius?: string;
  innerRadius?: string;
  opacityStart?: number;
  opacityMiddle?: number;
  opacityEnd?: number;
}

const glass: React.FC<glassProps> = ({
  width,
  height,
  children,
  className = "",
  outerRadius = "24px",
  innerRadius = "22px",
  opacityStart = 0.8,
  opacityMiddle = 0,
  opacityEnd = 0.8,
}) => {
  const gradient = `linear-gradient(-61deg,rgba(255,255,255,${opacityStart}) 0%,rgba(255,255,255,${opacityMiddle}) 37%,rgba(255,255,255,${opacityMiddle}) 77%,rgba(255,255,255,${opacityEnd}) 100%)`;

  return (
    <div
      className={`relative rounded-[24px] p-[2px] shadow-[0_4px_24px_-1px_rgba(0,0,0,0.15)] ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: outerRadius,
        background: gradient,
      }}
    >
      <div
        className="w-full h-full bg-[rgba(255,255,255,0.1)] backdrop-blur-[40px]"
        style={{ borderRadius: innerRadius }}
      >
        {children}
      </div>
    </div>
  );
};

export default glass;
