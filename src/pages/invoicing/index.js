import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/invoicing";
import { Helmet } from "react-helmet";

const ProjectManagementPage = () => {
  return (
    <>
      <Helmet>
    <title>Invoicing Software | Seamless Billing Solutions for your Businesses in Australia</title>
    <meta name="description" content="Streamline your invoicing with MeMate’s online billing software. 
      Designed for Australian small businesses, our tools simplify quoting, invoicing, and payment tracking." />
    <meta property="og:title" content="Invoicing Software | Seamless Billing Solutions for your Businesses in Australia" />
      <meta property="og:description" content="Streamline your invoicing with MeMate’s online billing software. 
      Designed for Australian small businesses, our tools simplify quoting, invoicing, and payment tracking.
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

export default ProjectManagementPage;
