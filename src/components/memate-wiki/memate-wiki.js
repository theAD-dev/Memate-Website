import React, { useState, useEffect } from 'react';
import { useQuery } from "@tanstack/react-query";
import { wikiBase, wikiBaseBSearch } from "../../api/wikiApi"; 
import "./style.css";
import style from './wiki.module.scss';
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

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
    <>
    <Helmet>
    <title>MeMate Wiki | Informative Guide for Australian Business Owners</title>
      <meta property="og:title" content='MeMate Wiki | Informative Guide for Australian Business Owners' />
      <meta property="og:description" content='Explore the MeMate Wiki, your go-to resource for Australian business rules, terminology, and practical tips. Simplified information tailored for small business owners.' />
      <meta property="og:image" content='https://memate-website.s3.ap-southeast-2.amazonaws.com/news/1732171638_featured-image.jpg' />
      <meta property="og:url" content='window.location.href' />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content='title' />
      <meta name="twitter:description" content='Explore the MeMate Wiki, your go-to resource for Australian business rules, terminology, and practical tips. Simplified information tailored for small business owners.'/>
      <meta name="twitter:image" content= 'https://memate-website.s3.ap-southeast-2.amazonaws.com/news/1732171638_featured-image.jpg'/>
      <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "How to find an apprenticeship?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "<p>We provide an official service to search through available apprenticeships. To get started, create an account here, specify the desired region, and your preferences. You will be able to search through all officially registered open apprenticeships.</p>"
                }
              }, {
                "@type": "Question",
                "name": "Whom to contact?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can contact the apprenticeship office through our official phone hotline above, or with the web-form below. We generally respond to written requests within 7-10 days."
                }
              }]
            }
          `}
        </script>
</Helmet>
    <div className={`${style.mainMenuPages} ${style.ResourcesPages}`}>
      <div className={style.mainHeadTitle}>
        <span>meMate <br />wiki</span>
        <p>
          <strong>
          MeMate Wiki: A Practical Guide for Australian Business Owners
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
      <div className={style.mainwikiMibile}>
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
    </>
  );
};

export default MemateWiki;
