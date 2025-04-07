// import { useState, useEffect } from 'react';  
import "./style.css";
import MiddleSection from "./privacy-middle-section";
import style from './privacy-module.module.scss';
import { Helmet } from 'react-helmet';
// const KnowledgeBaseMain = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/knowledgeBaseMain.png";

const PrivacyComponent = () => {


  return (
    <>
     <Helmet>
    <title>Privacy Policy | MeMate Business Management Software</title>
    <meta name="description" content="Learn how MeMate protects your data with our privacy policy. 
    Discover our commitment to data privacy and security for Australian businesses using our CRM and management software." />
    <meta property="og:title" content="Privacy Policy | MeMate Business Management Software" />
      <meta property="og:description" content="Learn how MeMate protects your data with our privacy policy. 
      Discover our commitment to data privacy and security for Australian businesses using our CRM and management software." />
</Helmet>
      <div className={`kb-main-section ${style.mainHeadinstyle}`}>
      {/* <h5>memate</h5> */}
      <h1 className="h1tagsseo2">memate</h1>
      <h2 className="privacyHeading latest-update-head">
        Privacy
      </h2>
      </div>
      <MiddleSection />
      <div>

      </div>
    </>
  );
};

export default PrivacyComponent;
