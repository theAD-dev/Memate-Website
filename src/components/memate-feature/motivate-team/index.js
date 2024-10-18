import React from "react";
import Images from "../../../assests/images";
import "./style.css";
const MeMateFeatureMotivateTeam = () => {
  return (
    <div className="motivate-team-wrapper">
      <div className="efficiency-section">
        <div className="all-in-one">
          <div className="strean-line">
            <div className="boost-profits">
              <div className="operation-left">
                <p className="all-text">Powerful</p>
                <h2>Motivate</h2>
                <h1>your team</h1>

                <div className="operation-desp">
                  <p>
                  Motivate your team by showing real-time results and potential rewards for achieving targets. Encourage your employees and contractors to perform at their best.
                  </p>
                </div>
                <button className="get-started-btn">See All Features </button>
              </div>

              <div className="operation-right">
                <div className="motivate-image">
                  <img className="leptop" src={Images.macBook} />
                  <div className="mac-with-iphone">
                    <img src={Images.macWithIphone} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeMateFeatureMotivateTeam;
