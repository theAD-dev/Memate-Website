import menuImages from "../../../../assests/menu-images";
import "./style.css";
import { Link } from "react-router-dom";

const MenuIndustry = () => {
  return (
    <div className="menu-feature-wrapper-industries">
      <div className="menu-feature-wrapper-upper">
        <div className="menu-feature-management">
          <p className="menu-feature-text">INDUSTRIES</p>

          <div
            className="menu-management-features"
            style={{ marginLeft: "-20px" }}
          >
            <div className="menu-client-management">
              <img src={menuImages.creativeAgency} />
              <Link to="/industry"><p className="clinet-management-text">Creative Agencies</p></Link>
            </div>
          </div>

          <div className="menu-management-feature">
            <div className="menu-client-management">
              <img src={menuImages.electronic} />
              <p className="clinet-management-text" style={{ width: "100%" }}>
                Electronic Repair Specialists
              </p>
            </div>
          </div>

          <div
            className="menu-management-feature"
            style={{ marginLeft: "-20px" }}
          >
            <div className="menu-client-management">
              <img src={menuImages.photoVideoAgency} />
              <p className="clinet-management-text">Photo & Video Agency </p>
            </div>
          </div>

          <div
            className="menu-management-feature"
            style={{ marginLeft: "-20px" }}
          >
            <div className="menu-client-management">
              <img src={menuImages.automotive} />
              <p className="clinet-management-text">Automotive</p>
            </div>
          </div>

          <div
            className="menu-management-feature"
            style={{ marginLeft: "-20px" }}
          >
            <div className="menu-client-management">
              <img src={menuImages.startUps} />
              <p className="clinet-management-text">Startups </p>
            </div>
          </div>

          <div
            className="menu-management-feature"
            style={{ marginLeft: "-20px" }}
          >
            <div className="menu-client-management">
              <img src={menuImages.construction} />
              <p className="clinet-management-text">Construction </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuIndustry;
