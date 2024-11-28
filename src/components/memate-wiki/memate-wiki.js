import React, { useState, useEffect } from 'react';
import { useQuery } from "@tanstack/react-query";
import { wikiBase, wikiBaseBSearch } from "../../api/wikiApi"; 
import "./style.css";
import style from './wiki.module.scss';
import { useNavigate } from "react-router-dom";

const MemateWiki = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State to store search input
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Loading state for filtering
  const [error, setError] = useState(null); // Error state for API calls
  const navigate = useNavigate();

  const { data: wikiData = [], isLoading: initialLoading } = useQuery({
    queryKey: ['wikiBase'],
    queryFn: wikiBase,
    enabled: true,
  });

  const fetchFilteredData = async () => {
    if (searchQuery.trim() !== "") {
      setIsLoading(true);
      setError(null); // Reset error state
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

  const handleViewAllClick = (categoryId, categoryName) => {
    navigate(`/wiki/${categoryId}`, { state: { name: categoryName } });
  };

  return (
    <div className={`${style.mainMenuPages} ${style.ResourcesPages}`}>
      <div className={style.mainHeadTitle}>
        <span>meMate <br />wiki</span>
        <p>
          <strong>
            Here, we gather valuable knowledge about general business<br />
            management practices and tools, from job scheduling to <br />
            invoicing and quote calculations.
          </strong>
        </p>
        <div className={style.searchFilterList}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
            <path d="..." fill="#98A2B3" />
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
        {initialLoading || isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className={style.errorMessage}>{error}</p>
        ) : (
          (filteredData || []).map((item, index) => (
            <div key={index} className={style.mainGridWrap}>
              <div className={style.inHead}>
                <h2>{item?.name || "Unknown Category"}</h2>
                <button 
                  className={style.viewAllLink} 
                  onClick={() => handleViewAllClick(item.id, item.name)}
                >
                  View All
                </button>
              </div>
              {item.subdata && item.subdata.length > 0 && (
                <div className={style.mainGridwtapFlex}>
                  {item.subdata.map((subcategory) => (
                    <div key={subcategory.id} className={`itemFlex ${style.itemFlex}`}>
                      <div className={style.itemText}>
                        <h3 dangerouslySetInnerHTML={{ __html: subcategory.description }}></h3>
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
  );
};

export default MemateWiki;
