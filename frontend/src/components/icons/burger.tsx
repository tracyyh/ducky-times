import React from "react";

interface IIconProps {
  className?: string;
}

export default function Burger({ className }: IIconProps) {
  return (
    <div className={className}>
      <svg
        width="22"
        height="19"
        viewBox="0 0 22 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
  <rect width="22" height="3" fill="#055793"/>
<rect y="8" width="22" height="3" fill="#055793"/>
<rect y="16" width="22" height="3" fill="#055793"/>
      </svg>
    </div>
  );
}
