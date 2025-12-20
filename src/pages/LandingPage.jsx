import React from 'react'
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeautureSection";
import InstallSection from "../components/InstallSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ClickSection from "../components/ClickSection";
import DonateSection from "../components/DonateSection";
import DownloadSection from "../components/DownloadSection";

const LandingPage = () => {
  return (
    <div>
        <HeroSection />
      <FeaturesSection />
      <ClickSection />
      <InstallSection />
      <DonateSection />
      <TestimonialsSection />
      <DownloadSection />
    </div>
  )
}

export default LandingPage