import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgAll from "../components/HeroImgAll";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImgAll
        heading="ABOUT"
        text="A front-end developer with experience in building user interfaces for web applications. A keen eye for
        detail and high-quality responsive design."
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
