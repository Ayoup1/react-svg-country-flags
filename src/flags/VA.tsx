import React from 'react';

const VA = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="15"
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_3_4)">
      <mask
        id="mask0_3_4"
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
      <g mask="url(#mask0_3_4)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H8V15H0V0Z"
          fill="#FFE200"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 0H14C15.1046 0 16 0.895431 16 2V13C16 14.1046 15.1046 15 14 15H8V0Z"
          fill="white"
        />
        <path d="M10 6L13 9" stroke="#CCCCCC" />
        <path d="M11.5 7.5V10" stroke="#ED9069" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 6H13L11.5 4L10 6Z"
          fill="#CF9E00"
        />
        <path d="M13 6L10 9" stroke="#CF9E00" />
        <path
          d="M14 0.5H2C1.17157 0.5 0.5 1.17157 0.5 2V13C0.5 13.8284 1.17157 14.5 2 14.5H14C14.8284 14.5 15.5 13.8284 15.5 13V2C15.5 1.17157 14.8284 0.5 14 0.5Z"
          stroke="black"
          strokeOpacity="0.1"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_3_4">
        <rect width="16" height="15" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default VA;
