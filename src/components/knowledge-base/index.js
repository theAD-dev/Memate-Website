import { useState, useEffect } from 'react';  
import "./style.css";
import MiddleSection from "./knowledge-base-middle-section";
import { Helmet } from 'react-helmet';
const KnowledgeBaseMain = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/knowledgeBaseMain.png";

const KnowledgeBaseComponent = () => {


  return (
    <>
    <Helmet>
    <title>MeMate Knowledge Base | User Manuals and How-To Guides</title>
    <meta name="description" content="Access the MeMate Knowledge Base for tutorials, guides, and FAQs. 
      Learn how to maximise CRM, ERP, and workflow automation tools for your Australian business" />
    <meta property="og:title" content="MeMate Knowledge Base | User Manuals and How-To Guides" />
      <meta property="og:description" content="Access the MeMate Knowledge Base for tutorials, guides, and FAQs. 
      Learn how to maximise CRM, ERP, and workflow automation tools for your Australian business" />
</Helmet>
      <div className="kb-main-section">
        <div className="kb-main-heading">knowledge <br /> base</div>
        <h1 className="metatags">MeMate Knowledge Base: Your Guide to Using Business Software</h1>
        <div className="kb-main-image KnowledgeBaseMain">
          <img src={KnowledgeBaseMain} alt="contact us main image"  />
        </div>
      </div>
      <MiddleSection />
      <div>
      </div>
    </>
  );
};

export default KnowledgeBaseComponent;
