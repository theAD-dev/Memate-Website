import React, { useEffect, useRef } from "react";
import Header from "../components/header2";
import Footer from "../components/footer2";
import "./style.css";
import NextStep from "../components/next-step";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom"; 

const Layout = ({ children }) => {
  const stickySectionRef = useRef(null);
  const buttonRef = useRef(null);
  const location = useLocation(); 
  const intervalRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (stickySectionRef.current) {
      gsap.set(stickySectionRef.current, { opacity: 0 });
      gsap.to(stickySectionRef.current, {
        opacity: 1,
        scrollTrigger: {
          trigger: ".apply-container",
          start: "bottom 62%",
          end: "bottom 20%",
          scrub: 0.5,
          markers: false,
          invalidateOnRefresh: true
        }
      });
    }

   
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0,
      scrollTrigger: {
        trigger: buttonRef.current,
        start: "top center",
        toggleActions: "play none none none"
      }
    });

    tl.to(buttonRef.current, {
      scale: 1.1,
      duration: 0.2,
      yoyo: true
    });

    intervalRef.current = setInterval(() => {
      if(document.readyState === 'complete') {
        ScrollTrigger.refresh();
      }
    }, 2000);

    return () => {
      clearInterval(intervalRef.current);
      ScrollTrigger.getAll().forEach(instance => instance.kill());
      
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="apply-container">
        <div className="children-wrapper">
          <div className="children">{children}</div>
        </div>
      </div>
      <div
        ref={stickySectionRef}
        className="sticky-section-switch"
        style={{ opacity: 0 }}>
        <div className="apply-content">
          <div className="get-started-wrapper">
            <div className="intro-sticky">
              <NextStep text="Book a Demo" ref={buttonRef} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;