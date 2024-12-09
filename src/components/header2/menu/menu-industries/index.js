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
              {/* <img src={menuImages.creativeAgency} /> */}
              <Link to="/industries/business-software-for-creative-agencies" className={` ${location.pathname === "/industries/business-software-for-creative-agencies" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon021">Creative Agencies</p></Link>
            </div>
          </div>

          <div className="menu-management-feature">
            <div className="menu-client-management">
              {/* <img src={menuImages.electronic} /> */}
              <Link to="/industries/software-for-electronic-repair-businesses" className={` ${location.pathname === "/industries/software-for-electronic-repair-businesses" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon022"  style={{ width: "100%" }}>Electronic Repair Specialists</p></Link>
              </div>
          </div>

          <div
            className="menu-management-feature"
           
          >
            <div className="menu-client-management">
              {/* <img src={menuImages.photoVideoAgency} /> */}
              <Link to="/industries/software-for-photo-video-agencies" className={` ${location.pathname === "/industries/software-for-photo-video-agencies" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon023"  style={{ width: "100%" }}>Photo & Video Agency</p></Link>
           </div>
          </div>

          <div
            className="menu-management-feature"
           
          >
            <div className="menu-client-management">
              {/* <img src={menuImages.automotive} /> */}
              <Link to="/industries/business-software-for-automotive-industry" className={` ${location.pathname === "/industries/business-software-for-automotive-industry" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon024">Automotive</p></Link>
            </div>
          </div>
          <div
            className="menu-management-feature"
          >
            <div className="menu-client-management">
              {/* <img src={menuImages.startUps} /> */}
              <Link to="/industries/business-management-software-for-startups" className={` ${location.pathname === "/industries/business-management-software-for-startups" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon025" >Startups</p></Link>
            </div>
          </div>
          <div
            className="menu-management-feature"
           >
            <div className="menu-client-management">
              {/* <img src={menuImages.construction} /> */}
              <Link to="/industries/business-software-for-construction-industry" className={` ${location.pathname === "/industries/business-software-for-construction-industry" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon026" >Construction</p></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuIndustry;
