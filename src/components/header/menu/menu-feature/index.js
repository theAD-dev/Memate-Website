import React from "react";
import "./style.css";
import menuImages from "../../../../assests/menu-images";
import { Link } from "react-router-dom";

const MenuFeature = () => {
  return (

    <div className="menu-feature-wrapper">
      <div className="menu-feature-wrapper-upper">
          <div className="menu-feature-management">
            <p className="menu-feature-text">MANAGEMENT</p>
              <div className="menu-management-features">
                <div className="menu-client-management">
                  <img src={menuImages.clientManagement}/>
                  <p className="clinet-management-text">Client Management</p>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  <img src={menuImages.supplierManagement}/>
                  <p className="clinet-management-text">Supplier Management</p>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  <img src={menuImages.salesPipeline}/>
                  <Link to="/feature-page-sales"><p className="clinet-management-text">Sales Pipeline</p></Link>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  <img src={menuImages.projectManagement}/>
                  <p className="clinet-management-text">Project Management</p>
                </div>
              </div>
          </div>
          <div className="menu-feature-management">
            <p className="menu-feature-text">Product Development</p>
              <div className="menu-management-features">
                <div className="menu-client-management" >
                  <img src={menuImages.reports} style={{marginTop:"4px"}}/>
                  <p className="clinet-management-text">Reports</p>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  <img src={menuImages.profitAndBudget}/>
                  <p className="clinet-management-text">Profitability & Budgeting</p>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  <img src={menuImages?.salesPip}/>
                  <p className="clinet-management-text" style={{marginLeft:"16px"}}>Employee Management</p>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  <img src={menuImages.contractor}/>
                  <p className="clinet-management-text">Contractor</p>
                </div>
              </div>
          </div>
          <div className="menu-feature-management" style={{marginRight:"10px"}}>
            <p className="menu-feature-text">Knowledge Management</p>
              <div className="menu-management-features">
                <div className="menu-client-management">
                  <img src={menuImages.internalChat}/>
                  <p className="clinet-management-text">Internal chat</p>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  <img src={menuImages.timeSheet}/>
                  <p className="clinet-management-text">TimeSheet</p>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  <img src={menuImages.news}/>
                  <Link to="/blog"><p className="clinet-management-text">News</p></Link>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  <img src={menuImages.taskManagement}/>
                  <p className="clinet-management-text">Task Management</p>
                </div>
              </div>
          </div>
      </div>
     <div className="menu-feature-wrapper-lower">
     <div className="menu-feature-management">
            <p className="menu-feature-text">Resource Management</p>
              <div className="menu-management-features">
                <div className="menu-client-management">
                  <img src={menuImages.communication}/>
                  <p className="clinet-management-text">Communication</p>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  <img src={menuImages.schduling}/>
                  <p className="clinet-management-text">Scheduling</p>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  <img src={menuImages.invoicing}/>
                  <p className="clinet-management-text">Invoicing</p>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  <img src={menuImages.statistics}/>
                  <p className="clinet-management-text">Statistic </p>
                </div>
              </div>

              
          </div>
          <div className="menu-feature-management">
            <p className="menu-feature-text">Collaboration</p>
              <div className="menu-management-features">
                <div className="menu-client-management" >
                  <img src={menuImages.jobSchdule} style={{marginTop:"4px"}}/>
                  <p className="clinet-management-text">Schedule Jobs</p>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  <img src={menuImages.jobHouly} style={{marginTop:"-14px"}}/>
                  <p className="clinet-management-text" >Jobs with hourly, fixed
                  or time tracker payment</p>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  <img src={menuImages.jobApproval}/>
                  <p className="clinet-management-text">Job approval</p>
                </div>
              </div>
          </div>
          <div className="menu-feature-management" style={{marginRight:"10px"}}>
            <p className="menu-feature-text">Workflows</p>
              <div className="menu-management-features">
                <div className="menu-client-management">
                  <img src={menuImages.calendar}/>
                  <p className="clinet-management-text">Calendar</p>
                </div>
              </div>
          </div>
     </div>
    </div>
  );
};

export default MenuFeature;
