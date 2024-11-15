

import "./style.css";
import { useState } from 'react';
 import style from './wiki.module.scss';
import { Helmet } from "react-helmet";


const MemateWikiComponent = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State to manage search input
  const [resources] = useState([
    { category: 'Starting a new company ', items: ['7 steps to start a successful bookkeeping business', '5 important finance analytics to track','How to value a business: Methods to use'] },
    { category: 'Your Company’s Digital Presence', items: ['Accounting basics: terms, statements & steps to get started', 'How to prepare a Profit and Loss (P&L) statement','Budget vs. forecast: 3 key differences'] },
    { category: 'Quotation and Invoicing  for small business ', items: ['How to improve employee management (2024 edition)','Your easy guide to paying employees','Timesheet automation in 5 simple steps'] },
    { category: 'Job scheduling ', items: ['ERP systems: Everything you need to know','9 step ERP implementation plan for business operators','Getting to know order management systems (OMS)'] },
  ]);

  // Function to filter items based on search query
  const filterItems = (items) =>
    items.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <>
     <Helmet>
    <title>MeMate Wiki | Business Management Practices, Tools, and Information</title>
    <meta property="og:title" content="MeMate Wiki | Business Management Practices, Tools, and Information" />
      <meta property="og:description" content="Discover business management insights on MeMate Wiki, covering job
scheduling, invoicing, quote calculations, and essential tools for success.
    " />
</Helmet>
    <div className={`${style.mainMenuPages} ${style.ResourcesPages}`}>
    <div className={style.mainHeadTitle}>
      <h1>meMate <br></br>wiki</h1>
     <p><strong>Here, we gather valuable knowledge about general business<br></br> management practices and tools, from job scheduling to <br></br>invoicing and quote calculations.</strong></p>
     <div className={style.searchFilterList}>
     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
  <path d="M23.4843 20.8714C25.0658 18.7182 26 16.06 26 13.1836C26 6.00389 20.1797 0.183594 13 0.183594C5.8203 0.183594 0 6.00389 0 13.1836C0 20.3633 5.8203 26.1836 13 26.1836C15.8772 26.1836 18.536 25.2489 20.6895 23.6666L20.6878 23.6679C20.7468 23.7479 20.8125 23.8245 20.8849 23.8969L28.5858 31.5978C29.3668 32.3789 30.6332 32.3789 31.4142 31.5978C32.1953 30.8168 32.1953 29.5504 31.4142 28.7694L23.7133 21.0685C23.6409 20.996 23.5643 20.9304 23.4843 20.8714ZM24 13.1836C24 19.2587 19.0751 24.1836 13 24.1836C6.92487 24.1836 2 19.2587 2 13.1836C2 7.10846 6.92487 2.18359 13 2.18359C19.0751 2.18359 24 7.10846 24 13.1836Z" fill="#98A2B3"/>
</svg>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={style.searchInput} 
      />
      </div>
    </div>
    <div>
      {resources.map((resource, index) => (
        <div key={index} className={style.mainGridWrap}>
          <h2>{resource.category}</h2>
          <div className={style.mainGridwtapFlex}>
            {filterItems(resource.items).map((item, idx) => (
              <div
                key={idx}
                className={`itemFlex ${style.itemFlex}`}
              >
                <div className={style.itemText}>
                  <h3>{item}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default MemateWikiComponent;
