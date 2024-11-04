import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const SuitableTender = () => {
  return (
    <div className="suitable-tender-wrapper marginSpaceTop">
      <div className="content-wrapper">
        <p className="sale-title">Modern</p>
        <p className="sales-heading-sales">way to do    </p>
        <p className="sales-type">business</p>
        <p className="sales-description-sales">
        We provide an unprecedented, simple way to run <br></br>your business, with full 
        control over the<br></br> profitability of each product or service. Our <br></br>system simplifies 
        budgeting by setting it at the<br></br> quotation stage, linking every expense to the <br></br>project. If expenses aren’t tied to a 
        specific<br></br> project, they are distributed across multiple<br></br> projects as operational expenses.
        </p>
      </div>
      <div className="suitable-table-image-wrapper">
      <img src={Images.budModern} />
     
      </div>
    </div>
  );
};

export default SuitableTender;
