import React from 'react'
import './style.css';
import PhotoHeader from './photo-video-header';
import PhotoBussinessManagement from './photo-video-bussiness-managment';
import PhotoCrousel from './photo-video-crousel';
import PhotoMoreSpecific from './photo-video-more-specific';
import ReadMore from './photo-video-read-more';
import PhotoQuesitonAndAns from './photo-video-question-ans';


const PhotoPageContent = () => {
  return (
    <>
    <div className='industry-page-wrapper'>
      <div className='industry-page-parent'>
        <PhotoHeader/>
        <PhotoBussinessManagement/>
        <PhotoCrousel/>
        <PhotoMoreSpecific/>
        <ReadMore/>
        <PhotoQuesitonAndAns/>
      </div>
    </div>
    </>
  )
}

export default PhotoPageContent
