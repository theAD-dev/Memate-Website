

import "./style.css";
 import style from './resources.module.scss';
import { Helmet } from "react-helmet";

const ResourcesComponent = () => {
  return (
    <> 
     <Helmet>
    <title>Resources | Business Management Guides & Tools by meMate</title>
    <meta property="og:title" content="Resources | Business Management Guides & Tools by meMate" />
      <meta property="og:description" content="Access MeMate’s library of resources, including business management guides, CRM tutorials, and workflow automation tips. 
      Empower your Australian small business with expert tools and advice
    " />
</Helmet>
    <div className={`${style.mainMenuPages} ${style.ResourcesPages}`}>
    <div className={style.mainHeadTitle}>
      <h2>resources</h2>
     <h1>Explore Resources for Business Management and CRM Solutions</h1>
    </div>

    <div className={style.mainGridWrap}>
      <h2>Resources and Tools</h2>
      <div className={style.mainGridwtapFlex}>
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
       <div className={style.itemText}>
          <h3>Supplier Database</h3>
       </div>
       </div>{/* Item Box */}
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
       <div className={style.itemText}>
          <h3>Delete Request</h3>
       </div>
       </div>{/* Item Box */}
       </div>
    </div>
    <div className={style.mainGridWrap}>
      <h2>Memate Manual</h2>
      <div className={style.mainGridwtapFlex}>
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
       <div className={style.itemText}>
          <h3>Knowledge Database</h3>
       </div>
       </div>{/* Item Box */}
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
       <div className={style.itemText}>
          <h3>meMate Brand</h3>
       </div>
       </div>{/* Item Box */}
       </div>
    </div>
    <div className={style.mainGridWrap}>
      <h2>Business Support</h2>
      <div className={style.mainGridwtapFlex}>
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
       <div className={style.itemText}>
          <h3>Memate Wiki</h3>
       </div>
       </div>{/* Item Box */}
       </div>
    </div>
    </div>

    </>
  );
};

export default ResourcesComponent;
