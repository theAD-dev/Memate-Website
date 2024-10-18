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

const LandingPage = ({postsLatest,updates}) => {
 


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
      <MemateFeatureBoastEfficiency/>
      <MeMateFinanceInsights/>
      <MeMateFeatureMotivateTeam/>
      <MeMateFeatureAgile/>
      <MeMateWorkForce/>
      <SeamlessInegration/>
      <SimpleVersatilePowerful/>
      <SuccessStories/>
      <NewsAndUpdate postsLatest={postsLatest}/>
      <NextStep text="Request a Demo"/>
    </Layout>
   </>
  )
}

export default LandingPage
