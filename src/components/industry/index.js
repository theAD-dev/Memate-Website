import React from 'react'
import './style.css';
import IndustryHeader from './industry-header';
import IndustryBussinessManagement from './industry-bussiness-managment';
import IndustryCrousel from './industry-crousel';
import IndustryMoreSpecific from './industry-more-specific';
import ReadMore from './industry-read-more';
import IndustyQuesitonAndAns from './industry-question-ans';
import { Helmet } from 'react-helmet';

const IndustryPageContent = () => {
  return (
    <>
    <Helmet>
    <title>Discover MeMate's Solutions for Your Industry Needs</title>
    <meta property="og:title" content="Discover MeMate's Solutions for Your Industry Needs" />
      <meta property="og:description" content="Explore industry specific solutions offered by MeMate. We cater to various sectors, providing tools that enhance productivity and collaboration." />
</Helmet>
    <div className='industry-page-wrapper'>
      <div className='industry-page-parent'>
        <IndustryHeader/>
        <IndustryBussinessManagement/>
        <IndustryCrousel/>
        <IndustryMoreSpecific/>
        <ReadMore/>
        <IndustyQuesitonAndAns/>
      </div>
    </div>
    </>
  )
}

export default IndustryPageContent
