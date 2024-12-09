import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/employee-management";
import { Helmet } from "react-helmet";

const EmployeeManagementPage = () => {
  return (
    <>
      <Helmet>
    <title>Employee Management Software | Streamline HR Processes with MeMate</title>
    <meta property="og:title" content="Employee Management Software | Streamline HR Processes with MeMate" />
      <meta property="og:description" content="Enhance your HR operations with MeMate’s Employee Management Software. Designed for small Australian 
      businesses, our platform offers comprehensive tools for workforce management and performance tracking.
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

export default EmployeeManagementPage;
