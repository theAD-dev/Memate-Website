import { Link } from "react-router-dom";
import "./style.css";
import { Helmet } from 'react-helmet';
import TronButton from "../../../layout/hover-button/tourn-but";
const SalesComponent = () => {
  return (
  <>
  <Helmet>
    <title>Unlock MeMate's Features for Seamless Project Management</title>
    <meta property="og:title" content="Unlock MeMate's Features for Seamless Project Management" />
      <meta property="og:description" content="Explore innovative features that transform your workflow. MeMate provides the tools you need to manage projects efficiently and effectively.
    " />
</Helmet>
    <div className="sales-component-wrapper" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      
       <div className="sales-heading client-heading">invoicing</div>
      <div className="sales-componet-content-wrapper client-component-para">
     
        <div className="sales-component-content ">
          <span>
          meMate allows you to convert every approved quote into an invoice, manage your company’s invoices, mark payments, and chase unpaid invoices effortlessly.
          </span>
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
