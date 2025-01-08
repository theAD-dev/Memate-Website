import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/time-tracker";
import { Helmet } from "react-helmet";

const TimeTrackerPage = () => {
  return (
    <>
     <Helmet>
    <title>Time Tracking Tools for Employees and Contractors | MeMate Business Software</title>
    <meta name="description" content="Track employee and contractor work hours effortlessly with MeMate’s Time Tracking Tools. 
      Simplify time management, boost productivity, and optimise your workforce in real-time." />
    <meta property="og:title" content="Time Tracking Tools for Employees and Contractors | MeMate Business Software" />
      <meta property="og:description" content="Track employee and contractor work hours effortlessly with MeMate’s Time Tracking Tools. 
      Simplify time management, boost productivity, and optimise your workforce in real-time.
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

export default TimeTrackerPage;
