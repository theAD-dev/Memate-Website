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
    <div className="aglie-pipeline-management-wrapper">
      <img src={Images.ClientInformation} className="section1"/>
      <div className="content-wrapper section2">
        <p className="sale-title">Dynamic</p>
        <p className="sales-heading-sales">Detailed</p>
        <p className="sales-type">client information </p>
        <p className="sales-description-sales">
        You can add multiple client locations, including<br></br> detailed company descriptions, 
        key personnel,<br></br> and addresses formatted to Australian standards.<br></br> We’ve thought of everything.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
