import { useState } from "react";

import "./style.css";
import SliderTab from "./slider-tabs";

const FindOneApplication = () => {

  return (
    <>
      <div className="one-application-sec">
        <div className="application-heading">
          <h3>One application</h3>
        </div>
        <div className="to-replace-bold-text">
          <h1 className="replace-text">
            to replace <br />
            them all
          </h1>
        </div>
      </div>
      <SliderTab />
     
    </>
  );
};

export default FindOneApplication;
