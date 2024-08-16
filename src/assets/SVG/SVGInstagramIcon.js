import * as React from "react";
const SVGInstagramIcon = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="text-black-600"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <rect width={16} height={16} x={4} y={4} rx={4} />
    <circle cx={12} cy={12} r={3} />
    <path d="M16.5 7.5v.001" />
  </svg>
);
export default SVGInstagramIcon;