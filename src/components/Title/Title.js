import React from "react";

const Title = ({ children, className }) => {
  return (
    <div
      className={`${
        className || ""
      } text-lg text-center md:mb-20 mb-10 font-bold`}
    >
      {children}
    </div>
  );
};

export default Title;
