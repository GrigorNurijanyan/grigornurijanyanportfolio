"use client";
import React, { useEffect, useState } from "react";
import { CircularProgress } from "@nextui-org/react";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/pages/HeroSection/HeroSection"))
const AboutMeSection = dynamic(() => import("@/pages/AboutMeSection/AboutMeSection"))
const ResumeSection = dynamic(() => import("@/pages/ResumeSection/ResumeSection"))
const WorksSection = dynamic(() => import("@/pages/WorksSection/WorksSection"))
const SkillsSection = dynamic(() => import("@/pages/SkillsSection/SkillsSection"))
const HireMeSection = dynamic(() => import("@/pages/HireMeSection/HireMeSection"))
const ContactSection = dynamic(() => import("@/pages/ContactSection/ContactSection"))
const Footer = dynamic(() => import("@/pages/Footer/Footer"))

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  return (
    <main className="overflow-x-hidden flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <AboutMeSection />
      <ResumeSection />
      <WorksSection />
      <SkillsSection />
      <HireMeSection />
      <ContactSection />
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
