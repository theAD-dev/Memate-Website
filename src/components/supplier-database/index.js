import React, { useEffect, useState } from 'react';
import "./style.css";
import style from './supplier-module.module.scss';
import DataBase from './database-filter';
import { Helmet } from 'react-helmet';
import { supplierListApi } from '../../api/supplierApi';
import { Link } from 'react-router-dom';
import { useDebounce } from 'primereact/hooks';
import TronButton from '../../layout/hover-button/tourn-but';

const SupplierDatabase = () => {
  const [supplier, setSupplier] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalSupplier, setTotalSupplier] = useState(0);
  const [searchTerm, debouncedValue, setSearchTerm] = useDebounce('', 600);
  const [activeLetter, debouncedLetterValue, setActiveLetter] = useDebounce('', 600);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const limit = 9;

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedValue, debouncedLetterValue]);

  useEffect(() => {
    const fetchSupplier = async () => {
      setLoading(true);
      try {
        const response = await supplierListApi(currentPage, limit, debouncedValue, debouncedLetterValue);
        const { data, total } = response;

        setTotalSupplier(total);
        if (currentPage === 1) {
          setSupplier(data);
        } else {
          setSupplier((prevSupp) => {
            const uniqueSupplier = data.filter(
              (newSupp) => !prevSupp.some((supp) => supp.id === newSupp.id)
            ) || [];
            return [...prevSupp, ...uniqueSupplier];
          });
        }
      } catch (err) {
        setError(err);
        console.error('Error fetching supplier Supplier:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSupplier();
  }, [currentPage, debouncedValue, debouncedLetterValue]);

  // Pagination handler
  const handleNext = () => {
    if (supplier.length < totalSupplier) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  return (
    <>
      <Helmet>
        <title>Australian Business Directory | List Your Business on MeMate’s Supplier Platform</title>
        <meta name="description" content="Join meMate’s Australian Business Directory to list your company as a supplier. 
        Help small businesses find trusted vendors and grow your network through our supplier database. " />
        <meta property="og:title" content="Australian Business Directory | List Your Business on MeMate’s Supplier Platform" />
        <meta property="og:description" content="Join meMate’s Australian Business Directory to list your company as a supplier. 
        Help small businesses find trusted vendors and grow your network through our supplier database." />
      </Helmet>
      <div className={`main-section ${style.mainSection}`} data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <div className="main-heading main-headingdatabase">supplier<br></br> database</div>

        <div className={`${style.supdatabaseHead} ${style.midheading}`} data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="600"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
          <h1>Connect and Grow with meMate’s Australian Business Directory</h1>
        </div>
        <div className={style.smallheading} data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
          <p>By listing your company, businesses using meMate can quickly add your company as a client or supplier with just one click. This makes it easier to connect with other businesses and provides you with greater exposure</p>
        </div>
    
        <div  className="request-btn request-btn-bg">
                <Link to="/add-your-company" className="nav-btn--get-started navbar-link"><TronButton text="Add Your Company" /></Link>
              </div>
          {/* <Link to='/add-your-company'>Add Your Company</Link> */}
     
      </div>
      <div className={style.filtersection} data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <div className={style.midheading}>
          <p>Find the business you need</p>
        </div>
        <div className={style.databaseWrapper} >
          <DataBase
            supplier={supplier}
            loading={loading}
            totalSupplier={totalSupplier}
            error={error}
            onNext={handleNext}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            activeLetter={activeLetter}
            setActiveLetter={setActiveLetter}
          />
        </div>
      </div>
    </>
  )
}

export default SupplierDatabase;
