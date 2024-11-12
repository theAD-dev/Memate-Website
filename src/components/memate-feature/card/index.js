import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import TronButton from "../../../layout/hover-button/tourn-but";

const FeatureCard = (props) => {
 
  return (
    <>
      <div className="all-in-one allinonefeatueWrap" >
        <div className="strean-line">
          <div className="main-operation">
            <div className="operation-left">
              <p className="all-text">{props.subHeading}</p>
              <h2>{props.topHeading}</h2>
              <h1>{props.mainHeading}</h1>

              <div className="operation-desp">
                <p>{props.description}</p>
              </div>
              <div className="request-btn request-btn-bg" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <Link to='/features' className="nav-btn--get-started navbar-link"><TronButton text={props.cardButton} /></Link>
      </div>
              {/* <Link to="https://dev.memate.com.au/onboarding"><button className="get-started-btn">{props.cardButton}</button></Link> */}
            </div>

            <div className="operation-right">
              <h1> {props.titleImage} </h1>
              <div className="boost-image">{props.maxImage}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
