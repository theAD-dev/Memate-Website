import React from 'react'
import style from './coming-soon-module.css';
import Images from "../assests/images";

const ComingSoon = () => {
  return (
    <div className={`ComingSonnBg`} style={{ backgroundImage: `url(${Images.backgroundPattern})` }}>
<h1>coming <br></br>soon</h1>
<p>We couldn’t wait to launch our updated website, so a few sections are still under construction. Stay tuned—new content is on its way!</p>
<img src={Images.comingsoonPic} alt={Images.comingsoonPic} />
      </div>
    
    
    
  )
}

export default ComingSoon