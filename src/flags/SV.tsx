import React from 'react';

const SV = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="21"
    height="15"
    viewBox="0 0 21 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_3_36"
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
    <g mask="url(#mask0_3_36)">
      <path
        d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 10H21V15H0V10ZM0 0H21V5H0V0Z"
        fill="#0643B2"
      />
      <path
        d="M10.5 9C11.3284 9 12 8.32843 12 7.5C12 6.67157 11.3284 6 10.5 6C9.67157 6 9 6.67157 9 7.5C9 8.32843 9.67157 9 10.5 9Z"
        fill="#0017A2"
      />
      <path
        d="M10.5 8C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7C10.2239 7 10 7.22386 10 7.5C10 7.77614 10.2239 8 10.5 8Z"
        fill="#FFCD00"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 7L9 8L10.5 9L12 8L13 7L12 9H9L8 7Z"
        fill="#22551E"
      />
      <path
        d="M19 0.5H2C1.17157 0.5 0.5 1.17157 0.5 2V13C0.5 13.8284 1.17157 14.5 2 14.5H19C19.8284 14.5 20.5 13.8284 20.5 13V2C20.5 1.17157 19.8284 0.5 19 0.5Z"
        stroke="black"
        strokeOpacity="0.1"
      />
    </g>
  </svg>
);

export default SV;
