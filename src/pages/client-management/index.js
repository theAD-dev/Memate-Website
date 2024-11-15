import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/client-management";
import { Helmet } from "react-helmet";
const ClientPage = () => {
  return (
    <>
     <Helmet>
    <title>Client Management | Pricing, MeMate Tool Benefits, and Insights</title>
    <meta property="og:title" content="Client Management | Pricing, MeMate Tool Benefits, and Insights" />
      <meta property="og:description" content="Explore MeMate’s Client Management for pricing details, tool benefits, and
insights to streamline workflows, enhance client relations, and boost productivity.
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

export default ClientPage;
