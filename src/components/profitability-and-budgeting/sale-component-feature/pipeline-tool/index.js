import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const PipeLineTool = () => {
  return (
    <div className="sales-management-wrapper-dataF flextMobile" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="sales-imageF">
          <img src={Images.budVersatile} alt="budVersatile" className="filter-pipelineimage" type="image/svg+xml" /> 
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Versatile</p>
        <p className="sales-heading-salesF">budget</p>
        <p className="sales-typeF">control</p>
        <p className="sales-description-salesF">
        View your overall budget as well as the budget for each position in meMate. 
        Use this data to create jobs for your contractors and 
        schedule time shifts for your team, ensuring efficient resource allocation.
        </p>
      </div>
    </div>
  );
};

export default PipeLineTool;
