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
            
          >
            <div className="menu-client-management">
              <img src={menuImages.creativeAgency} />
              <Link to="/creative-agencies"><p className="clinet-management-text">Creative Agencies</p></Link>
            </div>
          </div>

          <div className="menu-management-feature">
            <div className="menu-client-management">
              <img src={menuImages.electronic} />
              <Link to="/electronic-repair-specialists"><p className="clinet-management-text"  style={{ width: "100%" }}>Electronic Repair Specialists</p></Link>
              </div>
          </div>

          <div
            className="menu-management-feature"
           
          >
            <div className="menu-client-management">
              <img src={menuImages.photoVideoAgency} />
              <Link to="/photo-video-agency"><p className="clinet-management-text"  style={{ width: "100%" }}>Photo & Video Agency</p></Link>
           </div>
          </div>

          <div
            className="menu-management-feature"
           
          >
            <div className="menu-client-management">
              <img src={menuImages.automotive} />
              <Link to="/automotive"><p className="clinet-management-text">Automotive</p></Link>
            </div>
          </div>
          <div
            className="menu-management-feature"
          >
            <div className="menu-client-management">
              <img src={menuImages.startUps} />
              <Link to="/startups"><p className="clinet-management-text" >Startups</p></Link>
            </div>
          </div>
          <div
            className="menu-management-feature"
           >
            <div className="menu-client-management">
              <img src={menuImages.construction} />
              <Link to="/construction"><p className="clinet-management-text" >Construction</p></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuIndustry;
