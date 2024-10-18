import React from "react";
import "../style.css";
import style from '../supplier-module.module.scss';
import NextStep from "../../next-step";
import { Link } from "react-router-dom";
import googlemap from "../../../assests/icons/googlemap.svg";
import GlobIcon from "../../../assests/icons/glob-icon.svg";
import arrowIconBack from "../../../assests/icons/arrowIconBack.svg";
import cameraFixLogo from "../../../assests/images/cameraFixLogo.svg";


function DataSingle() {
  return (
<>
<div className="parent-blog-page customerstoriespage">

      <div className="parent-blog">
      <div className="pageBreadcrumbs">
        <ul>
          <li>Home</li>/<li>Supplier database</li>/<li> <Link>Camerafix</Link></li>
        </ul>
        <Link className="backButStories"><img src={arrowIconBack} alt="Arrow"/> Back</Link>
        </div> 
<div className={`databasesinglePage ${style.alphabetFilter}`}>
<div className={style.databasesinglehead}>
<div className={style.databasesLogo}><img src={cameraFixLogo}  alt={cameraFixLogo}/></div>
<h2>Camerafix</h2>
</div>


<div className={style.detailsGrid}>
<div className={`${style.detailsCol} ${style.detailsCoActive} `}>
<div className={`${style.itemDatawrap} `}>
                <div className={style.itemDatalist}>
                <div className={style.left}>
                <img src={cameraFixLogo} alt={`${cameraFixLogo} logo`} />
                Camerafix
                </div>
                <div className={style.right}>
                <div className={style.roundBx}>ABN: 226365507	</div>
                <div className={style.roundimg}><img src={googlemap} alt={`${googlemap} icon`} /></div>
                <div className={style.roundimg}><img src={GlobIcon} alt={`${GlobIcon} icon`} /></div>
              </div>
              </div>
                  </div>
                  <div className={style.accInnercontent}>
              <div className={style.accInnerhead}>
            <p>Supplied Services</p>
            <ul>
              <li>Content Creation</li>
              <li>Social Media Management</li>
              <li>Graphic Design</li>
            </ul>
              </div>
              <div className={style.accInneradd}>
              <ul>
              <li>  45CW+9P Ultimo, New South Wales, Australia	</li>
              <li>	info@camerafix.com.au</li>
              <li>	https://www.camerafix.com.au/</li>
            </ul>
              </div>
                  
                </div>
</div>
<div className={style.detailsCol}>
<h3>About</h3>
<p>Camera Fix is a fully licensed camera repair service based in Sydney, Australia. They specialize in repairing both digital and film cameras, offering services for all major brands like Canon, Nikon, Sony, Leica, and Hasselblad. With over 35 years of experience, Camera Fix is dedicated to providing high-quality, professional maintenance and repairs. Their services include everything from lens cleaning and calibration to fixing shutter speeds and performing firmware upgrades. They pride themselves on using advanced repair equipment and software to ensure that each camera meets the manufacturer’s specifications. </p>
</div>

</div>
</div>
       

       

      
      </div>
      <NextStep text="Request a Demo" />
    </div>
    </>

  );
}
export default DataSingle;

