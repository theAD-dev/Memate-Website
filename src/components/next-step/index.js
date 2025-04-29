import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import TronButton from "../../layout/hover-button/tourn-but";
import TronRequestADemo from "../../layout/hover-button/TronRequestADemo";

const NextStep = (props) => {

  return (
    <div className="next-step">
      <h3>Take the</h3>
      <div className="next-title">
        <div className="nextStepHeading">next step</div>
      </div>
      <div className="next-step-page-description">
        <p className="next-step-data">
          We believe in supporting Australian businesses.
        </p>
        <span className="next-step-data-description">
          Right now, we’re offering zero onboarding and migration fees for every
          legitimate Australian company.
        </span>
      </div>
      <div className="next-step-btn-container">
      <div  className="request-btn request-btn-bg">
                <Link to="https://app.memate.com.au/requestdemo" target="_blank" className="nav-btn--get-started navbar-link"><TronRequestADemo text={props.text} /></Link>
              </div>

      </div>
    </div>
  );
};

export default NextStep;
