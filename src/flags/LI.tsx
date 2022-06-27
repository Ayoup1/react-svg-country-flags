import React from 'react';

const LI = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="21"
    height="15"
    viewBox="0 0 21 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_3_110"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="21"
      height="15"
    >
      <path
        d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_3_110)">
      <path
        d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
        fill="#D0091E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H21V7H0V0Z"
        fill="#002781"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 5H8V6H4V5Z"
        fill="#947F1E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.01 3.142C4.702 3.062 4.35 3 4 3C3 3 3 3.5 3 4C3 4.5 4 5 4 5H8C8 5 9 4.5 9 4C9 3.5 9 3 8 3C7.65 3 7.298 3.062 6.99 3.142C6.997 3.095 7 3.048 7 3C7 2.448 6.552 2 6 2C5.448 2 5 2.448 5 3C5 3.048 5.003 3.095 5.01 3.142Z"
        fill="#FFD923"
      />
      <path
        d="M19 0.5H2C1.17157 0.5 0.5 1.17157 0.5 2V13C0.5 13.8284 1.17157 14.5 2 14.5H19C19.8284 14.5 20.5 13.8284 20.5 13V2C20.5 1.17157 19.8284 0.5 19 0.5Z"
        stroke="black"
        strokeOpacity="0.1"
      />
    </g>
  </svg>
);

export default LI;
