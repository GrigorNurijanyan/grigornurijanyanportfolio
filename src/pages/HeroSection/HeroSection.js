import React, { useEffect, useState } from "react";
import { Kaushan_Script } from "next/font/google";
import { Avatar, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import profileImage from '../../assets/profpic.jpeg';
import { socialMediaLinks } from "@/app/data/socialMediaLinks";
import Div from "@/components/HtmlTags/Div";
import H1 from "@/components/HtmlTags/H1";
import H3 from "@/components/HtmlTags/H3";
import "./HeroSection.css";

const kuashan = Kaushan_Script({
  subsets: ["latin"],
  weight: ["400"],
});

const transition = {
  type: "spring",
  damping: 25,
  stiffness: 120,
};

const HeroSection = () => {
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
    <Div
      className={`home_page_banner flex justify-center items-center ${isOpen ? "open" : ""
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
          src={profileImage.src}
          className="w-44 h-44 text-large personal_image"
          onClick={() => setOpen(!isOpen)}
        />
        <H1 className={`${kuashan.className} sm:text-xl text-md2  text-white`}>
          Grigor Nurijanyan
        </H1>
        <H3 className="text-md text-white mt-2">Web Developer</H3>
        <Div className="grid gap-4 grid-cols-3 mt-5">
          {socialMediaLinks.map((link, index) => (
            <Link
              key={index}
              className="bg-white rounded-md w-10 h-10 text-black-600 flex justify-center items-center"
              color="foreground"
              href={link.href}
              size="lg"
              isExternal
            >
              {link.icon}
            </Link>
          ))}
        </Div>
      </motion.div>
    </Div>
  );
};

export default HeroSection;
