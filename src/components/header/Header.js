import React, { useState } from "react";
import "./header.scss";
import { images } from "../../images";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <div>
      <header>
        <nav className="navbar container">
          <div className="logo">
            <h1>Healthy Food</h1>
          </div>
          <ul className={open ? `nav-items active` : `nav-items`}>
            <li>HEALTHY RECIPES</li>
            <li>BLOG</li>
            <li>JOIN</li>
            <li className="btn btn--nav-btn">REGISTER</li>
          </ul>
          <div className="hamburguer">
            <img src={images.hamburger} alt="" onClick={handleClick} />
          </div>
        </nav>

        <div className="right-top-image">
          <picture>
            <img src={images.illustration} alt="" />
          </picture>
        </div>
      </header>
    </div>
  );
};

export default Header;
