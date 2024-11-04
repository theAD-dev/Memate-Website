import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const SalesManagement = () => {
  return (
    <div className="sales-management-wrapper-data">
      <img src={Images.commReliable} />
      <div className="content-wrapper">
        <p className="sale-title">Reliable</p>
        <p className="sales-heading-sales">Send, resend and <br></br>Remind</p>
        <p className="sales-type">about quotes</p>
        <p className="sales-description-sales">
        There’s nothing better than starting with clear and<br></br> transparent communication.
         Send quotes for<br></br> approval with automatic reminders directly from<br></br> your 
         meMate system with just one click.
       </p>
      </div>
    </div>
  );
};

export default SalesManagement;
