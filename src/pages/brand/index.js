import React, { useEffect } from 'react'
import Layout from '../../layout';
import BrandComponent from '../../components/brand';
const BrandPage = () => {

  useEffect(() => {
    document.body.className = 'brand-information';
    return () => { document.body.className = ''; }
  });
  return (
    <Layout>
        <BrandComponent/>
    </Layout>
  )
}


export default BrandPage;
