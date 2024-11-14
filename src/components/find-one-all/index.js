import { useEffect } from "react";

import "./style.css";
import SliderTab from "./slider-tabs";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const FindOneApplication = () => {
  useEffect(() => {
    // Select all elements with the class 'gradient-text-animate'
    const gtAnimate = gsap.utils.toArray('.gradientAnimenate');

    // Apply GSAP animation to each element
    gtAnimate.forEach((element) => {
      gsap.to(element, {
        // backgroundImage: "linear-gradient(175deg, #1AB2FF 33.15%, #FFB258 62%)",
        backgroundImage:"linear-gradient(90deg, #1ab2ff 0%, #65b2c9 45%, #FFB258 65%, #FFB258 100%)", 
        
        // background: "linear-gradient(to right, #1AB2FF 33.15%, #FFB258 62%)",
        duration: 1,
        scrollTrigger: {
          trigger: element,
          markers: false,
          scrub: false,
          toggleActions: "play reset play reset",
          start: "center bottom",  
          end: "bottom top"     
        }
      });
    });

  }, []);

  return (
    <>
      <div className="one-application-sec" >
        <div className="application-heading">
          <h3>One application</h3>
        </div>
        <div className="to-replace-bold-text">
          <span className="replace-text gradientAnimenate">
            to replace
          </span><br></br>
          <span className="replace-text gradientAnimenate">
            them all
          </span>
        </div>
      </div>
      <SliderTab />
     
    </>
  );
};

export default FindOneApplication;
