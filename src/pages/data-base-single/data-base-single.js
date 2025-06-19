
import DataSingle from "../../components/supplier-database/single-page/single-page";
import Layout from "../../layout";
import React, { useState, useEffect } from "react";
import { redirect, useNavigate, useParams } from 'react-router-dom';
import { singlePostSupplier } from '../../api/supplierApi';

const DatabasePageSingle = () => {
  const navigation = useNavigate();
  const { slug = slug.slug } = useParams();
  const [supplierData, setSupplierData] = useState(null);
  const [loadingsingle, setLoadingSinge] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSupplierData = async () => {
      try {
        const data = await singlePostSupplier(slug);
        console.log('error FROM API', data.error);
        setSupplierData(data);
        if(data.error == 'No data at this moment') {
           navigation('/404')
          
        }
      } catch (err) {
        setError("Failed to fetch supplier data.");
      } finally {
        setLoadingSinge(false);
      }
    };

    fetchSupplierData();
  }, [slug]);

  if (loadingsingle) return <p></p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Layout>
        <DataSingle slug={slug} supplierData={supplierData} />
      </Layout>
    </>
  );
};
export default DatabasePageSingle;