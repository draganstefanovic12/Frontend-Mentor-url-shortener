import { useState } from "react";

type SvgProps = {
  fill: string;
  width?: number;
  height?: number;
  className?: string;
};

//Footer svgs that change color on hover
export const Svg = ({ fill, width, height, className }: SvgProps) => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(true);
  };

  const handleNoHover = () => {
    setHover(false);
  };

  const hoverStyle = hover ? "#2acfcf" : "#FFF";
  return (
    <svg
      onMouseEnter={handleHover}
      onMouseLeave={handleNoHover}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width ? width : "24"}
      height={height ? height : "24"}
    >
      <path fill={hoverStyle} d={fill} />
    </svg>
  );
};
