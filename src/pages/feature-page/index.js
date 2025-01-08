import Layout from "../../layout";
import { Helmet } from 'react-helmet';
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/sale";

const FeaturePage = () => {
  return (
    <>
     <Helmet>
    <title>Sales Management Software | Boost Your Sales with meMate’s CRM Tools</title>
    <meta name="description" content="Elevate your sales process with MeMate’s Sales Management Software. Track leads, manage your sales pipeline, and automate tasks to drive growth for Australian businesses" />
    <meta property="og:title" content="Sales Management Software | Boost Your Sales with meMate’s CRM Tools" />
      <meta property="og:description" content="Elevate your sales process with MeMate’s Sales Management Software. Track leads, manage your sales pipeline, and automate tasks to drive growth for Australian businesses" />
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

export default FeaturePage;
