import "./style.css";
import SliderTab from "./slider-tabs";
import SliderTabMobile from "./slider-mobile";


const FindOneApplication = () => {
  return (
    <>
      <div className="one-application-sec" >
        <div className="application-heading">
          <h3>One application</h3>
        </div>
        <div className="to-replace-bold-text">
          <span className="replace-text gradientAnimenate">
            to replace
          </span><br></br>
          <span className="replace-text gradientAnimenate">
            them all
          </span>
        </div>
      </div>
      <div className="desktop-slider">
      <SliderTab /></div>
      <div className="mobile-slider">
      <SliderTabMobile />
      </div>
     
    </>
  );
};

export default FindOneApplication;
