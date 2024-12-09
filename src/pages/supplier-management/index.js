import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/supplier-management";
import { Helmet } from "react-helmet";
const SupplierManagementPage = () => {
  return (
    <>
      <Helmet>
    <title>Supplier Management Software | Optimise Vendor Relationships with meMate</title>
    <meta property="og:title" content="Supplier Management Software | Optimise Vendor Relationships with meMate" />
      <meta property="og:description" content="Enhance your procurement process with meMate’s Supplier Management Software. Streamline supplier relationships, monitor performance, and ensure compliance for Australian businesses.
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

export default SupplierManagementPage;
