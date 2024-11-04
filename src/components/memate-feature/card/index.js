import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import ScrollReveal from 'scrollreveal';
import  { useEffect } from "react";
const FeatureCard = (props) => {
  useEffect(() => {
    const slideUpConfig = {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
    };
    ScrollReveal().reveal('.section1', { ...slideUpConfig, delay: 200 });
   
  }, []);
  return (
    <>
      <div className="all-in-one allinonefeatueWrap section1">
        <div className="strean-line">
          <div className="main-operation">
            <div className="operation-left">
              <p className="all-text">{props.subHeading}</p>
              <h2>{props.topHeading}</h2>
              <h1>{props.mainHeading}</h1>

              <div className="operation-desp">
                <p>{props.description}</p>
              </div>
              <Link to="https://dev.memate.com.au/onboarding"><button className="get-started-btn">{props.cardButton}</button></Link>
            </div>

            <div className="operation-right">
              <h1> {props.titleImage} </h1>
              <div className="boost-image">{props.maxImage}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
