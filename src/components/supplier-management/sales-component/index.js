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
      <h1 className="h1tagsseo">Streamline Your Procurement with Advanced Supplier Management Tools</h1>
       <div className="sales-heading client-heading">supplier<br></br> management </div>
      <div className="sales-componet-content-wrapper client-component-para">
     
        <div className="sales-component-content">
        <span>
        meMate - Designed as a simple cloud CRM to manage your Supplier database. It’s easy to use and easy to navigate - a CRM for small businesses in Australia. </span>
        </div>

        <div className="sales-component-button-wrapper">
        <div  className="request-btn request-btn-bg">
                <Link to="https://app.memate.com.au/requestdemo" target="_blank" className="nav-btn--get-started navbar-link"><TronRequestADemo text="Request a Demo" /></Link>
              </div>
        {/* <Link to='https://dev.memate.com.au/requestdemo'><button>Request a Demo</button></Link> */}
        </div>
      </div>
    </div>
  </>
  );
};

export default SalesComponent;
