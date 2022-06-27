import React from 'react';

const EC = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="21"
    height="15"
    viewBox="0 0 21 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_3_161"
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
    <g mask="url(#mask0_3_161)">
      <path
        d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
        fill="#004BA5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 11H21V15H0V11Z"
        fill="#F01616"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H21V8H0V0Z"
        fill="#FFDF00"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 4H9L10.5 5L12 4H15L12 5L11 6H10L9 5L6 4Z"
        fill="#3D2620"
      />
      <path
        d="M10.5 10C11.3284 10 12 9.10457 12 8C12 6.89543 11.3284 6 10.5 6C9.67157 6 9 6.89543 9 8C9 9.10457 9.67157 10 10.5 10Z"
        fill="#07A7D3"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 7V9L10 10H11L13 9V7L14 9L13 10L11 11H10L8 10L7 9L8 7Z"
        fill="#FFDF00"
      />
      <path
        d="M19 0.5H2C1.17157 0.5 0.5 1.17157 0.5 2V13C0.5 13.8284 1.17157 14.5 2 14.5H19C19.8284 14.5 20.5 13.8284 20.5 13V2C20.5 1.17157 19.8284 0.5 19 0.5Z"
        stroke="black"
        strokeOpacity="0.1"
      />
    </g>
  </svg>
);

export default EC;
