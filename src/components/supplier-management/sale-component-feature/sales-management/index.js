import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import ScrollReveal from 'scrollreveal';
import  { useEffect } from "react";

const SalesManagement = () => {
  
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
    <div className="sales-management-wrapper-data">
      <img src={Images.SupplierTable} className="section2" />
      <div className="content-wrapper section1">
        <p className="sale-title">Organised </p>
        <p className="sales-heading-sales">Supplier</p>
        <p className="sales-type">database</p>
        <p className="sales-description-sales">
        Keep your supplier information organised and <br></br>accessible with our database feature. 
        Easily <br></br>manage details, track orders, and improve<br></br> communication with your 
        suppliers, all in one<br></br> place. This tool helps you streamline your supply<br></br> chain operations.
        </p>
      </div>
    </div>
  );
};

export default SalesManagement;
