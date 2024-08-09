"use client";
import React, { useEffect, useState } from "react";
import AboutMe from "@/pages/AboutMe/AboutMe";
import Contact from "@/pages/Contact/Contact";
import Footer from "@/pages/Footer/Footer";
import HireMe from "@/pages/HireMe/HireMe";
import HomePage from "@/pages/HomePage/HomePage";
import MyResume from "@/pages/MyResume/MyResume";
import Skills from "@/pages/Skills/Skills";
import Works from "@/pages/Works/Works";
import { CircularProgress } from "@nextui-org/react";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);
  return (
    <main className="overflow-x-hidden flex min-h-screen flex-col items-center justify-between">
      <HomePage />
      <AboutMe />
      <MyResume />
      <Works />
      <Skills />
      <HireMe />
      <Contact />
      <Footer />
      {loading && (
        <CircularProgress
          disableAnimation
          className="m-auto my-auto flex align-center h-screen max-w-full w-full fixed bg-[#dee2e2] z-50"
          aria-label="Loading..."
        />
      )}
    </main>
  );
};

export default Home;
