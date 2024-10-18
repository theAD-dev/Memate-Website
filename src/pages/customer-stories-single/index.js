import CameraFix from "../../components/customer-stories-single/camera-fix";
import ProVinyl from "../../components/customer-stories-single/pro-vinyl";
import EliteLife from "../../components/customer-stories-single/elite-life";

import Layout from "../../layout";
import React from "react";
import { useLocation } from "react-router-dom";
import BoatWizard from "../../components/customer-stories-single/boat-wizard";
import SortedMedia from "../../components/customer-stories-single/sorted-media";

const CustomerStoriesPageSingle = () => {
  const location = useLocation();
  return (
    <Layout>
    {location.pathname === "/camera-fix" && <CameraFix />}
    {location.pathname === "/pro-vinyl" && <ProVinyl />}
    {location.pathname === "/elite-life" && <EliteLife />}
    {location.pathname === "/boat-wizard" && <BoatWizard />}
    {location.pathname === "/sorted-media" && <SortedMedia />}
   
    
    </Layout>
  );
};
export default CustomerStoriesPageSingle;

