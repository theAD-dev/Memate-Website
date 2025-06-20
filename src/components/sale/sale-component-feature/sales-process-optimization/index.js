import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const SalesProcessOptimiation = () => {
  return (
    <div className="sales-management-wrapper-dataF" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapperF">
        <p className="sale-titleF">Powerful and simple</p>
        <p className="sales-heading-salesF">Sales Process</p>
        <p className="sales-typeF">optimisation <br></br> software</p>
        <p className="sales-description-salesF">
        With meMate, optimising your sales process is <br />simple. It handles almost everything for you— <br />sending reminders, quotes, or business proposals<br /> with just one click. This allows one manager to <br />handle many more clients efficiently.
        </p>
      </div>
      <div className="sales-imageF">
      <img src={Images.salesProtestOptimization} alt="optimization-image"  className="sales-process-optimization-image" type="image/svg+xml"/></div>
    </div>
  );
};

export default SalesProcessOptimiation;
