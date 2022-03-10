import React from "react";

import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Header.css";

function Header() {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase The New Flavour" />
        <h1 className="app__header-h1">The Key To Fine Dining</h1>
        <p className="p__opensans" style={{ margin: "1rem 0" }}>
          Pure art on a plate that uses Scandinavia’s seasonal larder as its
          palette
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  );
}

export default Header;
