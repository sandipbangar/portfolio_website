import "./AboutContentStyles.css";
import Bg_Img_all from "../assets/Bg_Img_all.png"
import homebg from "../assets/homebg.jpg";
import cardimg1 from "../assets/zomato_landing_page.png";
import React from 'react'
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm a react front-end developer.
                I create responsive secure websites.
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={homebg} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={Bg_Img_all} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent