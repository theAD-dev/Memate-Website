import React from 'react'
import Layout from '../../layout';
import MemateFaqsComponent from '../../components/memate-faqs';
import { Helmet } from 'react-helmet';
const MemateFaqsPage = () => {
  return (
    <>
      <Helmet>
    <title>Your Ultimate Guide to Simplifying Business Management</title>
    <meta name="description" content="Discover answers to the most commonly asked questions about managing your business efficiently. " />
    <meta property="og:title" content="Your Ultimate Guide to Simplifying Business Management" />
      <meta property="og:description" content="Discover answers to the most commonly asked questions about managing your business efficiently. 
    " />
</Helmet>
    <Layout>
        <MemateFaqsComponent/>
    </Layout>
    </>
  )
}

export default MemateFaqsPage;
