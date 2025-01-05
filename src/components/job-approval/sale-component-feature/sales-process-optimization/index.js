import React from "react";
import "./style.css";
const SalesProcessOptimiation = () => {
  return (
    <div className="sales-process-optimization-wrapper " data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapper">
        <p className="sale-title">Secure</p>
        <p className="sales-heading-sales">Geolocation </p>
        <p className="sales-type">Monitoring</p>
        <p className="sales-description-sales">
        meMate includes a geolocation system to monitor<br/> contractors working outside the office. 
        It provides <br/>accurate data on where a job starts and finishes,<br/> helping 
        you manage shifts and track on-site work<br/> efficiently.
        </p>
      </div>
      <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/job-geolocation-img.svg" alt="Productive"  className="geolocation"/>
    </div>
  );
};

export default SalesProcessOptimiation;
