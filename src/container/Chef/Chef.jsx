import React from "react";

import "./Chef.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";
const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What we believe in </h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            The key to running a successful kitchen is what I call the ‘3 F’s.’
            Be Firm, Be Fair, and Be Friendly with your staff, your guests, and
            yourself.
          </p>
        </div>
        <p className="p__opensans">
          When you run a kitchen, no matter how crazy and chaotic it gets, you
          have to be the calm one. You cannot show any sign of fear - the guests
          pick up on it. The beauty of this kitchen, though, is that everybody
          helps everybody.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
