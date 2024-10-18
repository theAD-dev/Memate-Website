import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const PipeLineTool = () => {
  return (
    <div className="pipeline-tool-wrapper">
      <div className="pipeline-image-wrapper">
          <img src={Images.ClientBusiness} className="filter-pipelineimage"/>
         
      </div>
      <div className="content-wrapper">
        <p className="sale-title">Smart</p>
        <p className="sales-heading-sales">Tool for Small </p>
        <p className="sales-type">business  </p>
        <p className="sales-description-sales">
        In meMate, we display all necessary information<br></br> for every client automatically, 
        including total <br></br> turnover, average income per day, total amount of <br></br> orders, and order frequency. 
        This helps you<br></br>  navigate your marketing 
        activities in the best<br></br>  client management CRM in Australia.
        </p>
      </div>
    </div>
  );
};

export default PipeLineTool;
