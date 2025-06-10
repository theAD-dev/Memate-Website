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

  const handleViewAllClick = (categoryId,titleSlug, categoryName,cameta_title,cameta_description,cah1,cah2) => {
    navigate(`/memate-wiki/${titleSlug}`, { 
      state: { 
        categoryName ,
        categoryId,
        titleSlug,
        cameta_title,
        cameta_description,
        cah1,
        cah2

      } });
  };
  const handleDetailsClick = (categoryId, titleSlug,subSlug, categoryName) => {
    
    
    navigate(`/memate-wiki/${subSlug}/${titleSlug}`, {
      state: {
        id: categoryId, 
        slug: titleSlug, 
        Slug: subSlug,
        name: categoryName, 
      },
    });
  };

  return (
    <>
    <Helmet>
      <title>MeMate Wiki | Business Tips & Insights for Aussie SMEs</title>
      <meta name="description" content="Practical business advice, growth tips and industry insights for Australian businesses. The MeMate Wiki helps you build, run and grow smarter." />
      <meta property="og:title" content='MeMate Wiki | Business Tips & Insights for Aussie SMEs' />
      <meta property="og:description" content='Practical business advice, growth tips and industry insights for Australian businesses. The MeMate Wiki helps you build, run and grow smarter.' />  
     </Helmet>
    <div className={`${style.mainMenuPages} ${style.ResourcesPages}`}>
    <div className={`titleHead ${style.mainHeadTitle}`}>
          <h2>meMate <br />wiki</h2>
          <h1 className="h1tagsseow">
          Business Tips & Insights for Aussie SMEs</h1>
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
                  handleViewAllClick(item.id, item.slug, item.name,item.meta_title,item.meta_description,item.h1,item.h2);
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
                          handleDetailsClick(subcategory.id, subcategory.slug,item.slug, subcategory.name);
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
