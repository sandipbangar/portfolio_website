import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgAll from "../components/HeroImgAll";
import PricingCard from "../components/PricingCard";
import Work from "../components/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImgAll heading="PROJECTS" text="Some of my recent work"/>
      <Work/>
      <PricingCard/>
      <Footer />
    </div>
  );
};

export default Project;
