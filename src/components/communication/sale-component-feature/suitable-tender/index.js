import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const SuitableTender = () => {
  return (
    <div className="suitable-tender-wrapper marginSpaceTop">
      <div className="content-wrapper">
        <p className="sale-title">Seamless</p>
        <p className="sales-heading-sales">Accessible </p>
        <p className="sales-type">Data history </p>
        <p className="sales-description-sales">
        We’ve designed everything for you to easily store <br></br>information related to your business 
        projects. With <br></br>just two clicks, you can retrieve the complete<br></br> project history.
        </p>
      </div>
      <div className="suitable-table-image-wrapper">
      <img src={Images.commSeamless} />
     
      </div>
    </div>
  );
};

export default SuitableTender;
