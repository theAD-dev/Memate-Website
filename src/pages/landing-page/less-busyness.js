import React, { useState } from 'react'
import style from './less-busyness.module.scss'
import ReactPlayer from 'react-player'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import PlayIconVideo from '../../svg/PlayIconVideo';
const LessBusyness = () => {


const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
   <>
    <div className={style.shelfgradientwrap}>
    <div className={style.shelfgradient}>
    <div className={style.lessContainers}>
      <h3>More Business - Less Busyness</h3>
      <p>
        You can send a quote in just a few clicks, convert it into a project, and assign team members instantly.
        <br/>Project timelines, expenses, client chats, invoices - it’s all right here.
      </p>

      <div className={style.videoWrapper}>
      <div className={style.videoWrapper1}></div>
       <div className={style.videoWrapperv}>
<ReactPlayer
  url="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/video/memate-intro-c.mp4"
  width="100%"
  height="100%"
  controls={false}
  playing={true} 
  playsinline
  muted={true} 
  // light="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/video/intro-screen.jpg"  
  loop={true}
  className={style.reactPlayer}
/>
 <div className={style.videopopupwrap}>
   <button className={style.videoPlayIcon} onClick={onOpenModal}><PlayIconVideo /></button>
      <Modal open={open} onClose={onCloseModal} center>
       <ReactPlayer
      url="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/video/memate-intro-full.mp4"
      width="100%"
      height="100%"
      controls={false}
      playing={true} 
      playsinline
      // light="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/video/intro-screen.jpg"  
      muted={false}   
      loop={false}
     
      className={style.reactPlayer}
    />
      </Modal>
 </div>
</div>
<div className={style.videoWrapper2}></div>
<div className={style.videooverlyImage}>
        <img src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/video/video-sticky-img.png'}/>
      
      </div>
    </div>
    </div>
    </div>
    </div>
   </>
  )
}

export default LessBusyness
