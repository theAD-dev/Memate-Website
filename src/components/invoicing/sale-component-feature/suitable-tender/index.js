import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const SuitableTender = () => {
  return (
    <div className="suitable-tender-wrapper marginSpaceTop">
      <div className="content-wrapper">
        <p className="sale-title">Integrated</p>
        <p className="sales-heading-sales">Accounting   </p>
        <p className="sales-type">Connectivity</p>
        <p className="sales-description-sales">
        Easily link meMate to your accounting software<br></br> 
        like MYOB or Xero and send all paid invoices in one<br></br> go. This ensures your accounting system 
        stays<br></br> clean, organised, and under complete control.
        </p>
      </div>
      <div className="suitable-table-image-wrapper">
      <img src={Images.invoIntegrated} />
     
      </div>
    </div>
  );
};

export default SuitableTender;
