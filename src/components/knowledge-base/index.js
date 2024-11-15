import { useState, useEffect } from 'react';  
import "./style.css";
import MiddleSection from "./knowledge-base-middle-section";
import { Helmet } from 'react-helmet';
const KnowledgeBaseMain = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/knowledgeBaseMain.png";

const KnowledgeBaseComponent = () => {


  return (
    <>
    <Helmet>
    <title>MeMate Knowledge Base: Help and Resources for You</title>
    <meta property="og:title" content="MeMate Knowledge Base: Help and Resources for You" />
      <meta property="og:description" content="Discover helpful articles and guides in our knowledge base. Find answers to your questions and enhance your experience with our tools." />
</Helmet>
      <div className="kb-main-section">
        <div className="kb-main-heading">
          knowledge <br /> base
        </div>
        <div className="kb-main-image">
          <img src={KnowledgeBaseMain} alt="contact us main image" width={595} height={789} />
        </div>
      </div>
      <MiddleSection />
      <div>
      </div>
    </>
  );
};

export default KnowledgeBaseComponent;
