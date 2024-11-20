import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { wikiBaseId } from "../../api/wikiApi"; 
import { Link } from "react-router-dom";

const WikiSinglePage = () => {
    const { categoryId } = useParams();
    console.log('categoryId: ', categoryId);

    
    const { data: wikiBaseIdData, isLoading, isError } = useQuery({
        queryKey: ['wikiBaseId', categoryId],
        queryFn: () => wikiBaseId(categoryId), 
        enabled: !!categoryId, 
    });

    console.log('categoryId:', categoryId);
    console.log('Fetched data:', wikiBaseIdData);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data.</div>;

    return (
        <div>
             <div className="pageBreadcrumbs">
        <ul className={style.linkstyleDisable}>
          <li><Link to='/' className={style.linkstyleDisable}>Home</Link></li>/<li><Link to='/supplier-database' className={style.linkstyleDisable}>Supplier database</Link></li>/<li> <Link>{slug}</Link></li>
        </ul>
        <Link to='/supplier-database' className="backButStories"><img src={arrowIconBack} alt="Arrow"/> Back</Link>
        </div> 
   
            {wikiBaseIdData && wikiBaseIdData.map((item, index) => (
                <div key={index}>
                    <h2>{item.description}</h2>
                 
                </div>
            ))}
        </div>
    );
};

export default WikiSinglePage;
