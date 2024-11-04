import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const SalesManagement = () => {
  return (
    <div className="sales-management-wrapper-data">
      <img src={Images.invoStrategic} />
      <div className="content-wrapper">
        <p className="sale-title">Strategic</p>
        <p className="sales-heading-sales">Invoicing  </p>
        <p className="sales-type"> functionality   </p>
        <p className="sales-description-sales">

        meMate’s unique, strategic, and robust horizontal <br></br>business process 
        system allows you to create<br></br> invoices based on quotations or calculations.
         It<br></br> seamlessly converts existing calculations into<br></br> invoices, 
         which can be sent directly to the <br></br>customer.
        </p>
      </div>
    </div>
  );
};

export default SalesManagement;
