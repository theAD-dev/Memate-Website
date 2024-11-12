import React from "react";
import "./style.css";
import menuImages from "../../../../assests/menu-images";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const MenuFeature = () => {
  const location = useLocation();
  return (

    <div className="menu-feature-wrapper">
      <div className="menu-feature-wrapper-upper">
          <div className="menu-feature-management">
            <p className="menu-feature-text">MANAGEMENT</p>
              <div className="menu-management-features">
                <div className="menu-client-management">
                  <img src={menuImages.clientManagement}/>
                  <Link to="/client-management" className={` ${location.pathname === "/client-management" ? "navbar-item-active" : ""}`}><p className="clinet-management-text">Client Management</p></Link>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  <img src={menuImages.supplierManagement}/>
                  <Link to="/supplier-management" className={` ${location.pathname === "/supplier-management" ? "navbar-item-active" : ""}`}><p className="clinet-management-text">Supplier Management</p></Link>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  <img src={menuImages.salesPipeline}/>
                  <Link to="/feature-page-sales" className={` ${location.pathname === "/feature-page-sales" ? "navbar-item-active" : ""}`}><p className="clinet-management-text">Sales Pipeline</p></Link>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  <img src={menuImages.projectManagement}/>
                  <Link to="/project-management" className={` ${location.pathname === "/project-management" ? "navbar-item-active" : ""}`}><p className="clinet-management-text">Project Management</p></Link>
                </div>
              </div>
          </div>
          <div className="menu-feature-management">
            <p className="menu-feature-text">PRODUCTIVITY</p>
              <div className="menu-management-features">
                <div className="menu-client-management" >
                  <img src={menuImages.reports} style={{marginTop:"4px"}}/>
                  <Link to="/reports" className={` ${location.pathname === "/reports" ? "navbar-item-active" : ""}`}><p className="clinet-management-text">Reports</p></Link>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  <img src={menuImages.profitAndBudget}/>
                  <Link to="/profitability-and-budgeting" className={` ${location.pathname === "/profitability-and-budgeting" ? "navbar-item-active" : ""}`}><p className="clinet-management-text">Profitability & Budgeting</p></Link>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                <img src={menuImages.emplyManage}/>
                  <Link to="/employee-management" className={` ${location.pathname === "/employee-management" ? "navbar-item-active" : ""}`}><p className="clinet-management-text">Employee Management</p></Link>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  <img src={menuImages.contractor}/>
                  <Link to="/contractor" className={` ${location.pathname === "/contractor" ? "navbar-item-active" : ""}`}><p className="clinet-management-text">Contractor</p></Link>
               
                </div>
              </div>
          </div>
          <div className="menu-feature-management" style={{marginRight:"10px"}}>
            <p className="menu-feature-text">FUNCTIONALITY</p>
              <div className="menu-management-features">
                <div className="menu-client-management">
                  <img src={menuImages.internalChat}/>
                
                  <Link to="/internal-chat" className={` ${location.pathname === "/internal-chat" ? "navbar-item-active" : ""}`}><p className="clinet-management-text">Internal chat</p></Link>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  <img src={menuImages.timeSheet}/>
                  <Link to="/time-sheet" className={` ${location.pathname === "/time-sheet" ? "navbar-item-active" : ""}`}><p className="clinet-management-text">Time Sheet</p></Link>
               
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  <img src={menuImages.news}/>
                  <Link to="/features-news" className={` ${location.pathname === "/features-news" ? "navbar-item-active" : ""}`}><p className="clinet-management-text">Features News</p></Link>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  <img src={menuImages.taskManagement}/>
                  <Link to="/task-management" className={` ${location.pathname === "/task-management" ? "navbar-item-active" : ""}`}><p className="clinet-management-text">Task Management</p></Link>
                </div>
              </div>
          </div>
      </div>
     <div className="menu-feature-wrapper-lower">
     <div className="menu-feature-management">
            <p className="menu-feature-text">TECHNOLOGY</p>
              <div className="menu-management-features">
                <div className="menu-client-management iconManageSize">
                  <img src={menuImages.communicationIcon}/>
                  <Link to="/communication" className={` ${location.pathname === "/communication" ? "navbar-item-active" : ""}`}><p className="clinet-management-text">Communication</p></Link>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  <img src={menuImages.schduling}/>
                  <Link to="/scheduling" className={` ${location.pathname === "/scheduling" ? "navbar-item-active" : ""}`}><p className="clinet-management-text">Scheduling</p></Link>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  <img src={menuImages.invoicing}/>
                  <Link to="/invoicing" className={` ${location.pathname === "/invoicing" ? "navbar-item-active" : ""}`}><p className="clinet-management-text">Invoicing</p></Link>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management iconManageSize">
                  <img src={menuImages.statistics}/>
                  <Link to="/statistic" className={` ${location.pathname === "/statistic" ? "navbar-item-active" : ""}`}><p className="clinet-management-text">Statistic</p></Link>
                </div>
              </div>

              
          </div>
          <div className="menu-feature-management">
            <p className="menu-feature-text">Collaboration</p>
              <div className="menu-management-features">
                <div className="menu-client-management" >
                  <img src={menuImages.jobSchdule} style={{marginTop:"4px"}}/>
                  <Link to="/schedule-jobs" className={` ${location.pathname === "/schedule-jobs" ? "navbar-item-active" : ""}`}><p className="clinet-management-text">Schedule Jobs</p></Link>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  <img src={menuImages.jobHouly} style={{marginTop:"4px"}}/>
                  <Link to="/time-tracker" className={` ${location.pathname === "/time-tracker" ? "navbar-item-active" : ""}`}><p className="clinet-management-text">Fixed  or time tracker</p></Link>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  <img src={menuImages.jobApproval}/>
                  <Link to="/job-approval" className={` ${location.pathname === "/job-approval" ? "navbar-item-active" : ""}`}><p className="clinet-management-text">Job approval</p></Link>
                </div>
              </div>
              <div className="menu-management-feature">
                <div className="menu-client-management">
                  <img src={menuImages.MultiLocation}/>
                  <Link to="/multi-location" className={` ${location.pathname === "/multi-location" ? "navbar-item-active" : ""}`}><p className="clinet-management-text">Multi Location</p></Link>
                </div>
              </div>
          </div>
          <div className="menu-feature-management" style={{marginRight:"4px"}}>
            <p className="menu-feature-text">VALUE</p>
              <div className="menu-management-features">
                <div className="menu-client-management ">
                  <img src={menuImages.calendar}/>
                  <Link to="/calendar" className={` ${location.pathname === "/calendar" ? "navbar-item-active" : ""}`}><p className="clinet-management-text">Calendar</p></Link>
                </div>
              </div>
              <div className="menu-management-feature">
                <div className="menu-client-management iconManageSize">
                  <img src={menuImages.Calculators}/>
                  <Link to="/calculators" className={` ${location.pathname === "/calculators" ? "navbar-item-active" : ""}`}><p className="clinet-management-text">Calculators</p></Link>
                </div>
              </div>
             
          </div>
     </div>
    </div>
  );
};

export default MenuFeature;
