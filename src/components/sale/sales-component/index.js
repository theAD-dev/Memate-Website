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
      
      <div className="sales-heading">sales pipeline</div>
      <div className="sales-componet-content-wrapper">
        <p>Sales funnels</p>
        <div className="sales-component-content">
          <span>
            Our software provides a sales pipeline, simple and easy to use for
            small businesses. You can<br></br> see all your active quotes and
            prospects in one organised place.
          </span>
        </div>

        <div className="sales-component-button-wrapper">
        <div  className="request-btn request-btn-bg">
                <Link to="https://dev.memate.com.au/requestdemo" target="_blank" className="nav-btn--get-started navbar-link"><TronButton text="Request a Demo" /></Link>
              </div>
        {/* <Link to='https://dev.memate.com.au/requestdemo'><button>Request a Demo</button></Link> */}
        </div>
      </div>
    </div>
  </>
  );
};

export default SalesComponent;
