import React from "react";
import "../style.css";
import style from '../supplier-module.module.scss';
import { Link } from "react-router-dom";
const googlemap = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/googlemap.svg";
const GlobIcon = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/glob-icon.svg";
const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";


function DataSingle({slug,supplierData}) {
  console.log('supplierData: ', supplierData);

  return (
<>
<div className="parent-blog-page customerstoriespage">

      <div className="parent-blog">
      <div className="pageBreadcrumbs">
        <ul className={style.linkstyleDisable}>
          <li><Link to='/' className={style.linkstyleDisable}>Home</Link></li>/<li><Link to='/supplier-database' className={style.linkstyleDisable}>Supplier database</Link></li>/<li> <Link>{slug}</Link></li>
        </ul>
        <Link to='/supplier-database' className="backButStories"><img src={arrowIconBack} alt="Arrow"/> Back</Link>
        </div> 
<div className={`databasesinglePage ${style.alphabetFilter}`}>
<div className={style.databasesinglehead}>
<div className={style.databasesLogo}><img src={supplierData.upload_url} alt={`${supplierData.legal_name} logo`} /></div>
<h2>{supplierData.legal_name}</h2>
</div>


<div className={style.detailsGrid}>
<div className={`${style.detailsCol} ${style.detailsCoActive} `}>
<div className={`${style.itemDatawrap} `}>
                <div className={style.itemDatalist}>
                <div className={style.left}>
                <img src={supplierData.upload_url} alt={`${supplierData.legal_name} logo`} />
                {supplierData.legal_name}
                </div>
                <div className={style.right}>
                <div className={style.roundBx}>ABN: {supplierData.abn}	</div>
                <div className={style.roundimg}><Link to={`http://maps.google.com/?q=${supplierData.business_location}`} target="_blank"><img src={googlemap} alt={`${googlemap} icon`} /></Link></div>
                <div className={style.roundimg}><Link to={supplierData.website} target="_blank"><img src={GlobIcon} alt={`${GlobIcon} icon`} /></Link></div>
              </div>
              </div>
                  </div>
                  <div className={style.accInnercontent}>
              <div className={style.accInnerhead}>
            <p>{supplierData.industry}</p>
            <ul>
             
              {supplierData.supplied_services?.split(',').map((service, idx) => (
        <li key={idx}>{service.trim()}</li>
      ))}
             
            </ul>
              </div>
              <div className={style.accInneradd}>
              <ul>
              <li><Link to={`http://maps.google.com/?q=${supplierData.business_location}`} target="_blank">{supplierData.business_location}</Link></li>
              <li><Link to={`mailto:${supplierData.email}`}>{supplierData.email}</Link></li>
              <li><Link to={supplierData.website} target="_blank">{supplierData.website}</Link></li>
            </ul>
              </div>
                  
                </div>
</div>
<div className={style.detailsCol}>
<h3>About</h3>

{supplierData.about ? (
                    <>
                     <p>{supplierData.about}</p> 
                    </>
                  ) : (
                    <p>No Data</p>
                  )} 
</div>
</div>
</div>  
<div className="darkButtonstyle">
          <Link to=''>Request to Edit</Link>
        </div>
      </div>
    </div>
    </>

  );
}
export default DataSingle;

