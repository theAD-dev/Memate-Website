import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/reports";
import { Helmet } from "react-helmet";

const ReportsPage = () => {
  return (
    <>
      <Helmet>
    <title>Comprehensive Business Analytics & Reporting Tools | meMate</title>
    <meta property="og:title" content="Comprehensive Business Analytics & Reporting Tools | meMate" />
      <meta property="og:description" content="Unlock real-time business insights with MeMate’s comprehensive reporting tools. Designed for Australian businesses, our software offers financial reporting, project performance analysis, and more to drive informed decisions.
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

export default ReportsPage;
