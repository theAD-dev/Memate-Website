import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const PipeLineTool = () => {
  return (
    <div className="pipeline-tool-wrapper" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="pipeline-image-wrapper">
          <img src={Images.filterPipeline} alt="filterPipeline" className="filter-pipelineimage" type="image/svg+xml" />
          {/* <img src={Images.pipeLine} /> */}
      </div>
      <div className="content-wrapper">
        <p className="sale-title">Salesforce for small business</p>
        <p className="sales-heading-sales">Sales</p>
        <p className="sales-type">pipeline</p>
        <p className="sales-description-sales">
        Designed with small businesses in mind, this <br/>software provides all possible scenarios for your<br/> ongoing sales activities and helps you navigate <br/>them with ease.
        </p>
      </div>
    </div>
  );
};

export default PipeLineTool;
