import { Link } from "react-router-dom";
import "./style.css";
import TronButton from "../../../layout/hover-button/tourn-but";
import TronRequestADemo from "../../../layout/hover-button/TronRequestADemo";
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
          <h1 className="h1tagsseo">Optimise Your Workforce with MeMate’s Employee Management Tools</h1>
       <div className="sales-heading client-heading">employee<br></br>management </div>
      <div className="sales-componet-content-wrapper client-component-para">
     
        <div className="sales-component-content ">
        <span>
        meMate allows you to use time tracking and clock-in/clock-out functionality for your office team members, making it an all-in-one solution for managing your company’s workforce.</span>
        </div>

        <div className="sales-component-button-wrapper">
        <div  className="request-btn request-btn-bg">
                <Link to="https://app.memate.com.au/requestdemo" target="_blank" className="nav-btn--get-started navbar-link"><TronRequestADemo text="Request a Demo" /></Link>
              </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default SalesComponent;
