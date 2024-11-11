import { useState } from "react";
import "./style.css";
import Images from "../../../assests/images";
import PlanOne from "./plan-one";
import PlanTwo from "./plan-two";
import PlanThree from "./plan-three";
import PricingTable from "../../pricing/dark-pricing-table";


const SmartInvestment = () => {
  const { selectPlan, setSelectPlan } = useState(0);
  return (
    <div className="smart-investment-wrapper">
      <p className="smart-investment-heading" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="4000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">Smart investment</p>
      <h1 className="smart-investment-banner" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="4500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">pricing</h1>
      <div className="smart-investment-description" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="5000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <span className="smart-investment-section-description">
          Plus, we provide a 14-day free trial because we believe our<br></br>
          software will become indispensable to your business.
        </span>
      </div>
     
     <PricingTable />
    
    
      {/* <div className="investment-button-wrapper">
        <button
          className={
            selectPlan === 0
              ? "monthly-investment-button"
              : "monthly-investment-button-active"
          }
        >
          Monthly
        </button>
        <div className="yearly-investment-button">
          <p className="yearly-plan">Yearly</p>
          <p className="save-discount">Save 15%</p>
        </div>
      </div>

      <div className="invest-plan-wrapper">
       <PlanOne/>
       <PlanTwo/>
       <PlanThree/>
      </div> */}
    
    </div>
  );
};

export default SmartInvestment;
