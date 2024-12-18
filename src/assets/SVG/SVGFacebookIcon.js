import * as React from "react";

const SVGFacebookIcon = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className={`text-black-600 ${props.className}`}
    style={props.style}
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2H7" />
  </svg>
);
export default SVGFacebookIcon;
