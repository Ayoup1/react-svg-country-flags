import React from 'react';

function Fallback() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" fill="none">
      <mask
        id="a"
        style={{ maskType: 'alpha' }}
        width="21"
        height="15"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          d="M19 0H2a2 2 0 00-2 2v11a2 2 0 002 2h17a2 2 0 002-2V2a2 2 0 00-2-2z"
        ></path>
      </mask>
      <g mask="url(#a)">
        <path
          fill="#fff"
          d="M19 0H2a2 2 0 00-2 2v11a2 2 0 002 2h17a2 2 0 002-2V2a2 2 0 00-2-2z"
        ></path>
        <path
          stroke="#000"
          strokeOpacity="0.1"
          d="M19 .5H2A1.5 1.5 0 00.5 2v11A1.5 1.5 0 002 14.5h17a1.5 1.5 0 001.5-1.5V2A1.5 1.5 0 0019 .5z"
        ></path>
      </g>
    </svg>
  );
}

export default Fallback;
