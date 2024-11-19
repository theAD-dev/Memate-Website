import React, { useState,} from 'react';
import {useQuery } from "@tanstack/react-query";
import { wikiBase } from "../../api/wikiApi"; 
import "./style.css";
import style from './wiki.module.scss';


const MemateWiki = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null)
  console.log('selectedCategoryId: ', selectedCategoryId);
    const { data: wikiData } = useQuery({
        queryKey: ['wikiBase'],
        queryFn: wikiBase,
        enabled: true, 
    });

   const handleViewAllClick = (categoryId) => {
        setSelectedCategoryId(categoryId);
    };
    
    return (
        <div>
             <div className={`${style.mainMenuPages} ${style.ResourcesPages}`}>
    <div className={style.mainHeadTitle}>
      <h1>meMate <br></br>wiki</h1>
     <p><strong>Here, we gather valuable knowledge about general business<br></br> management practices and tools, from job scheduling to <br></br>invoicing and quote calculations.</strong></p>
     {/* <div className={style.searchFilterList}>
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
      </div> */}
    </div>
    <div>
    {wikiData && wikiData.map((item, index) => (
       <div key={index} className={style.mainGridWrap}>
       <div className={style.inHead}>
       <h2>{item.category.name}</h2>
       
       <button 
                                className={style.viewAllLink} 
                                onClick={() => handleViewAllClick(item.category.id)}
                            >
                                View All
                            </button></div>
       {item.subcategories.data && item.subcategories.data.length > 0 && (
         <div className={style.mainGridwtapFlex}>
           {item.subcategories.data.map((subcategory) => {
            console.log('subcategory: ', subcategory);
             // Clean the description
           
             const cleanDescription = subcategory.description
               ? subcategory.description.replace('<p>', '').replace('</p>', '')
               : '';
     
             return (
               <div key={subcategory.id} className={`itemFlex ${style.itemFlex}`}>
                 <div className={style.itemText}>
                   <h3>{cleanDescription}</h3>
                 </div>
               </div>
             );
           })}
         </div>
       )}
     </div>
     
      ))}
    </div>
    </div>
            
        </div>
    );
};

export default MemateWiki;
