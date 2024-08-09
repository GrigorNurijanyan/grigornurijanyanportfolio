import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={`md:p-10 w-full md:container p-5 mx-auto  ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default Container;
