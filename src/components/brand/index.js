import "./style.css";
import MiddleSection from "./brand-middle-section";
import style from './brand-module.module.scss';
import { Helmet } from 'react-helmet';
import { useEffect } from "react";
import { useLocation } from "react-router-dom"; 


const BrandComponent = () => {

  const location = useLocation(); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
     <Helmet>
    <title>Brand | MeMate Business Management Software</title>
    <meta name="description" content="Learn how MeMate protects your data with our Brand policy. 
    Discover our commitment to data Brand and security for Australian businesses using our CRM and management software." />
    <meta property="og:title" content="Brand Policy | MeMate Business Management Software" />
      <meta property="og:description" content="Learn how MeMate protects your data with our Brand policy. 
      Discover our commitment to data Brand and security for Australian businesses using our CRM and management software." />
</Helmet>
      <div className={`kb-main-section ${style.mainHeadinstyle}`}>
      {/* <h5>memate</h5> */}
      {/* <h1 className="h1tagsseo">meMate Brand </h1> */}
      <h2 className="latest-update-text latest-update-head memate-brand">
      brand <br></br>overview
      </h2>
      </div>
      <MiddleSection />
      <div>

      </div>
    </>
  );
};

export default BrandComponent;
