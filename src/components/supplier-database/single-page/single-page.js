import React from "react";
import "../style.css";
import style from '../supplier-module.module.scss';
import { Link } from "react-router-dom";
import EmailIcon from "../../../svg/EmailIcon";
import WebsiteUrlIcon from "../../../svg/WebsiteUrlIcon";
import AddressIcon from "../../../svg/AddressIcon";
import RequestToEdit from "./requesttoedit";
const googlemap = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/googlemap.svg";
const GlobIcon = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/glob-icon.svg";
const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";


function DataSingle({slug,supplierData}) {

  
  return (
<>
<div className="parent-blog-page customerstoriespage">
      <div className="parent-blog">
      <div className="pageBreadcrumbs">
        <ul className={style.linkstyleDisable}>
          <li><Link to='/' className={style.linkstyleDisable}>Home</Link></li>/<li><Link to='/supplier-database' className={style.linkstyleDisable}>Supplier database</Link></li>/<li> <a>{slug}</a></li>
        </ul>
        <Link to='/supplier-database' className="backButStories"><img src={arrowIconBack} alt="Arrow"/> Back</Link>
        </div> 
<div className={`databasesinglePage ${style.alphabetFilter}`}>
<div className={style.databasesinglehead}>
<div className={style.databasesLogo}><img src={supplierData.upload_url} alt={`${supplierData.legal_name} logo`} /></div>
<h2>{supplierData.cname}</h2>
</div>

<div className={style.detailsGrid}>
<div className={`${style.detailsCol} ${style.detailsCoActive} `}>
<div className={`${style.itemDatawrap} `}>
                <div className={style.itemDatalist}>
                <div className={style.left}>
                <img src={supplierData.upload_url} alt={`${supplierData.legal_name} logo`} />
                <strong>{supplierData.cname}</strong>
              
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
          {/* <p><Link to={supplierData.main_industry?.slug}>{supplierData.main_industry?.title}</Link></p> */}
          <p><>{supplierData.main_industry?.title}</></p>
             <ul>
                  {supplierData.supplier_services_data?.map((service, idx) => (
                    <li key={idx}>
                      {/* <a href={`/services/${service.slug}`}>{service.title}</a> */}
                      <a>{service.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={style.accInneradd}>
              <ul>
              <li><Link to={`http://maps.google.com/?q=${supplierData.business_location}`} target="_blank"><AddressIcon /> {supplierData.business_location}</Link></li>
              <li><Link to={`mailto:${supplierData.email}`}><EmailIcon /> {supplierData.email}</Link></li>
              <li><Link to={supplierData.website} target="_blank"><WebsiteUrlIcon /> {supplierData.website}</Link></li>
            </ul>
              </div>   
                </div>
                </div>
                <div className={style.detailsCol}>
                <h3>About</h3>
                <p>{supplierData?.discription}</p> 
                </div>
                </div>
                </div>  
                <div className="darkButtonstyleEdit">
               <RequestToEdit supplierData ={supplierData} />
        </div>
      </div>
    </div>
    </>

  );
}
export default DataSingle;

