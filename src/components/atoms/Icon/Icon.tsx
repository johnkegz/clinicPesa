import React from "react";

export type IconName = "arrow-left" | "close";

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
  stroke?: string;
  fill?: string;
  strokeWidth?: number;
}

const Icon: React.FC<IconProps> = ({
  name,
  className = "",
  size = 24,
  stroke = "currentColor",
  fill = "none",
  strokeWidth = 1.4,
}) => {
  const iconPaths: Partial<Record<IconName, string[]>> = {
    'arrow-left': ['M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z'],
    'close': ["M18 6L6 18", "M6 6l12 12"],
  };

  const paths = iconPaths[name];

  if (!paths) {
    return null;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths.map((path, index) => (
        <path key={index} d={path} stroke={stroke} fill={fill} />
      ))}
    </svg>
  );
};

export default Icon;
