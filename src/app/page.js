"use client";
import React, { useEffect, useState } from "react";
import AboutMeSection from "@/pages/AboutMeSection/AboutMeSection";
import ContactSection from "@/pages/ContactSection/ContactSection";
import Footer from "@/pages/Footer/Footer";
import HireMeSection from "@/pages/HireMeSection/HireMeSection";
import HeroSection from "@/pages/HeroSection/HeroSection";
import ResumeSection from "@/pages/ResumeSection/ResumeSection";
import SkillsSection from "@/pages/SkillsSection/SkillsSection";
import WorksSection from "@/pages/WorksSection/WorksSection";
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
