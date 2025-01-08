import React from "react";
import { Link, useParams,useLocation  } from "react-router-dom";
import style from './wiki.module.scss';
import { useQuery } from "@tanstack/react-query";
import { wikiBaseId } from "../../api/wikiApi"; 
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";


const WikiSinglePage = () => {
    const { categoryId } = useParams();
     const navigate = useNavigate();
    const location = useLocation();
    const { categoryName } = location.state || {};
    const idData = `${categoryId}/${categoryName}`;
    const { data: wikiBaseIdData } = useQuery({
        queryKey: ['wikiBaseId', idData],
        queryFn: () => wikiBaseId(idData), 
        enabled: !!idData, 
    });
 
    console.log('wikiBaseIdData: ', wikiBaseIdData);
    const handleDetailsClick = (categoryId, categoryName, titleSlug) => {
        navigate(`/memate-wiki/${titleSlug}`, { state: { name: categoryName, slugName: titleSlug } });
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
        <div className="parent-blog">
             <div className="pageBreadcrumbs">
        <ul className={style.linkstyleDisable}>
          <li><Link to='/' className={style.linkstyleDisable}>Home</Link></li>/<li><Link to='/memate-wiki' className={style.linkstyleDisable}>meMate wiki</Link>
          </li>/<li> <Link>{categoryName}</Link></li>
         
        </ul>
        <Link to='/memate-wiki' className="backButStories"><img src={arrowIconBack} alt="Arrow"/> Back</Link>
        </div> 
        <div className={` ${style.wikimainwrap}`}>
            <div className={style.wikimainhead}>
                <h1>{categoryName}</h1>
                <p>Here is everything you need to know about 
                    starting a new company in Australia.</p>
                </div>
                    <div className={style.mainGridwtapFlex}>
                    {wikiBaseIdData && wikiBaseIdData.map((item, index) => (
                    <div key={index} className={`itemFlex ${style.itemFlex}`}>
                            <div className={style.itemText}>
                            {/* <h3 dangerouslySetInnerHTML={{ __html: item.description }}></h3> */}
                            <h3 onClick={() => handleDetailsClick(item.id, categoryName, item.slug)}>{item.title}</h3>

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
