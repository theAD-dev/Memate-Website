import React from "react";
import "./style.css";

import SliderStories from "./center-mode";
import { Link } from "react-router-dom";

const SuccessStories = () => {
  

  return (
   <>
 
    <div className="slider-section1" >
      <div className="success-stories1">
        <div className="bottom-management" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2800"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
          <h2>Success Stories</h2>
          <p>
            Here are a few stories from Australian companies using Memate
            <br />
            and how it has worked for them.
          </p>
          <Link to="/customer-stories"><button>All Stories</button></Link>
        </div>
        <SliderStories />
        
      </div>
    </div>
   </>
  );
};

export default SuccessStories;
