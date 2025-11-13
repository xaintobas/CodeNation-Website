import React from "react";
import HeroSection from "../components/Hero";
import StatsBar from "../components/StatsBar";
import Services from "../components/Services";

function Welcome() {
  return (
    <div>
      <HeroSection />
      <StatsBar />
      <Services />
    </div>
  );
}

export default Welcome;
