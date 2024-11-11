import React from "react";
import './style.css';
import { Link } from "react-router-dom";
const MenuRessources = () => {
  return (
    <div className="menu-feature-wrapper">
      <div className="menu-feature-wrapper-upper-res">
        <div className="menu-feature-management">
        <p className="menu-feature-text"><Link to="/resources">Resources & tools</Link></p>
          <div className="menu-management-features">
            <div className="menu-client-management">
              <Link to="/supplier-database"> <p className="clinet-management-text">Supplier Database</p></Link>
            </div>
          </div>
        
          <div className="menu-management-feature">
            <div className="menu-client-management">
            <Link to="/knowledge-base"> <p className="clinet-management-text">Knowledge Base</p></Link>
            </div>
          </div>
          <div className="menu-management-feature">
            <div className="menu-client-management">
              <Link to="/delete-request"> <p className="clinet-management-text">Delete Request</p></Link>
            </div>
          </div>
        </div>
        <div className="menu-feature-management">
          <p className="menu-feature-text">Memate wiki</p>
          <div className="menu-management-features">
            <div className="menu-client-management">
              <Link to="/memate-wiki"> <p className="clinet-management-text">Memate Wiki</p></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuRessources;
