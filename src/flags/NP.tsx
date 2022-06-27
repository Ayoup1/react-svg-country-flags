import React from 'react';

const NP = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="13"
    height="15"
    viewBox="0 0 13 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_3_78)">
      <mask
        id="mask0_3_78"
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
      <g mask="url(#mask0_3_78)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0L13 8H6L13 15H0V0Z"
          fill="#003495"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 2L9 7H3L10 14H1.998C1.448 14 1 13.544 1 12.998V2Z"
          fill="#DF0A37"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.915 5C4.97 5.078 5 5.162 5 5.25C5 5.664 4.328 6 3.5 6C2.672 6 2 5.664 2 5.25C2 5.162 2.03 5.078 2.085 5C2.291 5.146 2.847 5.25 3.5 5.25C4.153 5.25 4.71 5.146 4.915 5Z"
          fill="white"
        />
        <path
          d="M3.5 13C4.32843 13 5 12.3284 5 11.5C5 10.6716 4.32843 10 3.5 10C2.67157 10 2 10.6716 2 11.5C2 12.3284 2.67157 13 3.5 13Z"
          fill="white"
        />
        <path
          d="M1.762 1.303C1.065 0.860001 0.5 1.175 0.5 1.998V13.002C0.5 13.829 1.168 14.5 2.003 14.5H12L5 7.5H11.5L1.762 1.303Z"
          stroke="black"
          strokeOpacity="0.1"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_3_78">
        <rect width="13" height="15" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default NP;
