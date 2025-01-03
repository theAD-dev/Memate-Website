import { Link } from "react-router-dom";
import "./style.css";
import TronButton from "../../../layout/hover-button/tourn-but";
const SalesComponent = () => {
  return (
  <>
    <div className="sales-component-wrapper" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
       <h1 className="h1tagsseo">Efficient Time Tracking with MeMate’s Business Software</h1>
       <div className="sales-heading client-heading timeTrajer-heading">time tracking</div>
      <div className="sales-componet-content-wrapper client-component-para">
        <div className="sales-component-content ">
        <span>
        With meMate, you can track time for all your employees and contractors using our specially designed mobile application. 
        This feature combines the functionality of time tracking tools with real-time time tracking, allowing you to monitor work 
        hours accurately. Whether you’re managing a small business or a large team, meMate provides work hour tracking 
        solutions that include employee time management and time tracking and reporting for seamless workforce oversight.</span>
        </div>
        <div className="sales-component-button-wrapper">
        <div  className="request-btn request-btn-bg">
                <Link to="https://dev.memate.com.au/requestdemo" target="_blank" className="nav-btn--get-started navbar-link"><TronButton text="Request a Demo" /></Link>
              </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default SalesComponent;
