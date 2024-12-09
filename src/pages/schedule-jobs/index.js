import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/schedule-jobs";
import { Helmet } from "react-helmet";

const CommunicationPage = () => {
  return (
    <>
     <Helmet>
    <title>Job Scheduling Software | Efficient Job Management Tools for Australian Businesses</title>
    <meta property="og:title" content="Job Scheduling Software | Efficient Job Management Tools for Australian Businesses" />
      <meta property="og:description" content="Schedule and manage jobs seamlessly with MeMate’s job scheduling software. 
      Designed for Australian small businesses, our tools simplify task allocation and improve efficiency
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
