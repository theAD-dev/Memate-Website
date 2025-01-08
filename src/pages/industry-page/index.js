import React from 'react'
import Layout from '../../layout'
import IndustryPageContent from '../../components/industry'
import { Helmet } from 'react-helmet'

const IndustryPage = () => {
  return (
    <>
      <Helmet>
    <title>Business Management Software for Creative Agencies | Streamline Projects & Workflow</title>
    <meta name="description" content="MeMate helps creative agencies manage projects, automate workflows, and build client relationships. Explore software designed to run creative businesses efficiently in Australia." />
    <meta property="og:title" content="Business Management Software for Creative Agencies | Streamline Projects & Workflow" />
      <meta property="og:description" content="MeMate helps creative agencies manage projects, automate workflows, and build client relationships. Explore software designed to run creative businesses efficiently in Australia.
    " />
</Helmet>
    <Layout>
      <IndustryPageContent/>
    </Layout>
    </>
  )
}

export default IndustryPage
