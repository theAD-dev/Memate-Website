import React, { useEffect } from "react";
import { Link, useParams,useLocation  } from "react-router-dom";
import style from './wiki.module.scss';
import { useQuery } from "@tanstack/react-query";
import { wikiBaseId,wikiBase } from "../../api/wikiApi"; 
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";
     const WikiSinglePage = () => {
     const navigate = useNavigate();
    const location = useLocation();
    const { categoryId: categorySlug } = useParams();
    const { categoryName} = location.state || {};

    const { data: wikiData = [] } = useQuery({
    queryKey: ['wikiBase'],
    queryFn: wikiBase,
    enabled: true,
    });


const selectedCategory = wikiData.find(cat => cat.slug === categorySlug);
const idData = selectedCategory ? `${selectedCategory.id}/${selectedCategory.name}` : null;
   
    const { data: wikiBaseIdData } = useQuery({
    queryKey: ['wikiBaseId', idData],
    queryFn: () => wikiBaseId(idData),
    enabled: !!idData,
    });
    const handleDetailsClick = (categoryName,subSlug, titleSlug) => {
        navigate(`/memate-wiki/${titleSlug}`, { state: { categoryName,subSlug, titleSlug } });
    };

    return (
        <>
        {selectedCategory && (
        <Helmet>
            <title>{selectedCategory.meta_title || "Wiki Title"}</title>
            <meta name="description" content={selectedCategory.meta_description || "Wiki Description"} />
            <meta property="og:title" content={selectedCategory.meta_title || "Wiki Title"} />
            <meta property="og:description" content={selectedCategory.meta_description || "Wiki Description"} />
        </Helmet>
        )}
        <div className="parent-blog ">
             <div className="pageBreadcrumbs">
        <ul className={style.linkstyleDisable}>
          <li><Link to='/' className={style.linkstyleDisable}>Home</Link></li>/<li><Link to='/memate-wiki' className={style.linkstyleDisable}>meMate wiki</Link>
          </li>/<li> <a>{selectedCategory?.name}</a></li>
          
        </ul>
        <Link to='/memate-wiki' className="backButStories"><img src={arrowIconBack} alt="Arrow"/> Back</Link>
        </div> 
        <div className={` ${style.wikimainwrap}`}>
            <div className={style.wikimainhead}>
                {selectedCategory && (
               <>
                <h4>{selectedCategory.name}</h4>
                <h1>{selectedCategory.h1}</h1>
                <h2>{selectedCategory.h2}</h2>
               </>
                )}
                </div>
                    <div className={style.mainGridwtapFlex}> 
                    {wikiBaseIdData && wikiBaseIdData.map((item, index) => (     
                    <div key={index} className={`itemFlex ${style.itemFlex}`}>
                            <div className={style.itemText}>
                            <h3 onClick={() => handleDetailsClick(item.id, categoryName, item.full_slug)}>{item.title}</h3>
                         </div>
                     </div>
                    ))}
                  </div>
            </div>
        </div>
   
        </>
    );
};

export default WikiSinglePage;
