import React from "react";

const Title = ({ children, className }) => {
  return (
    <div className={`${className || ""} text-lg text-center mb-20 font-bold`}>
      {children}
    </div>
  );
};

export default Title;
