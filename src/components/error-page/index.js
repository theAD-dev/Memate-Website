import React from 'react'
import style from './404Page.module.scss';
import Images from "../../assests/images";
import { Link } from "react-router-dom";
import arrowIconBack from "../../assests/icons/arrowIconBack.svg";

const PageNotFound  = () => {
  return (
    <div className={`${style.Errorpage}`}>
    <div className={`${style.imgText}`}>
        <h1>404</h1>
        <img className={style.images} src={Images.PngwingPic} alt={Images.PngwingPic} />
      </div>
    <div className={`${style.TextHead}`}>
        <h2>We can’t find this page</h2>
        <p>The page you are looking for doesn't exist or has been moved.</p>
        <div className={`${style.button}`}>
        <Link to="/" ><img src={arrowIconBack} alt="Arrow" /> <span>Back</span></Link>
        <Link to="/" >Home</Link>
      </div>
      </div>
      </div>
    
    
    
  )
}

export default PageNotFound 