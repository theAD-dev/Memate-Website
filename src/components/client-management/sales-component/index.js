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
      
       <div className="sales-heading client-heading">client<br></br> management </div>
      <div className="sales-componet-content-wrapper client-component-para">
     
        <div className="sales-component-content">
          <h1>
          Effortless Client Management with Australia’s Best CRM Software
          </h1>
        </div>

        <div className="sales-component-button-wrapper">
        <div className="request-btn request-btn-center" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <Link to='https://dev.memate.com.au/requestdemo' target="_blank" className="nav-btn--get-started navbar-link"><TronButton text="Request a Demo" /></Link>
      </div>
        {/* <Link to='https://dev.memate.com.au/requestdemo'><button>Request a Demo</button></Link> */}
        </div>
      </div>
    </div>
  </>
  );
};

export default SalesComponent;
