
import DataSingle from "../../components/supplier-database/single-page/single-page";
import Layout from "../../layout";
import React,{useState,useEffect} from "react";
import { useParams } from 'react-router-dom';
import { singlePostSupplier } from '../../api/supplierApi';

const DatabasePageSingle = () => {
  const { slug =slug.slug } = useParams();
  const [supplierData, setSupplierData] = useState(null);
 
 
  const [loadingsingle, setLoadingSinge] = useState(true);
  const [error, setError] = useState(null);
 

  useEffect(() => {
    const fetchSupplierData = async () => {
      try {
        const data = await singlePostSupplier(slug);
        setSupplierData(data);
      } catch (err) {
        setError("Failed to fetch supplier data.");
      } finally {
        setLoadingSinge(false);
      }
    };

    fetchSupplierData();
  }, [slug]);

  if (loadingsingle) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
<>

<Layout>
<DataSingle slug={slug} supplierData ={supplierData}/>
</Layout>
</>
  );
};
export default DatabasePageSingle;