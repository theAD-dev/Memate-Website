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
    <title>Comprehensive Contractor Management Software | Streamline Your Contractor Operations with MeMate</title>
    <meta property="og:title" content="Comprehensive Contractor Management Software | Streamline Your Contractor Operations with MeMate" />
      <meta property="og:description" content="Discover MeMate’s Contractor Management Software designed to streamline contractor operations, enhance compliance, and improve project efficiency for businesses of all sizes." />
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
