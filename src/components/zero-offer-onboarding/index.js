import React from "react";
import "./style.css";
import Images from "../../assests/images";
import ScrollReveal from 'scrollreveal';
import  { useEffect } from "react";
const ZeroOfferOnboarding = () => {
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
    <div className="onboarding-section">
      <div className="onboarding-section-content">
        <div className="offer-opt">
          <div className="sab-heading">
            <h2> We offer zero fees for</h2>
            <h1>onboarding</h1>
            <p>
            Plus, we provide a 14-day free trial because we believe our software will become indispensable to your business.
            </p>
            <div className="button-container">
              <button className="book-a-demo">Request a Demo</button>
            </div>
          </div>
          <div className="offer-screen-shot section1">
            <img src={Images.zeroScreenShot} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZeroOfferOnboarding;
