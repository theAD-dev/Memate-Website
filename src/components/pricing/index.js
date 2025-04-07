import React from "react";
import style from "./pricing-module.module.scss";
import PricingLightTable from "./pricingtable/pricing-light-table";
import { Helmet } from "react-helmet";
import PricingTable from "./dark-pricing-table";

const pricingMainImg =
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/pricingbg-banner.png";
// https://res.cloudinary.com/dc6sud4gw/image/upload/v1743419983/pricingbg-banner_pn1zbp.png
// optimised - https://res.cloudinary.com/dc6sud4gw/image/upload/v1743420789/pricingbg-banner_wxxoiv.png
// original - https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/pricingbg-banner.png

const PricingComponent = () => {
  return (
    <>
      <Helmet>
        <title>
          meMate Price | Affordable Business & Project Management Software for
          Businesses and Startups
        </title>
        <meta
          name="description"
          content="Discover cost-effective pricing for meMate, Australia’s best project management and business management software. Perfect for startups and small businesses, offering ERP, CRM, and workflow automation tools."
        />
        <meta
          property="og:title"
          content="meMate Price | Affordable Business & Project Management Software for Businesses and Startups"
        />
        <meta
          property="og:description"
          content="Discover cost-effective pricing for meMate, Australia’s best project management and business management software. Perfect for startups and small businesses, offering ERP, CRM, and workflow automation tools.
    "
        />
      </Helmet>
      <div
        className={`main-section ${style.mainsectionspace} ${style.mainSection}`}
      >
        <div className={style.mainheading}>pricing</div>
        <div className={style.mainimage}>
          {/* <img src={pricingMainImg} alt="Pricing main image" width={380} /> */}
          <img
            srcSet={`${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/pricing3x.png'} 600w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/pricing2x.png'} 1200w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/pricing1x.png'} 1800w`}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/pricing3x.png'}
            alt="Pricing main image"
            width={380}
          />
        </div>
        <div className={style.midheading}>
          <h1>Affordable Pricing for Small Businesses & Startups</h1>
        </div>
        <div className={style.smallheading}>
          <h2>Simple, transparent pricing</h2>
          <p>
            We offer a 14-day free trial because we’re confident our software
            will become indispensable to your business
          </p>
        </div>
      </div>

      <PricingTable />
      <PricingLightTable />

      <div className={style.questionText}>
        <h2>
          What you get is <br></br> Affordable Pricing for Small Businesses &
          Startups
        </h2>
        <p>
          meMate is an indispensable business tool designed to run your
          business, saving you time and money. It identifies unprofitable
          activities, manages your employees and contractors, and keeps them
          motivated.{" "}
        </p>
        <br></br>{" "}
        <p>
          This unique application sets a new standard for Australian companies.
          When you try it, you will clearly see the benefits, and it will become
          a fundamental tool for you.
        </p>
      </div>
    </>
  );
};

export default PricingComponent;
