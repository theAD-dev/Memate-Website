import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const SalesManagement = () => {
  return (
    <div className="sales-management-wrapper-data" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <img src={Images.commReliable} type="image/svg+xml" />
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
