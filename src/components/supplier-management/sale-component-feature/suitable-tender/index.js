import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import ScrollReveal from 'scrollreveal';
import  { useEffect } from "react";
const SuitableTender = () => {
 

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
    <div className="suitable-tender-wrapper marginSpaceTop">
      <div className="content-wrapper section1">
        <p className="sale-title">Convenient</p>
        <p className="sales-heading-sales">Supplier</p>
        <p className="sales-type">reports</p>
        <p className="sales-description-sales">
        Get a clear supplier overview that highlights<br></br> where you spend the most. This feature helps you <br></br>identify key suppliers, 
        allowing you to make <br></br>informed executive decisions based on spending <br></br>patterns.
        </p>
      </div>
      <div className="suitable-table-image-wrapper section2">
      <img src={Images.SupplierReport} />
     
      </div>
    </div>
  );
};

export default SuitableTender;
