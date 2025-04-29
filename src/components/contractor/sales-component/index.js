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
     <h1 className="h1tagsseo">Efficient Contractor Management Solutions with MeMate</h1>
       <div className="sales-heading client-heading">contractor<br /> management</div>
      <div className="sales-componet-content-wrapper client-component-para">
     
        <div className="sales-component-content ">
        <span>
        Easily manage a list of contractors for your company within meMate. The platform allows you to set up job contracts 
        on a job-by-job basis, ensuring clear expectations and streamlined communication. Use the meMate application to stay 
        connected with your contractors, assign tasks, and share project updates, all in one place. This feature simplifies coordination, 
        helps maintain transparency, and enhances efficiency when working with external collaborators.
        </span>
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
