import React, { useState, useEffect } from 'react';
import { useQuery } from "@tanstack/react-query";
import { wikiBase, wikiBaseBSearch } from "../../api/wikiApi"; 
import "./style.css";
import style from './wiki.module.scss';
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Oval } from 'react-loader-spinner';
const FilterIcon = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/search-filter.svg";

const MemateWiki = () => {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null); 
  const navigate = useNavigate();
  const { data: wikiData = [], isLoading: initialLoading } = useQuery({
    queryKey: ['wikiBase'],
    queryFn: wikiBase,
    enabled: true,
  });

  const fetchFilteredData = async () => {
    if (searchQuery.trim() !== "") {
      setIsLoading(true);
      setError(null); 
      try {
        const result = await wikiBaseBSearch(searchQuery);
        setFilteredData(result);
      } catch (error) {
        console.error("Error fetching filtered data:", error);
        setError("Failed to fetch data. Please try again.");
        setFilteredData([]);
      } finally {
        setIsLoading(false);
      }
    } else {
      setFilteredData(wikiData);
    }
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchFilteredData();
    }, 300); // 300ms debounce

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, wikiData]);

  const handleViewAllClick = (categoryId,titleSlug, categoryName) => {
    navigate(`/wiki/${categoryId}`, { state: { categoryName ,titleSlug} });
  };
  const handleDetailsClick = (categoryId, titleSlug, categoryName) => {
  
    navigate(`/memate-wiki/${titleSlug}`, {
      state: {
        id: categoryId, 
        slug: titleSlug, 
        name: categoryName, 
      },
    });
  };

  return (
    <>
    <Helmet>
      <title>MeMate Wiki | Business Management Practices, Tools, and Information</title>
      <meta name="description" content="Discover business management insights on MeMate Wiki, covering job scheduling, 
      invoicing, quote calculations, and essential tools for success." />
      <meta property="og:title" content='MeMate Wiki | Business Management Practices, Tools, and Information' />
      <meta property="og:description" content='Discover business management insights on MeMate Wiki, covering job scheduling, 
      invoicing, quote calculations, and essential tools for success.' />  
     </Helmet>
    <div className={`${style.mainMenuPages} ${style.ResourcesPages}`}>
    <div className={`titleHead ${style.mainHeadTitle}`}>
          <h2>meMate <br />wiki</h2>
          <h1 className="h1tagsseo" style={{ marginBottom: 76 }}>
          A Practical Guide for Australian Business Owners</h1>
          <span>
          </span>
          <h4>
          Here, we gather valuable knowledge about general business<br/> management practices and tools, from job scheduling to<br/> invoicing and quote calculations.
          </h4>
        <div className={style.searchFilterList}>
        <img style={{height: "23px", width: "23px"}} src={FilterIcon} alt='filter Icon' />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={style.searchInput}/>
        </div>
      </div>
      <div className={style.mainwikiMibile}>
        {initialLoading || isLoading ? (
          <p className='loaderBarCircle'>
          <Oval
          visible={true}
          height="40"
          width="40"
          color="#1ab2ff"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
          /></p>
        ) : error ? (
          <p className={style.errorMessage}>{error}</p>
        ) : (
          (filteredData || []).map((item, index) => (
            <div key={index} className={style.mainGridWrap}>
              <div className={style.inHead}>
                <h2>{item?.name || "Unknown Category"}</h2>
                <button 
                className={style.viewAllLink} 
                onClick={() => {
                  handleViewAllClick(item.id, item.slug, item.name);
                }}>
                View All
              </button>
              </div>
              {item.subdata && item.subdata.length > 0 && (
                <div className={style.mainGridwtapFlex}>
                  {item.subdata.map((subcategory) => (
                    <div key={subcategory.id} className={`itemFlex ${subcategory.id} ${style.itemFlex}`}>
                      <div className={style.itemText}>
                        <h3
                        onClick={() => {
                          handleDetailsClick(subcategory.id, subcategory.slug, subcategory.name);
                        }}>
                        {subcategory.title}
                      </h3>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
    </>
  );
};

export default MemateWiki;
