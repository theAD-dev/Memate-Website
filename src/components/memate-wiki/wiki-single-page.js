import React from "react";
import { Link, useParams,useLocation  } from "react-router-dom";
import style from './wiki.module.scss';
import { useQuery } from "@tanstack/react-query";
import { wikiBaseId } from "../../api/wikiApi"; 

const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";


const WikiSinglePage = () => {
    const { categoryId } = useParams();
    const location = useLocation();
    const { name: categoryName } = location.state || {};
    const idData = `${categoryId}/${categoryName}`;
    const { data: wikiBaseIdData } = useQuery({
        queryKey: ['wikiBaseId', idData],
        queryFn: () => wikiBaseId(idData), 
        enabled: !!idData, 
    });
    

    return (
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
                <p>Here is everything you need to know about starting a new company in Australia.</p>
                </div>
                    <div className={style.mainGridwtapFlex}>
                    {wikiBaseIdData && wikiBaseIdData.map((item, index) => (
                    <div key={index} className={`itemFlex ${style.itemFlex}`}>
                            <div className={style.itemText}>
                            <h3 dangerouslySetInnerHTML={{ __html: item.description }}></h3>
                         </div>
                     </div>
                    ))}
                  </div>
            </div>
        </div>
    );
};

export default WikiSinglePage;
