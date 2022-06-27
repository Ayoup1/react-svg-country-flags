import React from 'react';

const VE = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="21"
    height="15"
    viewBox="0 0 21 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_3_14"
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
    <g mask="url(#mask0_3_14)">
      <path
        d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
        fill="#00207F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 8H7V9H6V8ZM8 7H9V8H8V7ZM12 7H13V8H12V7ZM14 8H15V9H14V8ZM10 6H11V7H10V6Z"
        fill="#BCC9F0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 10H21V15H0V10Z"
        fill="#D10D24"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H21V5H0V0Z"
        fill="#FFCD00"
      />
      <path
        d="M19 0.5H2C1.17157 0.5 0.5 1.17157 0.5 2V13C0.5 13.8284 1.17157 14.5 2 14.5H19C19.8284 14.5 20.5 13.8284 20.5 13V2C20.5 1.17157 19.8284 0.5 19 0.5Z"
        stroke="black"
        strokeOpacity="0.1"
      />
    </g>
  </svg>
);

export default VE;