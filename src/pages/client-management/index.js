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
    <title>Client Management Software | CRM Tools for Small Businesses in Australia</title>
    <meta property="og:title" content="Client Management Software | CRM Tools for Small Businesses in Australia" />
      <meta property="og:description" content="Streamline managing clients and prospective clients with MeMate’s cloud-based CRM software. Designed for small businesses in Australia, our tools help organise your client database and improve relationships.
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
