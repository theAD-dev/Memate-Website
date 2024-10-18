


import ClientManagement from "../../assests//icons/client-management.svg";
import SupplierManagement from "../../assests//icons/supplier-management.svg";
import SalePipline from "../../assests//icons/sale-pipline.svg";
import ManagementDashboard from "../../assests//icons/management-dashboard.svg";



import ClientManagementHover from "../../assests//icons/client-management-hover.svg";
import "./style.css";
 import style from './industries.module.scss';

const IndustriesComponent = () => {


  return (
    <>

       
<div className={style.mainMenuPages}>
    <div className={style.mainHeadTitle}>
      <h1>industries</h1>
     <p>Here are meMate’s main features to help you quickly understand if it will be suitable for your<br></br> business.</p>
    </div>


    <div className={style.mainGridWrap}>
      <h2>Industries</h2>
      <div className={style.mainGridwtapFlex}>
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
      <div className={style.itemicon}>
          <img className={`withoutHover ${style.withoutHover}`} src={ClientManagement} alt='ClientManagement' />
          <img className={`withHover ${style.withHover}`} src={ClientManagementHover} alt='ClientManagementHover' />
       </div>
       <div className={style.itemText}>
          <h3>Creative Agencies </h3>
          <p>Keep all your client details in one place with complete order history, discounts, and contacts.</p>
       </div>
       </div>{/* Item Box */}
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
      <div className={style.itemicon}>
          <img className={`withoutHover ${style.withoutHover}`} src={SupplierManagement} alt='ClientManagement' />
          <img className={`withHover ${style.withHover}`} src={ClientManagementHover} alt='ClientManagementHover' />
       </div>
       <div className={style.itemText}>
          <h3>Electronic Repair Specialists</h3>
          <p>Maintain a supplier list for your company, accessible to management, with a complete expense history.</p>
       </div>
       </div>{/* Item Box */}
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
      <div className={style.itemicon}>
          <img className={`withoutHover ${style.withoutHover}`} src={SalePipline} alt='ClientManagement' />
          <img className={`withHover ${style.withHover}`} src={ClientManagementHover} alt='ClientManagementHover' />
       </div>
       <div className={style.itemText}>
          <h3>Photo & Video  Agency  </h3>
          <p>Manage quotes with custom calculators, follow-ups, approvals, and a sales pipeline.</p>
       </div>
       </div>{/* Item Box */}
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
      <div className={style.itemicon}>
          <img className={`withoutHover ${style.withoutHover}`} src={ManagementDashboard} alt='ClientManagement' />
          <img className={`withHover ${style.withHover}`} src={ClientManagementHover} alt='ClientManagementHover' />
       </div>
       <div className={style.itemText}>
          <h3>Automotive</h3>
          <p>View all your jobs on one screen with a timeline, complete project information, history, expenses, time spent, and more.</p>
       </div>
       </div>{/* Item Box */}
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
      <div className={style.itemicon}>
          <img className={`withoutHover ${style.withoutHover}`} src={ManagementDashboard} alt='ClientManagement' />
          <img className={`withHover ${style.withHover}`} src={ClientManagementHover} alt='ClientManagementHover' />
       </div>
       <div className={style.itemText}>
          <h3>Startups </h3>
          <p>View all your jobs on one screen with a timeline, complete project information, history, expenses, time spent, and more.</p>
       </div>
       </div>{/* Item Box */}
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
      <div className={style.itemicon}>
          <img className={`withoutHover ${style.withoutHover}`} src={ManagementDashboard} alt='ClientManagement' />
          <img className={`withHover ${style.withHover}`} src={ClientManagementHover} alt='ClientManagementHover' />
       </div>
       <div className={style.itemText}>
          <h3>Construction </h3>
          <p>View all your jobs on one screen with a timeline, complete project information, history, expenses, time spent, and more.</p>
       </div>
       </div>{/* Item Box */}
      

       </div>
    </div>
  




    </div>
    
    
    </>
  );
};

export default IndustriesComponent;
