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
       <h1 className="h1tagsseo fontWeight">Effortless Client Management with Australia’s Best CRM Software</h1>
       <div className="sales-heading client-heading">client<br></br> management </div>
      <div className="sales-componet-content-wrapper client-component-para">
     
        <div className="sales-component-content">
        <span>
        meMate - Designed as a simple cloud CRM to manage your client database. It’s easy to use and easy to navigate - a CRM for small businesses in Australia.
          </span>
        </div>

        <div className="sales-component-button-wrapper">
        <div className="request-btn request-btn-center" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <Link to='https://app.memate.com.au/requestdemo' target="_blank" className="nav-btn--get-started navbar-link"><TronRequestADemo text="Request a Demo" /></Link>
      </div>

        </div>
      </div>
    </div>
  </>
  );
};

export default SalesComponent;
