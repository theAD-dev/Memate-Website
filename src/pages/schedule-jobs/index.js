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
    <title>Shift Scheduling Software | Streamline Employee Rostering with MeMate</title>
    <meta property="og:title" content="Shift Scheduling Software | Streamline Employee Rostering with MeMate" />
      <meta property="og:description" content="Manage shifts effortlessly with MeMate’s Shift Scheduling Software. Simplify employee rostering,
       work schedule management, and real-time shift updates to boost workforce productivity.
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
