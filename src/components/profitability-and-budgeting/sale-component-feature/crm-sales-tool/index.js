import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const CRMSalesTool = () => {
  return (
    <div className="crmtool-manager-wrapper">
      <div className="content-wrapper">
        <p className="sale-title">Economical </p>
        <p className="sales-heading-sales">smart  </p>
        <p className="sales-type">approach </p>
        <p className="sales-description-sales">
        Preset calculators in meMate allow you to set budgets for products 
        and services, which managers can easily select during the quotation process. This reduces the chances of mistakes, 
        ensures reliable pricing, and speeds up the time it takes to generate quotes.
        </p>
      </div>
      <div className="">
        <div className="modal-contact">
          <img src={Images.budEconomical} />
          
        </div>
      </div>
    </div>
  );
};

export default CRMSalesTool;
