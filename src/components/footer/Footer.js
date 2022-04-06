import React from "react";
import "./footer.scss";
import { images } from "../../images";

function footer() {
  return (
    <div>
      <div className="best-services">
        <div className="container-members">
          <div className="join-title">
            <h1>
              Join our membership
              <br />
              to get special offer
            </h1>
          </div>
          <div className="search">
            <input placeholder="Enter your email address"></input>
            <p>join</p>
          </div>

          <div className="members-img">
            <img src={images.bloco_final_image} alt="" />
          </div>
          <div className="copyrihts container">
            <div>
              <span className="copy">
                © Copyrights 2019 Stack. All Rights Reserved.{" "}
              </span>
            </div>
            <div>
              <ul className="copy-items">
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
