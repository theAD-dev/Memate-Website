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
    <div className="sales-process-optimization-wrapper">
      <div className="content-wrapper section1">
        <p className="sale-title">Wise</p>
        <p className="sales-heading-sales">Complete</p>
        <p className="sales-type">optimisation <br></br> software</p>
        <p className="sales-description-sales">
        A CRM where you can see all your client requests,<br></br> complete projects, and ongoing projects with 
        just<br></br> a few clicks. That’s what we call smart and simple <br></br>software for client database management.
        </p>
      </div>
      <img src={Images.ClientHistory}  className="section2 sales-process-optimization-image"/>
    </div>
  );
};

export default SalesProcessOptimiation;
