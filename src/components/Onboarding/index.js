import React, { useEffect, useRef } from "react";
import Swiper from "swiper";

import Button from "react-bootstrap/Button";

import Walking from "./images/walking.svg";
import Phone from "./images/phone.svg";
import Hero from "./images/hero.svg";

const Slide = (props) => (
  <div>
    <h1>{props.message}</h1>
    <img src={props.image} alt={props.message} />
  </div>
);

const StartGame = () => (
  <div className="swiper-slide flex-column">
    <h1>FINANCIAL LIFE</h1>
    <Button>Iniciar juego</Button>
  </div>
);
const Onboarding = () => {
  const swiper = useRef(null);

  const messages = [
    {
      key: "welcome",
      image: Walking,
      message: "Bienvenido",
    },
    {
      key: "life",
      image: Phone,
      message: "Equivócate en el juego, no en la vida real",
    },
    {
      key: "level",
      image: Hero,
      message: "Lleva tus finanzas a otro nivel",
    },
  ];

  useEffect(() => {
    swiper.current = new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {messages.map((props) => (
          <div key={props.key} className="swiper-slide">
            <Slide {...props} />
          </div>
        ))}
        <StartGame />
      </div>
    </div>
  );
};

export default Onboarding;
