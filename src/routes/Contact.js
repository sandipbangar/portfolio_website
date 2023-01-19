import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgAll from "../components/HeroImgAll";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImgAll heading="CONTACT" text="Let's have a chat"/>
      <Form/>
      <Footer />
    </div>
  );
};

export default Contact;
