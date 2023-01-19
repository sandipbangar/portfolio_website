import "./FooterStyles.css";

import React from "react";
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Wakad, Pune</p>
              <p>India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91-9552826247
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              sandip.bangar1999@outlook.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About</h4>
          <p>
            This is me Sandip Bangar, A front-end developer with experience in
            building user interfaces for web applications. A keen eye for detail
            and high-quality responsive design.
          </p>
          <div className="social">
          <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
