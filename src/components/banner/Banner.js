import React from "react";
import "./banner.scss";
import { images } from "../../images";

const Banner = () => {
  return (
    <div>
      <div className="best-services">
        <div className="container-services">
          <div>
            <picture>
              <img src={images.bloco_services} alt="" />
            </picture>
          </div>
          <div className="title3">
            <h3>
              The best services ready
              <br />
              To serve you
            </h3>
            <ul>
              <li>
                Far far away, behind the word mountains, far from
                <br />
                the countries Vokalia and Consonantia, there live the
                <br />
                blind texts.
              </li>
              <li>
                Separated they live in Bookmarksgrove right at the
                <br />
                coast of the Semantics, a large language ocean.
                <br />
              </li>
              <li>
                A small river named Duden flows by their place and
                <br />
                supplies it with the necessary regelialia.
                <br />
              </li>
              <p>Know More</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
