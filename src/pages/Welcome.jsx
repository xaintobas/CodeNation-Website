import React from "react";
import HeroSection from "../components/Hero";
import StatsBar from "../components/StatsBar";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Process from "../components/Process";

function Welcome() {
  return (
    <div>
      <HeroSection />
      <StatsBar />
      <Services />
      <Testimonials />
      <CTA />
      <Process />
    </div>
  );
}

export default Welcome;
