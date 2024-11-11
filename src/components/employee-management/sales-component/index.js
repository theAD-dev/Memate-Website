import { Link } from "react-router-dom";
import "./style.css";
import { Helmet } from 'react-helmet';
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
      
       <div className="sales-heading client-heading">employee<br></br>management </div>
      <div className="sales-componet-content-wrapper client-component-para">
     
        <div className="sales-component-content ">
          <span>
          meMate allows you to use time tracking and clock-in/clock-out functionality 
          for your office team members, making it an all-in-one solution for managing your company’s workforce.
          </span>
        </div>

        <div className="sales-component-button-wrapper">
        <Link to='https://dev.memate.com.au/requestdemo'><button>Request a Demo</button></Link>
        </div>
      </div>
    </div>
  </>
  );
};

export default SalesComponent;
