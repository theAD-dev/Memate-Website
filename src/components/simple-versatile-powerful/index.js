import React from "react";
import PostCard from "./post";
import Images from "../../assests/images";
import "./style.css";
const SimpleVersatilePowerful = () => {
  return (
    <div className="simple-box">
      <div className="section-heading">
        <h2>Simple. Versatile. Powerful.</h2>
      </div>
      <div className="powerful-client-wrapper">
        <div className="powerful-client">
          <PostCard
            userImage={<img src={Images.owners} />}
            storiesDisp="Built for regular business owners"
          />

          <PostCard
            userImage={<img src={Images.industries} />}
            storiesDisp="Suitable for 90% of all industries"
          />

          <PostCard
            userImage={<img src={Images.business} />}
            storiesDisp="Redefining the way business operates"
          />
        </div>
      </div>
    </div>
  );
};

export default SimpleVersatilePowerful;
