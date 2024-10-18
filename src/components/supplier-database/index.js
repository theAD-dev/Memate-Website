import React from 'react';
import "./style.css";
import style from './supplier-module.module.scss';
import DataBase from './database-filter';
import { Helmet } from 'react-helmet';

const SupplierDatabase = () => {

  return (
    <>
     <Helmet>
    <title>Supplier Database: Connect with Quality Providers</title>
    <meta property="og:title" content="Supplier Database: Connect with Quality Providers" />
      <meta property="og:description" content="Explore our extensive Supplier Database! Discover reliable suppliers that meet your requirements, ensuring quality and efficiency for your projects." />
</Helmet>
      <div className={`main-section ${style.mainSection}`}>
        <div className="main-heading">Supplier<br></br> Database</div>
       
        <div className={style.midheading}>
          <p>Database of Companies Presented in meMate</p>
        </div>
        <div className={style.smallheading}>
          <p>By listing your company, businesses using meMate can quickly add your company as a client or supplier with just one click. This makes it easier to connect with other businesses and provides you with greater exposure</p>
        </div>
        <div className={style.darkButtonstyle}>
          <button>Add Your Company</button>
        </div>
      </div>
      <div className={style.filtersection}>
      <div className={style.midheading}>
          <p>Find the business you need</p>
        </div>  
        <div className={style.databaseWrapper}>
        <DataBase/>
        </div>
      </div>
    </>
  )
}

export default SupplierDatabase;
