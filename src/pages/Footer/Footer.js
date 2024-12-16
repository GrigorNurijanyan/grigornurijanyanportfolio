import Div from "@/components/HtmlTags/Div";
import React from "react";

const Footer = () => {
  return (
    <Div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="p-5 bg-blue-700 w-full text-center text-white"
    >
      &copy; {new Date().getFullYear()} Grigor Nurijanyan
    </Div>
  );
};

export default Footer;
