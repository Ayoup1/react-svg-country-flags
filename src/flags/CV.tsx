import React from 'react';

const CV = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="21"
    height="15"
    viewBox="0 0 21 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_3_171"
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
    <g mask="url(#mask0_3_171)">
      <path
        d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
        fill="#003495"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8H21V9H0V8Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 9H21V10H0V9Z"
        fill="#D11C1F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 10H21V11H0V10Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 7H6V8H5V7ZM7 6H8V7H7V6ZM9 7H10V8H9V7ZM10 9H11V10H10V9ZM4 9H5V10H4V9ZM9 11H10V12H9V11ZM7 12H8V13H7V12ZM5 11H6V12H5V11Z"
        fill="#F8D300"
      />
      <path
        d="M19 0.5H2C1.17157 0.5 0.5 1.17157 0.5 2V13C0.5 13.8284 1.17157 14.5 2 14.5H19C19.8284 14.5 20.5 13.8284 20.5 13V2C20.5 1.17157 19.8284 0.5 19 0.5Z"
        stroke="black"
        strokeOpacity="0.1"
      />
    </g>
  </svg>
);

export default CV;
