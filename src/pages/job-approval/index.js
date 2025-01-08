import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/job-approval";
import { Helmet } from "react-helmet";

const JobApprovalPage = () => {
  return (
    <>
     <Helmet>
    <title>Job Approval Software for Contractor Management | Streamline Job Submissions and Claims with MeMate</title>
    <meta name="description" content="Enhance your contractor management with MeMate’s Job Approval Software. Efficiently control job submissions, 
      monitor claims, and ensure compliance to boost operational efficiency" />
    <meta property="og:title" content="Job Approval Software for Contractor Management | Streamline Job Submissions and Claims with MeMate" />
      <meta property="og:description" content="Enhance your contractor management with MeMate’s Job Approval Software. Efficiently control job submissions, 
      monitor claims, and ensure compliance to boost operational efficiency.
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
