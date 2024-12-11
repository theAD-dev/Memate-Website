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
       <h1 className="h1tagsseo">Gain Real-Time Insights with MeMate’s Business Reporting Tools </h1>
       <div className="sales-heading client-heading">reports  </div>
      <div className="sales-componet-content-wrapper client-component-para">
     
        <div className="sales-component-content ">
        <span>
        meMate provides a quick and easy overview of your business activities, goals, and monthly targets. Its user-friendly interface allows you to easily compare performance and track progress. </span>
        
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
