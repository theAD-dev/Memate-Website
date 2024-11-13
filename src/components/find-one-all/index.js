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
        backgroundImage: "linear-gradient(90deg, #FFB258 0%, #1AB2FF 50%, #FFB258 100%, #FFB258 200%)",
        duration: 1,
        scrollTrigger: {
          trigger: element,
          markers: false,
          scrub: false,
          toggleActions: "play reset play reset",
          start: "top center",  
          end: "center top"     
        }
      });
    });

  }, []);

  return (
    <>
      <div className="one-application-sec" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1100"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <div className="application-heading">
          <h3>One application</h3>
        </div>
        <div className="to-replace-bold-text">
          <h1 className="replace-text gradientAnimenate">
            to replace <br />
            them all
          </h1>
        </div>
      </div>
      <SliderTab />
     
    </>
  );
};

export default FindOneApplication;
