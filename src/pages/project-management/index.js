import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/project-management";
import { Helmet } from "react-helmet";

const ProjectManagementPage = () => {
  return (
    <>
      <Helmet>
    <title>Project Management Software | Advanced Project Tracking & Planning Tools in Australia</title>
    <meta name="description" content="Discover MeMate’s project management software, offering advanced project tracking and planning tools. Designed for Australian businesses to streamline workflows and enhance productivity." />
    <meta property="og:title" content="Project Management Software | Advanced Project Tracking & Planning Tools in Australia" />
      <meta property="og:description" content="Discover MeMate’s project management software, offering advanced project tracking and planning tools. Designed for Australian businesses to streamline workflows and enhance productivity." />
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
