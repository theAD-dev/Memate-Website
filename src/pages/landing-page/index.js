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
    <title>All-in-One Business & Project Management Software | ERP & CRM Solutions</title>
    <meta property="og:title" content="All-in-One Business & Project Management Software | ERP & CRM Solutions" />
      <meta property="og:description" content="Streamline your business with Australia’s leading cloud-based ERP, CRM, and project management software. Perfect for small and medium-sized enterprises seeking efficiency and growth.
    " />
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
