import React from 'react'
import './style.css';
import ElectronicHeader from './electronic-header';
import ElectronicBussinessManagement from './electronic-bussiness-managment';
import ElectronicCrousel from './electronic-crousel';
import ElectronicMoreSpecific from './electronic-more-specific';
import ReadMore from './electronic-read-more';
import ElectronicQuesitonAndAns from './electronic-question-ans';


const ElectronicPageContent = () => {
  return (
    <>
    <div className='industry-page-wrapper'>
      <div className='industry-page-parent'>
        <ElectronicHeader/>
        <ElectronicBussinessManagement/>
        <ElectronicCrousel/>
        <ElectronicMoreSpecific/>
        <ReadMore/>
        <ElectronicQuesitonAndAns/>
      </div>
    </div>
    </>
  )
}

export default ElectronicPageContent
