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
       <h1 className="h1tagsseo">Efficient Job Scheduling with meMate’s Management Tools</h1>
       <div className="sales-heading client-heading timeTrajer-heading">job approval</div>
      <div className="sales-componet-content-wrapper client-component-para">
        <div className="sales-component-content ">
        <span>
        meMate streamlines job approvals by allowing businesses to manage and approve timesheets, job submissions, 
        and claims submitted by contractors. With features like job approval software, job submission tracking, 
        and workflow approval solutions, meMate ensures seamless collaboration with all your contractors. 
        Simplify approvals with tools tailored for contractor management, 
        field service management, and service business management.</span>
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
