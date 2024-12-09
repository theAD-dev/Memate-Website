import React from 'react'
import './style.css';
import IndustryHeader from './industry-header';
import IndustryBussinessManagement from './industry-bussiness-managment';
import IndustryCrousel from './industry-crousel';
import IndustryMoreSpecific from './industry-more-specific';
import ReadMore from './industry-read-more';
import IndustyQuesitonAndAns from './industry-question-ans';


const IndustryPageContent = () => {
  return (
    <>
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
