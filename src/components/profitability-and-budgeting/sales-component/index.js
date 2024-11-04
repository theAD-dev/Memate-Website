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
    <div className="sales-component-wrapper">
      
       <div className="sales-heading client-heading">profitability &<br></br> budgeting  </div>
      <div className="sales-componet-content-wrapper client-component-para">
     
        <div className="sales-component-content ">
          <span>
          meMate is uniquely designed to let you set your budgeting right from the initial quotation stage, allowing you to project profitability for each project. You can then monitor every transaction related to the project and track profitability in real time.
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
