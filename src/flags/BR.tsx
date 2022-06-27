import React from 'react';

const BR = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="21"
    height="15"
    viewBox="0 0 21 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_3_190"
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
    <g mask="url(#mask0_3_190)">
      <path
        d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
        fill="#009C34"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 2L18 7.5L10.5 13L3 7.5"
        fill="#F8E23D"
      />
      <path
        d="M10.5 11C12.433 11 14 9.433 14 7.5C14 5.567 12.433 4 10.5 4C8.567 4 7 5.567 7 7.5C7 9.433 8.567 11 10.5 11Z"
        fill="#002478"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 9V10H10V9H9ZM11 9V10H12V9H11Z"
        fill="#91A1C3"
      />
      <path d="M8 6C8 6 10.264 6.4 11.896 7.098L14 8" stroke="#C9D0E0" />
      <path
        d="M19 0.5H2C1.17157 0.5 0.5 1.17157 0.5 2V13C0.5 13.8284 1.17157 14.5 2 14.5H19C19.8284 14.5 20.5 13.8284 20.5 13V2C20.5 1.17157 19.8284 0.5 19 0.5Z"
        stroke="black"
        strokeOpacity="0.1"
      />
    </g>
  </svg>
);

export default BR;
