import React, { memo } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="p-5 bg-blue-700 w-full text-center text-white"
    >
      &copy; {new Date().getFullYear()} Grigor Nurijanyan
    </motion.div>
  );
};

export default memo(Footer);
