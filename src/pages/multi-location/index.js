import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/multi-location";
import { Helmet } from "react-helmet";

const JobApprovalPage = () => {
  return (
    <>
     <Helmet>
    <title>Home</title>
    <meta name="description" content="" />
    <meta property="og:title" content="" />
      <meta property="og:description" content=".
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

export default JobApprovalPage;
