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
    <div className="smart-investment-wrapper paddingSpaceTop">
      <p className="smart-investment-heading">Smart investment</p>
      <h1 className="smart-investment-banner marginSpaceTop">pricing</h1>
      <div className="smart-investment-description">
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
