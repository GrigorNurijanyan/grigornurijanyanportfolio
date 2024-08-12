import React, { useEffect, useState } from "react";
import { Kaushan_Script } from "next/font/google";
import { Avatar, Link } from "@nextui-org/react";
import SVGFacebookIcon from "@/assets/SVG/SVGFacebookIcon";
import SVGInstagramIcon from "@/assets/SVG/SVGInstagramIcon";
import SVGLinkedInIcon from "@/assets/SVG/SVGLinkedInIcon";
import { motion, useDomEvent } from "framer-motion";
import "./HomePage.css";

const kuashan = Kaushan_Script({
  subsets: ["latin"],
  weight: ["400"],
});

const transition = {
  type: "spring",
  damping: 25,
  stiffness: 120,
};

const HomePage = () => {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    const getPageBody = document.body;
    if (getPageBody) {
      if (isOpen) {
        getPageBody.style.overflow = "hidden";
      } else {
        getPageBody.style.overflow = "";
      }
    }
  }, [isOpen]);
  return (
    <div
      className={`home_page_banner flex justify-center items-center ${
        isOpen ? "open" : ""
      }`}
    >
      <motion.div
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex justify-center items-center flex-col"
      >
        <motion.div
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={transition}
          className="shade"
          onClick={() => setOpen(false)}
        />
        <Avatar
          isBordered
          color="default"
          src={`/publicAssets/grigor.jpg`}
          className="w-44 h-44 text-large personal_image"
          onClick={() => setOpen(!isOpen)}
        />
        <h1 className={`${kuashan.className} sm:text-xl text-md2  text-white`}>
          Grigor Nurijanyan
        </h1>
        <h3 className="text-md text-white mt-2">Web Developer</h3>
        <div className="grid gap-4 grid-cols-3 mt-5">
          <Link
            className="bg-white rounded-md w-10 h-10 text-black-600 flex justify-center items-center"
            href="https://www.facebook.com/gnurijanyan"
            size="lg"
            isExternal
          >
            <SVGFacebookIcon />
          </Link>
          <Link
            className="bg-white rounded-md w-10 h-10 text-black-600 flex justify-center items-center"
            color="foreground"
            href="https://www.instagram.com/_blessed_27__/"
            size="lg"
            isExternal
          >
            <SVGInstagramIcon />
          </Link>
          <Link
            className="bg-white rounded-md w-10 h-10 text-black-600 flex justify-center items-center"
            color="foreground"
            href="https://www.linkedin.com/in/grigor-nurijanyan-717692220/"
            size="lg"
            isExternal
          >
            <SVGLinkedInIcon />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
