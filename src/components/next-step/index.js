import React,{useEffect,useRef} from "react";
import "./style.css";
import { Link } from "react-router-dom";

import 'aos/dist/aos.css';
import TronButton from "../../layout/hover-button/tourn-but";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const NextStep = (props) => {
  const stickySectionRef = useRef(null);
  const buttonRef = useRef(null);


  useEffect(() => {

    if (stickySectionRef.current) {
      gsap.to(stickySectionRef.current, {
        scrollTrigger: {
          trigger: stickySectionRef.current,
          scrub: .00002,
          start: "top -60%",
          end: "top 10%",
          markers: false,
          onUpdate: (self) => {
            // Update the opacity based on the progress of the ScrollTrigger
            stickySectionRef.current.style.opacity = self?.progress + 0.5;
          }
        },
});
}

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 5,
      scrollTrigger: {
        trigger: buttonRef.current,
        scrub: false,
        markers: false,
        toggleActions: "play none none none",
        start: "top center",
      },
    });

    tl.to(buttonRef.current, {
      scale: 1.1,
      duration: 0.9,
      yoyo: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);


  return (
    <>
   
    <div
          ref={stickySectionRef}
          className="sticky-section-switch"
          style={{ opacity: 0 }}>
      <div className="apply-content">
      <div className="get-started-wrapper">
      <div className="intro-sticky"></div>
    <div className="next-step">
      <h3>Take the</h3>
      <div className="next-title">
        <h1 className="gradientAnimenate">next step</h1>
      </div>
      <div className="next-step-page-description">
        <p className="next-step-data">
          We believe in supporting Australian businesses.
        </p>
        <span className="next-step-data-description">
          Right now, we’re offering zero onboarding and migration fees for every
          legitimate Australian company.
        </span>
      </div>
      <div className="next-step-btn-container">
      <div className="request-btn request-btn-center">
        <Link to='https://dev.memate.com.au/requestdemo' target="_blank" className="nav-btn--get-started navbar-link"><TronButton text={props.text} /></Link>
      </div>
        {/* <Link to='https://dev.memate.com.au/requestdemo'><button>{props.text}</button></Link> */}
      </div>
    </div>
    </div>
      </div>
      </div>
     
      </>
    
  );
};

export default NextStep;
