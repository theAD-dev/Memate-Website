import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BussinessManagement from "../../components/bussiness-management"
import CommonChallenges from "../../components/common-challenges"
import FeaturedOn from "../../components/featured-on"
import FindOneApplication from "../../components/find-one-all"
import MeMateFeatureAgile from "../../components/memate-feature/agile"
import MemateFeatureBoastEfficiency from "../../components/memate-feature/boast-efficiency"
import MeMateFinanceInsights from "../../components/memate-feature/finance-insights"
import MeMateFeatureMotivateTeam from "../../components/memate-feature/motivate-team"
import MeMateFeatureStreamline from "../../components/memate-feature/streamline-operations"
import MeMateWorkForce from "../../components/memate-feature/workforce"
import NewsAndUpdate from "../../components/news-and-updates"
import NextStep from "../../components/next-step"
import SeamlessInegration from "../../components/seamless-integration"
import SimpleVersatilePowerful from "../../components/simple-versatile-powerful"
import SuccessStories from "../../components/success-stories"
import ZeroOfferOnboarding from "../../components/zero-offer-onboarding"
import Layout from "../../layout"
import { Helmet } from 'react-helmet';

gsap.registerPlugin(ScrollTrigger);


const LandingPage = ({postsLatest, updates}) => {
  const stickySectionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {

    if (stickySectionRef.current) {
      gsap.to(stickySectionRef.current, {
        scrollTrigger: {
          trigger: stickySectionRef.current,
          scrub: 1,
          start: "top 45%",
          end: "top 30%",
          markers: false, 
        },
        opacity: 1,
        duration: 1, 
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
    <Helmet>
    <title>Memate: Efficient Project & Business Management Software</title>
    <meta property="og:title" content="Memate: Efficient Project & Business Management Software" />
      <meta property="og:description" content="Meta Description- Streamline your business operations with our all in one project and business management software. Track tasks, collaborate, and manage projects efficiently.
    " />
  </Helmet>
    <Layout>
      <BussinessManagement/>
      <FeaturedOn/>
      <FindOneApplication/>
      <CommonChallenges/>
      <ZeroOfferOnboarding/>
      <MeMateFeatureStreamline/>
      <div className="apply-container">
      <MemateFeatureBoastEfficiency/>
      <MeMateFinanceInsights/>
      <MeMateFeatureMotivateTeam/>
      <MeMateFeatureAgile/>
      <MeMateWorkForce/>
      <SeamlessInegration/>
      <SimpleVersatilePowerful/>
      <SuccessStories/>
      <NewsAndUpdate postsLatest={postsLatest}/>
      </div>
      <div
          ref={stickySectionRef}
          className="sticky-section-switch"
          style={{ opacity: 0 }}>
      <div className="apply-content">
      <div className="get-started-wrapper">
      <div className="intro-sticky">
        <NextStep text="Request a Demo"/>
      </div>
      </div>
      </div>
      </div>
   
    
      {/* <div className="btn-tron-big" ref={buttonRef}>
          <span>Get Started</span>
        </div> */}
    </Layout>
   </>
  )
}

export default LandingPage
