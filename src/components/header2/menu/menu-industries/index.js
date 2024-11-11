import menuImages from "../../../../assests/menu-images";
import "./style.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MenuIndustry = () => {
  const location = useLocation();
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
              <Link to="/creative-agencies" className={` ${location.pathname === "/creative-agencies" ? "navbar-item-active" : ""}`}><p className="clinet-management-text">Creative Agencies</p></Link>
            </div>
          </div>

          <div className="menu-management-feature">
            <div className="menu-client-management">
              <img src={menuImages.electronic} />
              <Link to="/electronic-repair-specialists" className={` ${location.pathname === "/electronic-repair-specialists" ? "navbar-item-active" : ""}`}><p className="clinet-management-text"  style={{ width: "100%" }}>Electronic Repair Specialists</p></Link>
              </div>
          </div>

          <div
            className="menu-management-feature"
           
          >
            <div className="menu-client-management">
              <img src={menuImages.photoVideoAgency} />
              <Link to="/photo-video-agency" className={` ${location.pathname === "/photo-video-agency" ? "navbar-item-active" : ""}`}><p className="clinet-management-text"  style={{ width: "100%" }}>Photo & Video Agency</p></Link>
           </div>
          </div>

          <div
            className="menu-management-feature"
           
          >
            <div className="menu-client-management">
              <img src={menuImages.automotive} />
              <Link to="/automotive" className={` ${location.pathname === "/automotive" ? "navbar-item-active" : ""}`}><p className="clinet-management-text">Automotive</p></Link>
            </div>
          </div>
          <div
            className="menu-management-feature"
          >
            <div className="menu-client-management">
              <img src={menuImages.startUps} />
              <Link to="/startups" className={` ${location.pathname === "/startups" ? "navbar-item-active" : ""}`}><p className="clinet-management-text" >Startups</p></Link>
            </div>
          </div>
          <div
            className="menu-management-feature"
           >
            <div className="menu-client-management">
              <img src={menuImages.construction} />
              <Link to="/construction" className={` ${location.pathname === "/construction" ? "navbar-item-active" : ""}`}><p className="clinet-management-text" >Construction</p></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuIndustry;
