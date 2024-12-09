import React from 'react'
import Layout from '../../layout';
import IndustriesComponent from '../../components/industries';
import { Helmet } from 'react-helmet';
const IndustriesPage = () => {
  return (
    <>
      <Helmet>
    <title>Industries Benefiting from MeMate | ERP and Business Management Software in Australia</title>
    <meta property="og:title" content="Industries Benefiting from MeMate | ERP and Business Management Software in Australia" />
      <meta property="og:description" content="Discover how MeMate’s business management software, ERP solutions, 
      and CRM for Australian businesses help industries streamline operations, run businesses efficiently, and stay in control.
    " />
</Helmet>
    <Layout>
        <IndustriesComponent/>
    </Layout>
    </>
  )
}

export default IndustriesPage;
