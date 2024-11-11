import React from "react";
import './style.css';
const MenuRessources = () => {
  return (
    <div className="menu-feature-wrapper">
      <div className="menu-feature-wrapper-upper-res">
        <div className="menu-feature-management">
          <p className="menu-feature-text">Resources & tools</p>
          <div className="menu-management-features">
            <div className="menu-client-management">
              <p className="clinet-management-text">Supplier Database</p>
            </div>
          </div>

          <div className="menu-management-feature">
            <div className="menu-client-management">
              <p className="clinet-management-text">Delete Request</p>
            </div>
          </div>
        </div>
        <div className="menu-feature-management">
          <p className="menu-feature-text">Memate wiki</p>
          <div className="menu-management-features">
            <div className="menu-client-management">
              <p className="clinet-management-text">Memate Wiki</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuRessources;
