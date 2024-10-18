

import "./style.css";
 import style from './resources.module.scss';

const ResourcesComponent = () => {
  return (
    <> 
    <div className={`${style.mainMenuPages} ${style.ResourcesPages}`}>
    <div className={style.mainHeadTitle}>
      <h1>resources</h1>
     <p>Here are meMate’s main features to help you quickly understand if it will be suitable for your<br></br> business.</p>
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
