import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/contractor";
import { Helmet } from "react-helmet";

const ContractorPage = () => {
  return (
    <>
      <Helmet>
    <title>contractor management</title>
    <meta property="og:title" content="contractor management" />
      <meta property="og:description" content="contractor management
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

export default ContractorPage;
