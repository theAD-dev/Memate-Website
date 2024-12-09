import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/profitability-and-budgeting";
import { Helmet } from "react-helmet";

const ProfitabilityAndBudgetingPage = () => {
  return (
    <>
      <Helmet>
    <title>Profitability Analysis & Budgeting Software | meMate Financial Planning Tools</title>
    <meta property="og:title" content="Profitability Analysis & Budgeting Software | meMate Financial Planning Tools" />
      <meta property="og:description" content="Enhance your financial planning with MeMate’s profitability analysis and budgeting software. Designed for Australian businesses, our tools provide comprehensive budgeting solutions and financial insights.
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

export default ProfitabilityAndBudgetingPage;
