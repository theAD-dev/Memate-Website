import React from "react";
import "./style.css";
import Images from "../../assests/images";
import {ReactComponent as IntegrationImage} from "../../assests/images/integration.svg"

const SeamlessInegration = () => {
  return (
    <div className="integration-section">
      <div className="integation-title">
        <h3>Memate</h3>
        <h1>seamless integration</h1>
      </div>
      <div className="integration-brand-container">
        <IntegrationImage/>
      </div>
     
      <div className="integration-disp">
          <p>We use Stripe for payments, AWS to securely store your data, and Google Analytics to provide valuable insights.</p>
         
      </div>
    </div>
  );
};

export default SeamlessInegration;
