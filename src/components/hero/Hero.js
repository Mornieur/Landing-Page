import React from "react";
import "./hero.scss";
import lupa from "../../images/lupa.png";

function Hero() {
  return (
    <div>
      <div className="hero">
        <div className="hero__wrapper container">
          <div className="hero__contect">
            <h1 className="title1">
              Ready for <br /> Trying a new <br /> recipe?
            </h1>
            <div className="search">
              <input
                className="input"
                placeholder="Search healthy recipes"
              ></input>
              <img className="lupa" src={lupa} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
