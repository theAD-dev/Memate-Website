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
      <h1 className="h1tagsseo">Optimise Financial Performance with MeMate’s Profitability and Budgeting Tools</h1>
       <div className="sales-heading client-heading">profitability &<br></br> budgeting  </div>
      <div className="sales-componet-content-wrapper client-component-para">
     
        <div className="sales-component-content ">
        <span>
        meMate is uniquely designed to let you set your budgeting right from the initial quotation stage, allowing you to project profitability for each project. You can then monitor every transaction related to the project and track profitability in real time.</span>
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
