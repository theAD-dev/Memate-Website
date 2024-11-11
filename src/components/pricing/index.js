import React from 'react';
import style from './pricing-module.module.scss';
import NextStep from "../next-step"

import PricingLightTable from './pricingtable/pricing-light-table';
import { Helmet } from 'react-helmet';
import PricingTable from './dark-pricing-table';

const pricingMainImg = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/pricingMainImg.png"

const PricingComponent = () => {
  return (
    <>
      <Helmet>
    <title>Affordable Plans of Project and Business Management Software</title>
    <meta property="og:title" content="Affordable Plans of Project and Business Management Software" />
      <meta property="og:description" content="Simple, transparent pricing of project management software. Find a plan that suits your workflow and helps streamline your operations.
    " />
</Helmet>
    <div className={`main-section ${style.mainSection}`}>
        <div className={style.mainheading}>Pricing</div>
        <div className={style.mainimage}><img src={pricingMainImg} alt="Pricing main image" width={767} height={767}/></div>
        <div className={style.midheading}>
          <p>Simple, transparent pricing</p>
        </div>
        <div className={style.smallheading}>
          <p>Plus, we provide a 14-day free trial because we believe our software will become indispensable to your business.</p>
        </div>
    
      </div>
    
     <PricingTable />
      <PricingLightTable />
   
      <div className={style.questionText}>
        <h2>What you get is</h2>
        <p>meMate is an indispensable business tool designed to run your business, saving you time and money. It identifies unprofitable activities, manages your employees and contractors, and keeps them motivated. </p>
       <br></br> <p>This unique application sets a new standard for Australian companies.
        When you try it, you will clearly see the benefits, and it will become a fundamental tool for you.</p>
      </div>
     <NextStep text="Request a Demo"/>
    </>
  )
}

export default PricingComponent;
