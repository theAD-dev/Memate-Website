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
          <img src={Images.filterPipeline} className="filter-pipelineimage"/>
          <img src={Images.pipeLine} />
      </div>
      <div className="content-wrapper">
        <p className="sale-title">Salesforce for small business</p>
        <p className="sales-heading-sales">Sales</p>
        <p className="sales-type">pipeline</p>
        <p className="sales-description-sales">
          Discover a simpler CRM solution with our <br></br>software, designed
          for small businesses. Enjoy <br></br>the powerful features of
          Salesforce in an easy-to-<br></br>use, integrated platform. Streamline
          operations,<br></br> enhance customer relationships, and grow your{" "}
          <br></br>business effortlessly.
        </p>
      </div>
    </div>
  );
};

export default PipeLineTool;
