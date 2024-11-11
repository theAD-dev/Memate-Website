import React,{useEffect} from "react";
import "./style.css";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
const NextStep = (props) => {
  useEffect(() => {
    AOS.init({
        duration: 1200, // Customize animation duration as needed
    });
}, []);

  return (
    <div className="next-step"  data-aos="AnimaT"
    data-aos-offset="50"
    data-aos-delay="1000"
    data-aos-duration="5000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <h3>Take the</h3>
      <div className="next-title">
        <h1>next step</h1>
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
        <Link to='https://dev.memate.com.au/requestdemo'><button>{props.text}</button></Link>
      </div>
    </div>
  );
};

export default NextStep;
