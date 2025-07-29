"use client";

import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import JobPostingSection from "@/components/sections/JobPostingSection";
import SoftwareToolsSection from "@/components/sections/SoftwareToolsSelection";
import GamesSection from "@/components/sections/GamesSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <JobPostingSection />
        <SoftwareToolsSection />
        <GamesSection />
      </main>
      <Footer />
    </>
  );
}
