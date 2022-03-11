import React from "react";
import { images } from "../../constants";

import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon" className="spoon_img" />
        <p className="p__opensans">
          We realize numerous individuals love Indian sustenance, yet a large
          number of them loathe or are unconscious of the regularly unfortunate
          fixings that make run-of-the-mill Indian nourishment taste so great.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
      <div className="app__aboutus-content_knife flex_center">
        <img src={images.knife} alt="about_knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon" className="spoon_img" />
        <p className="p__opensans">
          Get ready to be transported through 2,000 years of Cantonese culinary
          history through the dining experience. The restaurant’s cooking style
          is built on tradition: the seafood is sourced by local fishermen.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
