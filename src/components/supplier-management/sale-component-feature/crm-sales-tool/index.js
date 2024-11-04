import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import ScrollReveal from 'scrollreveal';
import  { useEffect } from "react";

const CRMSalesTool = () => {

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
    <div className="crmtool-manager-wrapper">
      <div className="content-wrapper section1">
        <p className="sale-title">Helpful </p>
        <p className="sales-heading-sales">Supplier </p>
        <p className="sales-type">management </p>
        <p className="sales-description-sales">
        Our Supplier Management feature simplifies<br></br> handling your supplier relationships. 
        It shows all <br></br>previous and existing orders, 
        payment statuses, <br></br>and overall turnover, helping you navigate exact<br></br> expenses efficiently.
        </p>
      </div>
      <div className="">
        <div className="modal-contact section2">
          <img src={Images.HelpfullSupplier} />
          
        </div>
      </div>
    </div>
  );
};

export default CRMSalesTool;
