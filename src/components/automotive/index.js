import React from 'react'
import './style.css';
import AutomotiveHeader from './automotive-header';
import AutomotiveBussinessManagement from './automotive-bussiness-managment';
import AutomotiveCrousel from './automotive-crousel';
import AutomotiveMoreSpecific from './automotive-more-specific';
import ReadMore from './automotive-read-more';
import AutomotiveQuesitonAndAns from './automotive-question-ans';


const AutomotivePageContent = () => {
  return (
    <>
    <div className='industry-page-wrapper'>
      <div className='industry-page-parent'>
        <AutomotiveHeader/>
        <AutomotiveBussinessManagement/>
        <AutomotiveCrousel/>
        <AutomotiveMoreSpecific/>
        <ReadMore/>
        <AutomotiveQuesitonAndAns/>
      </div>
    </div>
    </>
  )
}

export default AutomotivePageContent
