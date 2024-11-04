import React from "react";
import Images from "../../../../assests/images";
import "./style.css";
import ScrollReveal from 'scrollreveal';
import  { useEffect } from "react";
const AgilePipeLineManagement = () => {

  useEffect(() => {
    const slideUpConfig = {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
    };
    ScrollReveal().reveal('.section1', { ...slideUpConfig, delay: 200 });
    ScrollReveal().reveal('.section2', { ...slideUpConfig, delay: 400 });

  }, []);
  return (
    <div className="aglie-pipeline-management-wrapper marginSpaceTop">
      <img src={Images.OrderHistory} className="section1"/>
      <div className="content-wrapper section2">
        <p className="sale-title">Essential</p>
        <p className="sales-heading-sales">Supplier</p>
        <p className="sales-type">order history</p>
        <p className="sales-description-sales">
        Easily view your previous orders for each<br></br> supplier. This feature helps you track order<br></br> history,
         review past transactions, and make<br></br> informed decisions, all in one convenient location.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
