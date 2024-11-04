import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import ScrollReveal from 'scrollreveal';
import  { useEffect } from "react";
const SalesProcessOptimiation = () => {


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
    <div className="sales-process-optimization-wrapper ">
      <div className="content-wrapper section1">
        <p className="sale-title">Insightful</p>
        <p className="sales-heading-sales">Help</p>
        <p className="sales-type">your managers </p>
        <p className="sales-description-sales">
        Quickly find your preferred suppliers with just a <br></br>few clicks. This feature allows management to <br></br>easily 
        access and select the suppliers you need,<br></br> streamlining your workflow and saving time.
        </p>
      </div>
      <img src={Images.Insightful}  className="section2 sales-process-optimization-image"/>
    </div>
  );
};

export default SalesProcessOptimiation;
