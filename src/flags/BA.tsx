import React from 'react';

const BA = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="21"
    height="15"
    viewBox="0 0 21 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_3_201"
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
    <g mask="url(#mask0_3_201)">
      <path
        d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
        fill="#FFCC00"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0L21 14L20.877 15.1L0 15V0Z"
        fill="#001C98"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 3H2V4H1V3ZM4 5H5V6H4V5ZM7 7H8V8H7V7ZM10 9H11V10H10V9ZM13 11H14V12H13V11ZM16 13H17V14H16V13Z"
        fill="white"
      />
      <path
        d="M19 0.5H2C1.17157 0.5 0.5 1.17157 0.5 2V13C0.5 13.8284 1.17157 14.5 2 14.5H19C19.8284 14.5 20.5 13.8284 20.5 13V2C20.5 1.17157 19.8284 0.5 19 0.5Z"
        stroke="black"
        strokeOpacity="0.1"
      />
    </g>
  </svg>
);

export default BA;
