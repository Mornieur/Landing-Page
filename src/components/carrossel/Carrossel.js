import React from "react";
import Carousel from "react-elastic-carousel";

import "./carrossel.scss";
import { images } from "../../images";
import icone from "../../images/icone.png";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function carrossel() {
  return (
    <div style={{ backgroundColor: "#fafafc" }}>
      <h1 style={{ textAlign: "center", fontSize: "3rem", color: "#221b51" }}>
        Read Our Blog
      </h1>
      <p style={{ textAlign: "center" }}>
        Far far away, behind the word mountains, far from the countries
        <br />
        Vokalia and Consonantia, there live the blind texts.
      </p>
      <div className="list">
        <Carousel className="carousel" breakPoints={breakPoints}>
          <div className="item">
            <img className="fruit" src={images.blog_image_1} alt="" />
            <h3>
              Quick-start guide <br />
              to nuts and seeds
            </h3>
            <div className="perfil">
              <img src={icone} alt="" />
              <p>Kevin Ibrahim</p>
            </div>
          </div>
          <div className="item">
            <img className="fruit" src={images.bloco_image_2} alt="" />
            <h3>
              Nutrition: Tips for
              <br />
              Improving Your Health
            </h3>
            <div className="perfil">
              <img src={icone} alt="" />
              <p>Mike Jackson</p>
            </div>
          </div>
          <div className="item">
            <img className="fruit" src={images.bloco_image_3} alt="" />
            <h3>
              The top 10 benefits
              <br />
              of eating healthy
            </h3>
            <div className="perfil">
              <img src={icone} alt="" />
              <p>Bryan McGregor</p>
            </div>
          </div>
          <div className="item">
            <img className="fruit" src={images.bloco_image_4} alt="" />
            <h3>
              What fruits are good for <br />
              health
            </h3>
            <div className="perfil">
              <img src={icone} alt="" />
              <p>Jassinto Smith</p>
            </div>
          </div>
          <div className="item">
            <img className="fruit" src={images.blog_image_1} alt="" />
            <h3>
              Quick-start guide <br />
              to nuts and seeds
            </h3>
            <div className="perfil">
              <img src={icone} alt="" />
              <p>Kevin Ibrahim</p>
            </div>
          </div>
          <div className="item">
            <img className="fruit" src={images.bloco_image_2} alt="" />
            <h3>
              Nutrition: Tips for
              <br />
              Improving Your Health
            </h3>
            <div className="perfil">
              <img src={icone} alt="" />
              <p>Mike Jackson</p>
            </div>
          </div>
          <div className="item">
            <img className="fruit" src={images.bloco_image_3} alt="" />
            <h3>
              The top 10 benefits
              <br />
              of eating healthy
            </h3>
            <div className="perfil">
              <img src={icone} alt="" />
              <p>Bryan McGregor</p>
            </div>
          </div>
          <div className="item">
            <img className="fruit" src={images.bloco_image_4} alt="" />
            <h3>
              What fruits are good for <br />
              health
            </h3>
            <div className="perfil">
              <img src={icone} alt="" />
              <p>Jassinto Smith</p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default carrossel;
