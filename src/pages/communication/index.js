import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/communication";
import { Helmet } from "react-helmet";

const CommunicationPage = () => {
  return (
    <>
      <Helmet>
    <title>Team Communication Tools | Enhance Collaboration with meMate’s Messaging Platform</title>
    <meta name="description" content="Improve team collaboration with MeMate’s internal communication software. Designed for Australian small businesses, our platform offers seamless messaging and collaboration tools." />
    <meta property="og:title" content="Team Communication Tools | Enhance Collaboration with meMate’s Messaging Platform" />
      <meta property="og:description" content="Improve team collaboration with MeMate’s internal communication software. Designed for Australian small businesses, our platform offers seamless messaging and collaboration tools.
    " />
</Helmet>
    <Layout>
      <SalesComponent />
      <SalesComponentFeature />
      <SmartInvestment />
      <QuestionAnswer />
    </Layout>
    </>
  );
};

export default CommunicationPage;
