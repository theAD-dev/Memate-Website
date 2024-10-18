import React from "react";
import Images from "../../assests/images";
import "./style.css";
const FeaturedOn = () => {
  return (
    <div className="featured-section">
      <div className="featured-text">
        <p>Featured on:</p>
        <div className="brand-names">
          <img src={Images.skyNews} />
          <img src={Images.theAustralian} />
          <img src={Images.abc} />
          <img src={Images.theGuardian} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedOn;
