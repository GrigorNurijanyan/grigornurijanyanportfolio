import React from "react";
import { Kaushan_Script } from "next/font/google";
import { Avatar, Link } from "@nextui-org/react";
import SVGFacebookIcon from "@/assets/SVG/SVGFacebookIcon";
import SVGInstagramIcon from "@/assets/SVG/SVGInstagramIcon";
import SVGLinkedInIcon from "@/assets/SVG/SVGLinkedInIcon";
import "./HomePage.css";

const kuashan = Kaushan_Script({
  subsets: ["latin"],
  weight: ["400"],
});

const HomePage = () => {
  return (
    <div className="home_page_banner flex justify-center items-center">
      <div className="flex justify-center items-center flex-col">
        <Avatar
          isBordered
          color="default"
          src={`http://localhost:3000/publicAssets/grigor.jpg`}
          className="w-44 h-44 text-large"
        />
        <h1 className={`${kuashan.className} text-xl text-white`}>
          Grigor Nurijanyan
        </h1>
        <h3 className="text-md text-white mt-2">Web Developer</h3>
        <div className="grid gap-4 grid-cols-3 mt-5">
          {/* className="bg-white rounded-md w-10 h-10" */}
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
      </div>
    </div>
  );
};

export default HomePage;
