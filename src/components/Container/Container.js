import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`p-10 w-full md:container mx-auto  ${className || ""}`}>
      {children}
    </div>
  );
};

export default Container;
