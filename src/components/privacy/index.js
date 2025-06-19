// import { useState, useEffect } from 'react';  
import "./style.css";
import MiddleSection from "./privacy-middle-section";
import style from './privacy-module.module.scss';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";

const PrivacyComponent = () => {


  return (
    <>
     <Helmet>
    <title>Privacy Policy | MeMate Business Management Software</title>
    <meta name="description" content="Learn how MeMate collects, stores, and protects your data. Our privacy policy explains your rights and how we keep your business information safe." />
    <meta property="og:title" content="Privacy Policy | MeMate Business Management Software" />
      <meta property="og:description" content="Learn how MeMate collects, stores, and protects your data. Our privacy policy explains your rights and how we keep your business information safe." />
</Helmet>
         <div className="conditionWrrapperF">
                     <div className="pageBreadcrumbs">
                          <ul>
                            <li><a href="/">Home</a></li>/<li> <a className="MainPageLink" to="/privacy">Privacy</a></li>
                          </ul>
                          <a href="/" className="backButStories"><img src={arrowIconBack} alt="Arrow" /> Back</a>
                        </div>
                <div className="tmsheadF">
                 <p className="tos-section-headingF" id="section1">
                   memate
                 </p>
                <h1 className="blackH1Tag">Privacy</h1>
             </div>
             </div>
      <MiddleSection />
      <div>

      </div>
    </>
  );
};

export default PrivacyComponent;
