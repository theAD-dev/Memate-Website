import React,{useEffect,useRef} from "react";
import Header from "../components/header2";
import Footer from "../components/footer2";
import "./style.css";
import NextStep from "../components/next-step";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Layout = ({ children }) => {
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
            stickySectionRef.current.style.opacity = self?.progress + 0.1;
          }
        },
});
}

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 2,
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
      duration: 0.2,
      yoyo: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
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
      <div className="apply-content" >
      <div className="get-started-wrapper">
      <div className="intro-sticky">
        <NextStep text="Request a Demo"/>
      </div>
      </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
