import React from "react";
import "../Component/portfolio.css";
import { FaInstagram } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Portfolio() {
  return (
    <div>
      <div className="main">
        <div className="firstmain">
          <h1 className="por">portfolio</h1>
          <div className="nav">
            <a href="#" className="navbar">
              Home
            </a>
            <a href="#" className="navbar">
              About
            </a>
            <a href="#" className="navbar">
              Service
            </a>
            <a href="#" className="navbar">
              Projects
            </a>
            <a href="#" className="navbar">
              Contacts
            </a>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="profile">
          <img
            src="src/FunComp/images/profile.jpg"
            alt=""
            height="300px"
            width="300px"
          />
          <h1>Aswinsundar</h1>
          <h3>
            I'm a<span>Front End Developer</span>
          </h3>
          <div className="logo">
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
            <a href="">
              <FaXTwitter />
            </a>
            <a href="">
              <FaWhatsapp />
            </a>
            <a href="">
              <FaFacebookF />
            </a>
            <br />

            <button>Download CV</button>
          </div>
        </div>
      </div>

      
    </div>
  );
}
export default Portfolio;
