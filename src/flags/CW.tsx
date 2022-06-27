import React from 'react';

const CW = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="21"
    height="15"
    viewBox="0 0 21 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_3_170"
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
    <g mask="url(#mask0_3_170)">
      <path
        d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
        fill="#002B7F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 5H4.49539C4.21575 5 4 5.22386 4 5.5C4 5.76807 4.22179 6 4.49539 6H5V6.50461C5 6.78425 5.22386 7 5.5 7C5.76807 7 6 6.77821 6 6.50461V6H6.50461C6.78425 6 7 5.77614 7 5.5C7 5.23193 6.77821 5 6.50461 5H6V4.49539C6 4.21575 5.77614 4 5.5 4C5.23193 4 5 4.22179 5 4.49539V5ZM3 3H4V4H3V3Z"
        fill="white"
      />
      <path d="M21 9H0V11H21V9Z" fill="#F9E814" />
      <path
        d="M19 0.5H2C1.17157 0.5 0.5 1.17157 0.5 2V13C0.5 13.8284 1.17157 14.5 2 14.5H19C19.8284 14.5 20.5 13.8284 20.5 13V2C20.5 1.17157 19.8284 0.5 19 0.5Z"
        stroke="black"
        strokeOpacity="0.1"
      />
    </g>
  </svg>
);

export default CW;
