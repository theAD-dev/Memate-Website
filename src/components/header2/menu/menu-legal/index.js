import "./style.css";
import { Link } from "react-router-dom";

const MenuLegal = () => {
  return (
    <div className="menu-feature-wrapper">
      <div className="menu-feature-wrapper-upper">
        <div className="menu-feature-management">
          <p className="menu-feature-text">Legal</p>
          <div className="menu-management-features">
            <div className="menu-client-management">
              <Link to="/terms-and-conditions"> <p className="clinet-management-text">Terms & Conditions</p></Link>
            </div>
          </div>
          
      
          <div className="menu-management-feature">
            <div className="menu-client-management">
            <Link to="/privacy"> <p className="clinet-management-text">Privacy</p></Link>
            </div>
          </div>

          <div className="menu-management-feature">
            <div className="menu-client-management">
            <Link to="/terms-of-use"> <p className="clinet-management-text">Website terms of Use</p></Link>
            </div>
          </div>

          <div className="menu-management-feature">
            <div className="menu-client-management">
            <Link to="/security"> <p className="clinet-management-text">Security</p></Link>
            </div>
          </div>

          <div className="menu-management-feature">
            <div className="menu-client-management">
              <Link to="/legal"> <p className="clinet-management-text">Legal</p></Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MenuLegal;
