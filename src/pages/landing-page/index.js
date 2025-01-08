import React from "react";
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
// import NextStep from "../../components/next-step"
import SeamlessInegration from "../../components/seamless-integration"
import SimpleVersatilePowerful from "../../components/simple-versatile-powerful"
import SuccessStories from "../../components/success-stories"
import ZeroOfferOnboarding from "../../components/zero-offer-onboarding"
import Layout from "../../layout"
import { Helmet } from 'react-helmet';

const LandingPage = ({postsLatest, updates}) => {
  return (
   <>
  <Helmet>
  <title>Streamlined ERP, CRM & Project Management Software | Boost Your Business</title>
  <meta name="description" content="Simplify and grow your business with our all-in-one ERP, CRM, and project management software. Designed for small and medium enterprises to achieve efficiency and success." />
  <meta property="og:title" content="Streamlined ERP, CRM & Project Management Software | Boost Your Business" />
  <meta property="og:description" content="Discover powerful cloud-based ERP, CRM, and project management solutions tailored for SMEs. Achieve operational excellence and drive growth with ease." />
</Helmet>
    <Layout>
      <BussinessManagement/>
      <FeaturedOn/>
      <FindOneApplication/>
      <CommonChallenges/>
      <ZeroOfferOnboarding/>
      <MeMateFeatureStreamline/>
      <MemateFeatureBoastEfficiency/>
      <MeMateFinanceInsights/>
      <MeMateFeatureMotivateTeam/>
      <MeMateFeatureAgile/>
      <MeMateWorkForce/>
      <SeamlessInegration/>
      <SimpleVersatilePowerful/>
      <SuccessStories/>
      <NewsAndUpdate postsLatest={postsLatest}/>
    </Layout>
   </>
  )
}

export default LandingPage
