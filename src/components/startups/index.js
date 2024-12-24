import React from 'react'
import './style.css';
import StartupsHeader from './startups-header';
import StartupsBussinessManagement from './startups-bussiness-managment';
import StartupsCrousel from './startups-crousel';
import StartupsMoreSpecific from './startups-more-specific';
import ReadMore from './startups-read-more';
import StartupsQuesitonAndAns from './startups-question-ans';


const StartupsPageContent = () => {
  return (
    <>
    <div className='industry-page-wrapper'>
      <div className='industry-page-parent'>
        <StartupsHeader/>
        <StartupsBussinessManagement/>
        <StartupsCrousel/>
        <StartupsMoreSpecific/>
        <ReadMore/>
        <StartupsQuesitonAndAns/>
      </div>
    </div>
    </>
  )
}

export default StartupsPageContent
