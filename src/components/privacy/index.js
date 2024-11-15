import { useState, useEffect } from 'react';  
import "./style.css";
import MiddleSection from "./privacy-middle-section";
import style from './privacy-module.module.scss';
import { Helmet } from 'react-helmet';
const KnowledgeBaseMain = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/knowledgeBaseMain.png";

const PrivacyComponent = () => {


  return (
    <>
     <Helmet>
    <title>Learn About Our Privacy Commitment at MeMate</title>
    <meta property="og:title" content="Learn About Our Privacy Commitment at MeMate" />
      <meta property="og:description" content="At MeMate, we respect your privacy. Discover our commitment to data protection and how we handle your personal information responsibly." />
</Helmet>
      <div className={`kb-main-section ${style.mainHeadinstyle}`}>
      <h5>memate</h5>
      <h2>Privacy</h2>
      </div>
      <MiddleSection />
      <div>

      </div>
    </>
  );
};

export default PrivacyComponent;
