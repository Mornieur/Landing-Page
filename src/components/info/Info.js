import React from "react";
import "./info.scss";
import { images } from "../../images";

const Info = () => {
  return (
    <div style={{ backgroundColor: "#fafafc" }}>
      <div className="our-best-recipes">
        <h2 className="title2">Our Best Recipes</h2>
        <p>
          Far far away, behind the word mountains, far from the countries <br />
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <div className="container-food">
          <div className="our-best-recipes-content">
            <div className="area-one">
              <ul>
                <li>
                  <img src={images.comida_1} alt="" />
                  <h3>
                    {" "}
                    Broccoli Salad <br /> with Bacon
                  </h3>
                  <p>See Recipe</p>
                </li>
              </ul>
            </div>
            <div className="area-two">
              <ul>
                <li>
                  <img src={images.comida_2} alt="" />
                  <h3>
                    {" "}
                    Classic Beef <br /> Burgers{" "}
                  </h3>
                  <p>See Recipe</p>
                </li>
              </ul>
            </div>
            <div className="area-three">
              <ul>
                <li>
                  <img src={images.comida_3} alt="" />
                  <h3>
                    {" "}
                    Classic Potato <br /> Salad{" "}
                  </h3>
                  <p>See Recipe</p>
                </li>
              </ul>
            </div>

            <div className="area-four">
              <ul>
                <li>
                  <img src={images.comida_4} alt="" />
                  <h3>
                    {" "}
                    Cherry Cobbler <br /> on the Grill{" "}
                  </h3>
                  <p>See Recipe</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
