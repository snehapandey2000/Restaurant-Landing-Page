import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          58 Old Chapel Road, Gatesheath, United Kingdom
        </p>
        <p className="p__opensans">079 0606 0759</p>
        <p className="p__opensans">077 5019 8644</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer__logo" />
        <p className="p__opensans">
          With faith, discipline and selfless devotion to duty, there is nothing
          worthwhile that you cannot achieve.
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: "15px" }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
          <AiFillGithub />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am-12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am-11:00 pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">All Right Reserved :)</p>
    </div>
  </div>
);

export default Footer;
