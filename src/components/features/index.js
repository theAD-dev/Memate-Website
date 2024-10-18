

import style from './features.module.scss';
import ClientManagement from "../../assests//icons/client-management.svg";
import SupplierManagement from "../../assests//icons/supplier-management.svg";
import SalePipline from "../../assests//icons/sale-pipline.svg";
import ManagementDashboard from "../../assests//icons/management-dashboard.svg";



import ClientManagementHover from "../../assests//icons/client-management-hover.svg";
import "./style.css";

const FeaturesComponent = () => {


  return (
    <>
   
    <div className={style.mainMenuPages}>
    <div className={style.mainHeadTitle}>
      <h1>features</h1>
     <p>Here are meMate’s main features to help you quickly understand if it will be suitable for your<br></br> business.</p>
    </div>


    <div className={style.mainGridWrap}>
      <h2>Management</h2>
      <div className={style.mainGridwtapFlex}>
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
      <div className={style.itemicon}>
          <img className={`withoutHover ${style.withoutHover}`} src={ClientManagement} alt='ClientManagement' />
          <img className={`withHover ${style.withHover}`} src={ClientManagementHover} alt='ClientManagementHover' />
       </div>
       <div className={style.itemText}>
          <h3>Client Management</h3>
          <p>Keep all your client details in one place with complete order history, discounts, and contacts.</p>
       </div>
       </div>{/* Item Box */}
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
      <div className={style.itemicon}>
          <img className={`withoutHover ${style.withoutHover}`} src={SupplierManagement} alt='ClientManagement' />
          <img className={`withHover ${style.withHover}`} src={ClientManagementHover} alt='ClientManagementHover' />
       </div>
       <div className={style.itemText}>
          <h3>Supplier Management</h3>
          <p>Maintain a supplier list for your company, accessible to management, with a complete expense history.</p>
       </div>
       </div>{/* Item Box */}
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
      <div className={style.itemicon}>
          <img className={`withoutHover ${style.withoutHover}`} src={SalePipline} alt='ClientManagement' />
          <img className={`withHover ${style.withHover}`} src={ClientManagementHover} alt='ClientManagementHover' />
       </div>
       <div className={style.itemText}>
          <h3>Sales Pipeline</h3>
          <p>Manage quotes with custom calculators, follow-ups, approvals, and a sales pipeline.</p>
       </div>
       </div>{/* Item Box */}
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
      <div className={style.itemicon}>
          <img className={`withoutHover ${style.withoutHover}`} src={ManagementDashboard} alt='ClientManagement' />
          <img className={`withHover ${style.withHover}`} src={ClientManagementHover} alt='ClientManagementHover' />
       </div>
       <div className={style.itemText}>
          <h3>Project Management</h3>
          <p>View all your jobs on one screen with a timeline, complete project information, history, expenses, time spent, and more.</p>
       </div>
       </div>{/* Item Box */}
      

       </div>
    </div>
    <div className={style.mainGridWrap}>
      <h2>Technology</h2>
      <div className={style.mainGridwtapFlex}>
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
      <div className={style.itemicon}>
          <img className={`withoutHover ${style.withoutHover}`} src={ClientManagement} alt='ClientManagement' />
          <img className={`withHover ${style.withHover}`} src={ClientManagementHover} alt='ClientManagementHover' />
       </div>
       <div className={style.itemText}>
          <h3>Communication</h3>
          <p>Send automated updates on work progress via emails and SMS with preset templates. Keep all communication history in the project.</p>
       </div>
       </div>{/* Item Box */}
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
      <div className={style.itemicon}>
          <img className={`withoutHover ${style.withoutHover}`} src={SupplierManagement} alt='ClientManagement' />
          <img className={`withHover ${style.withHover}`} src={ClientManagementHover} alt='ClientManagementHover' />
       </div>
       <div className={style.itemText}>
          <h3>Scheduling</h3>
          <p>Monitor the profitability of each order in real-time, including expenses, timesheets, and the cost of goods.</p>
       </div>
       </div>{/* Item Box */}
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
      <div className={style.itemicon}>
          <img className={`withoutHover ${style.withoutHover}`} src={SalePipline} alt='ClientManagement' />
          <img className={`withHover ${style.withHover}`} src={ClientManagementHover} alt='ClientManagementHover' />
       </div>
       <div className={style.itemText}>
          <h3>Invoicing</h3>
          <p>Convert quotes into invoices with one click, receive online payments, and automated follow-ups.</p>
       </div>
       </div>{/* Item Box */}
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
      <div className={style.itemicon}>
          <img className={`withoutHover ${style.withoutHover}`} src={ManagementDashboard} alt='ClientManagement' />
          <img className={`withHover ${style.withHover}`} src={ClientManagementHover} alt='ClientManagementHover' />
       </div>
       <div className={style.itemText}>
          <h3>Statistic </h3>
          <p>Motivate your management with a simple, real-time target system.​</p>
       </div>
       </div>{/* Item Box */}
      

       </div>
    </div>
    <div className={style.mainGridWrap}>
      <h2>Productivity</h2>
      <div className={style.mainGridwtapFlex}>
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
      <div className={style.itemicon}>
          <img className={`withoutHover ${style.withoutHover}`} src={ClientManagement} alt='ClientManagement' />
          <img className={`withHover ${style.withHover}`} src={ClientManagementHover} alt='ClientManagementHover' />
       </div>
       <div className={style.itemText}>
          <h3>Reports</h3>
          <p>Access over 20 built-in reports to assist with your business analytics. </p>
       </div>
       </div>{/* Item Box */}
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
      <div className={style.itemicon}>
          <img className={`withoutHover ${style.withoutHover}`} src={SupplierManagement} alt='ClientManagement' />
          <img className={`withHover ${style.withHover}`} src={ClientManagementHover} alt='ClientManagementHover' />
       </div>
       <div className={style.itemText}>
          <h3>Profitability & Budgeting</h3>
          <p>Monitor the profitability of each order in real-time, including expenses, timesheets, and the cost of goods.</p>
       </div>
       </div>{/* Item Box */}
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
      <div className={style.itemicon}>
          <img className={`withoutHover ${style.withoutHover}`} src={SalePipline} alt='ClientManagement' />
          <img className={`withHover ${style.withHover}`} src={ClientManagementHover} alt='ClientManagementHover' />
       </div>
       <div className={style.itemText}>
          <h3>Employee Management</h3>
          <p>Onboard your employees and keep contacts and details in one place.</p>
       </div>
       </div>{/* Item Box */}
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
      <div className={style.itemicon}>
          <img className={`withoutHover ${style.withoutHover}`} src={ManagementDashboard} alt='ClientManagement' />
          <img className={`withHover ${style.withHover}`} src={ClientManagementHover} alt='ClientManagementHover' />
       </div>
       <div className={style.itemText}>
          <h3>Contractor </h3>
          <p>Create a list of trusted contractors with a complete history of cooperation and ratings for better collaboration.​</p>
       </div>
       </div>{/* Item Box */}
      

       </div>
    </div>
    <div className={style.mainGridWrap}>
      <h2>Collaboration</h2>
      <div className={style.mainGridwtapFlex}>
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
      <div className={style.itemicon}>
          <img className={`withoutHover ${style.withoutHover}`} src={ClientManagement} alt='ClientManagement' />
          <img className={`withHover ${style.withHover}`} src={ClientManagementHover} alt='ClientManagementHover' />
       </div>
       <div className={style.itemText}>
          <h3>Schedule Jobs</h3>
          <p>Easily create jobs for your contractors, send them individually or in groups, link them to orders, and track profitability. </p>
       </div>
       </div>{/* Item Box */}
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
      <div className={style.itemicon}>
          <img className={`withoutHover ${style.withoutHover}`} src={SupplierManagement} alt='ClientManagement' />
          <img className={`withHover ${style.withHover}`} src={ClientManagementHover} alt='ClientManagementHover' />
       </div>
       <div className={style.itemText}>
          <h3>Fixed  or time tracker </h3>
          <p>Pay contractors based on a preset agreement, whether fixed payment, time tracker, or hourly.</p>
       </div>
       </div>{/* Item Box */}
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
      <div className={style.itemicon}>
          <img className={`withoutHover ${style.withoutHover}`} src={SalePipline} alt='ClientManagement' />
          <img className={`withHover ${style.withHover}`} src={ClientManagementHover} alt='ClientManagementHover' />
       </div>
       <div className={style.itemText}>
          <h3>Job approval</h3>
          <p>Approve submitted work with one simple click and manage invoices from your contractors in one system.</p>
       </div>
       </div>{/* Item Box */}
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
      <div className={style.itemicon}>
          <img className={`withoutHover ${style.withoutHover}`} src={ManagementDashboard} alt='ClientManagement' />
          <img className={`withHover ${style.withHover}`} src={ClientManagementHover} alt='ClientManagementHover' />
       </div>
       <div className={style.itemText}>
          <h3>Multi Location </h3>
          <p>Create a separate management dashboard for multiple offices or locations.​</p>
       </div>
       </div>{/* Item Box */}
      

       </div>
    </div>
    <div className={style.mainGridWrap}>
      <h2>Functionality </h2>
      <div className={style.mainGridwtapFlex}>
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
      <div className={style.itemicon}>
          <img className={`withoutHover ${style.withoutHover}`} src={ClientManagement} alt='ClientManagement' />
          <img className={`withHover ${style.withHover}`} src={ClientManagementHover} alt='ClientManagementHover' />
       </div>
       <div className={style.itemText}>
          <h3>Internal chat</h3>
          <p>Facilitate all communication within the company. </p>
       </div>
       </div>{/* Item Box */}
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
      <div className={style.itemicon}>
          <img className={`withoutHover ${style.withoutHover}`} src={SupplierManagement} alt='ClientManagement' />
          <img className={`withHover ${style.withHover}`} src={ClientManagementHover} alt='ClientManagementHover' />
       </div>
       <div className={style.itemText}>
          <h3>Timesheet</h3>
          <p>Automatically receive timesheets from your staff, based on scheduled shifts and time trackers.</p>
       </div>
       </div>{/* Item Box */}
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
      <div className={style.itemicon}>
          <img className={`withoutHover ${style.withoutHover}`} src={SalePipline} alt='ClientManagement' />
          <img className={`withHover ${style.withHover}`} src={ClientManagementHover} alt='ClientManagementHover' />
       </div>
       <div className={style.itemText}>
          <h3>News</h3>
          <p>Create a team with your company news feed and updates.</p>
       </div>
       </div>{/* Item Box */}
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
      <div className={style.itemicon}>
          <img className={`withoutHover ${style.withoutHover}`} src={ManagementDashboard} alt='ClientManagement' />
          <img className={`withHover ${style.withHover}`} src={ClientManagementHover} alt='ClientManagementHover' />
       </div>
       <div className={style.itemText}>
          <h3>Task management</h3>
          <p>Utilize a task to-do list feature to improve efficiency.</p>
       </div>
       </div>{/* Item Box */}
      

       </div>
    </div>
    <div className={style.mainGridWrap}>
      <h2>Value </h2>
      <div className={style.mainGridwtapFlex}>
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
      <div className={style.itemicon}>
          <img className={`withoutHover ${style.withoutHover}`} src={ClientManagement} alt='ClientManagement' />
          <img className={`withHover ${style.withHover}`} src={ClientManagementHover} alt='ClientManagementHover' />
       </div>
       <div className={style.itemText}>
          <h3>Calendar</h3>
          <p>View all jobs, shifts, holidays, and unavailability on one company calendar.</p>
       </div>
       </div>{/* Item Box */}
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
      <div className={style.itemicon}>
          <img className={`withoutHover ${style.withoutHover}`} src={SupplierManagement} alt='ClientManagement' />
          <img className={`withHover ${style.withHover}`} src={ClientManagementHover} alt='ClientManagementHover' />
       </div>
       <div className={style.itemText}>
          <h3>Calculators</h3>
          <p>Hourly or fixed pricing and add margins or markups to calculate the cost for the customer.</p>
       </div>
       </div>{/* Item Box */}
      
      

       </div>
    </div>




    </div>
    
    </>
  );
};

export default FeaturesComponent;
