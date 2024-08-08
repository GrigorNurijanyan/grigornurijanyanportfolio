import React from "react";

const Footer = () => {
  return (
    <div className="p-5 bg-blue-700 w-full text-center text-white">
      &copy; {new Date().getFullYear()} Grigor Nurijanyan
    </div>
  );
};

export default Footer;
