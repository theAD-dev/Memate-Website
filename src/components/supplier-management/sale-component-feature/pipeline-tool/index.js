import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import ScrollReveal from 'scrollreveal';
import  { useEffect } from "react";

const PipeLineTool = () => {

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
    <div className="pipeline-tool-wrapper marginSpaceBottom marginSpaceTop">
      <div className="pipeline-image-wrapper section1">
          <img src={Images.ContactSupplier} className="filter-pipelineimage"/>
         
      </div>
      <div className="content-wrapper section2">
        <p className="sale-title">Centralised</p>
        <p className="sales-heading-sales">Supplier contacts</p>
        <p className="sales-type">in one place</p>
        <p className="sales-description-sales">
        Keep all your supplier contacts in one place with<br></br> our centralised system. Easily store, access, 
        and <br></br>manage contact information, ensuring quick <br></br>communication and efficient 
        organisation. This <br></br>feature helps you stay connected and maintain <br></br>strong supplier relationships.
        </p>
      </div>
    </div>
  );
};

export default PipeLineTool;
