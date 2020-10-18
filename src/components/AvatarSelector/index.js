import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import Swiper from "swiper";
import { useSelector } from "react-redux";

import Button from "react-bootstrap/Button";

import ProfileOne from "./images/profile1.png";
import ProfileTwo from "./images/profile2.png";
import ProfileThree from "./images/profile3.png";

import { selectProfile } from "../../actions";

const hardcodedImages = [ProfileOne, ProfileTwo, ProfileThree];

const Avatar = (props) => (
  <div>
    <img src={hardcodedImages[props.index]} alt={props.message} />
    <div className="card my-5 col-sm-12">
      <div className="card-body">
        <div className="py-3">
          <h3 className="text-uppercase text-bold mb-3">{props.name}</h3>
          <h5>{props.occupation}</h5>
          <h5>{`Edad: ${props.age} años`}</h5>
        </div>
        <div>
          <h4>{`Ingresos mensuales:$ ${props.fixedIncome}`}</h4>
          <h4>{`Gastos mensuales: $${props.fixedExpenses}`}</h4>
        </div>
      </div>
    </div>
  </div>
);

const AvatarSelector = () => {
  const swiper = useRef(null);
  const { profiles } = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  useEffect(() => {
    swiper.current = new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }, []);

  return (
    <div>
      <h2 className="text-center py-5">Escoge tu avatar</h2>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {profiles.map((props, index) => (
            <div key={props.profileId} className="swiper-slide">
              <Avatar {...props} index={index} />
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
        <Button onClick={() => dispatch(selectProfile(2))} className="btn-xl my-5">Elegir</Button>
      </div>
    </div>
  );
};

export default AvatarSelector;
