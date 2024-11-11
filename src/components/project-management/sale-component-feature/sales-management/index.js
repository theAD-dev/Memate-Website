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
      <img src={Images.proUserFriendly} />
      <div className="content-wrapper">
        <p className="sale-title">User-friendly </p>
        <p className="sales-heading-sales">Project<br></br>Project Management</p>
        <p className="sales-type"> timeline </p>
        <p className="sales-description-sales">
        We provide a complete dashboard to help you<br></br> manage your ongoing projects. Easily subdivide <br></br>
        projects into tasks and 
        maintain a comprehensive<br></br> project card with all the related information in one <br></br>place.
        </p>
      </div>
    </div>
  );
};

export default SalesManagement;
