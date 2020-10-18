import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

import Button from "react-bootstrap/Button";

import { startGame } from "../../actions";

import Walking from "./images/walking.svg";
import Phone from "./images/phone.svg";
import Hero from "./images/hero.svg";
import Logo from "./images/logo.png";
import Fly from "./images/fly.svg";

const Slide = (props) => (
  <div>
    <img src={props.image} alt={props.message} />
    <h3>{props.message}</h3>
  </div>
);

const StartGame = (props) => (
  <div className="swiper-slide flex-column">
    <img className="my-5" src={Fly} alt={"Financial Life"} />
    <Button onClick={props.onClick} className="btn-xl my-5">
      JUGAR
    </Button>
  </div>
);

const Onboarding = () => {
  const dispatch = useDispatch();

  const messages = [
    {
      key: "welcome",
      image: Walking,
      message: "",
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

  return (
    <div className="onboarding-container py-5">
      <img className="logo py-5" src={Logo} alt={"Financial Life"} />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {messages.map((props) => (
          <SwiperSlide key={props.key}>
            <Slide {...props} />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <StartGame onClick={() => dispatch(startGame())} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Onboarding;
