import React from "react";
import "./style.css";
const ReadMore = () => {
  return (
    <div className="industry-read-more-wrapper" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="3000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="industry-read-more-content">
        <p className="read-more-heading">Read More MeMate</p>
        <div className="read-more-card-wrapper">
          <div className="read-more-card">
            <div className="read-more-card-1"></div>
            <p className="read-more-card-1-date">June 19, 2024</p>
            <p className="read-more-card-1-desc">
              Transforming design education for students for japan’s students
            </p>
          </div>
          <div className="read-more-card">
            <div className="read-more-card-2"></div>
            <p className="read-more-card-1-date">June 19, 2024</p>
            <p className="read-more-card-1-desc">
              Transforming design education for students for japan’s students
            </p>
          </div>
          <div className="read-more-card">
            <div className="read-more-card-3"></div>
            <p className="read-more-card-1-date">June 19, 2024</p>
            <p className="read-more-card-1-desc">
              Transforming design education for students for japan’s students
            </p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
