import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/client-management";
import NextStep from "../../components/next-step";
const ClientPage = () => {
  return (
    <Layout>
      <SalesComponent />
      <SalesComponentFeature />
      <SmartInvestment />
      <QuestionAnswer />
      <NextStep text="Request a Demo"/>
    </Layout>
  );
};

export default ClientPage;
