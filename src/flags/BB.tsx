import React from 'react';

const BB = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="21"
    height="15"
    viewBox="0 0 21 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_3_200"
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
    <g mask="url(#mask0_3_200)">
      <path
        d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
        fill="#FFC800"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H7V15H0V0ZM14 0H21V15H14V0Z"
        fill="#002281"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 10H11V11H10V10ZM12 8H13V9H12V8ZM8 8H9V9H8V8Z"
        fill="#7F6300"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 8V4H10V8H9V9H10V10H11V9H12V8H11ZM12 5H13V8H12V5ZM8 5H9V8H8V5Z"
        fill="black"
      />
      <path
        d="M19 0.5H2C1.17157 0.5 0.5 1.17157 0.5 2V13C0.5 13.8284 1.17157 14.5 2 14.5H19C19.8284 14.5 20.5 13.8284 20.5 13V2C20.5 1.17157 19.8284 0.5 19 0.5Z"
        stroke="black"
        strokeOpacity="0.1"
      />
    </g>
  </svg>
);

export default BB;
