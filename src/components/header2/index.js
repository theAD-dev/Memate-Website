import { useEffect, useState, useRef } from "react";
import menuImages from "../../assests/menu-images";
import Images from "../../assests/images";
import {ReactComponent as DownBlackArrow} from "../../assests/icons/down-black-arrow.svg";
import {ReactComponent as DownWhiteArrow} from "../../assests/icons/down-white-arrow.svg"
import {ReactComponent as DownColorArrow} from "../../assests/icons/down-color-arrow.svg"
import {ReactComponent as RightColorArrow} from "../../assests/icons/right-color-arrow.svg"
import {ReactComponent as RightWhiteArrow} from "../../assests/icons/right-white-arrow.svg"
import {ReactComponent as RightBlackArrow} from "../../assests/icons/right-black-arrow.svg"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { MenuAbout, MenuFeature, MenuIndustry, MenuLegal, MenuNews, MenuRessources } from "./menu";
import "./style.css";
import style from './header-menu.module.scss';
import { useLocation } from "react-router-dom"; 

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);
  const handleLogoClick = () => {
    navigate("/");
  };

  const menuItemList = [
    {
      id: 1,
      label: <Link to="/features">Features</Link>,
      selectedIcon: menuImages.featureImage,
      unselectedIcon: menuImages.featureImageUnselected,
    },
    {
      id: 2,
      label: <Link to="/industries">Industries</Link>,
      selectedIcon: menuImages.industrySelected,
      unselectedIcon: menuImages.industryUnSelected,
    },
    {
      id: 3,
      label: <Link to="/news-stories">News & Stories</Link>,
      selectedIcon: menuImages.newStorySelected,
      unselectedIcon: menuImages.newStoryUnSelected,
    },
    {
      id: 4,
      label: <Link to="/about">About</Link>,
      selectedIcon: menuImages.aboutSelected,
      unselectedIcon: menuImages.aboutUnselected,
    },
  ];

  const renderContent = () => {
    switch (selectedMenuItem) {
      case 1:
        return <MenuFeature />;
      case 2:
        return <MenuIndustry />;
      case 3:
        return <MenuNews />;
      case 4:
        return <MenuAbout />;
      case 5:
        return <MenuLegal/>;
      case 6:
        return <MenuRessources/>;
      default:
        return null;
    }
  };

  useEffect(() => {}, [showDropDown, selectedMenuItem]);


  useEffect(() => {
    // Add click event listener to detect outside clicks
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);



  return (
    <div>
      <div className="navbar">
        <div className="navbar-container" >

          <div className="navbar-logo-wrapper" onClick={handleLogoClick}>
            <img src={Images.logo} alt="logo" />
          </div>
          <div className="header-navbar-container">

            <div
              className={`navbar-item navbar-item-flex-item  ${
                location.pathname === "/about", showDropDown ? "navbar-item-active "  : ""
              }`}
              onClick={() => setShowDropDown(!showDropDown)} 
            >
                 <p>About</p>
                {showDropDown ? <DownColorArrow/> : <DownBlackArrow/> }
            </div>
            <div className={`navbar-item ${location.pathname === "/pricing" ? "navbar-item-active" : ""}`}>
            <Link to="/pricing" className="navbar-link"><p>Pricing</p></Link>
            </div>
            <div className={`navbar-item ${location.pathname === "/news" ? "navbar-item-active" : ""}`}>
                <Link to="/news" className="navbar-link"><p>News</p></Link>
            </div>
            <div className={`navbar-item ${location.pathname === "/contact-us" ? "navbar-item-active" : ""}`} style={{marginRight: "0px"}}>
                <Link to="/contact-us" className="navbar-link"><p>Contact us</p></Link>
            </div>
          </div>
          <div className={`navbar-log-in`}>
            <div> <Link to="https://dev.memate.com.au/"  target="_blank" className="navbar-link"><p>Log in</p></Link></div>
          </div>

          {showDropDown && (
             <div ref={menuRef} className="header-menu-wrapper">
              <div className="header-menu-header-div">
                <div className="header-menu-header-div-menu">
                  {menuItemList.map((menu, key) => {
                    return (
                      <div
                        key={menu.id}
                        style={{ cursor: "pointer" }}
                        className={
                          selectedMenuItem === menu.id
                            ? "header-menu-item"
                            : "header-menu-item-unselected"
                        }
               
                        onMouseEnter={() => setSelectedMenuItem(menu.id)} 
                        onMouseLeave={() => setSelectedMenuItem(menu.id)} 
                      >
                        <div
                          className={
                            selectedMenuItem === menu.id
                              ? "header-menu-icon-wrapper"
                              : "header-menu-icon-wrapper"
                          }
                        >
                          <img
                            src={
                                menu.unselectedIcon
                            }
                          />
                          <p
                            style={{
                              marginLeft: `${menu.id === 3 ? "6px" : ""}`,
                            }}
                            className={
                              selectedMenuItem === menu.id
                                ? "header-menu-item-name-selected"
                                : "header-menu-item-name-unselected"
                            }
                          >
                            {menu?.label}
                          </p>
                        </div>

                        <div
                          className={
                            selectedMenuItem === menu.id
                              ? "menu-next-icon-wrapper"
                              : "menu-next-icon-wrapper-unselected"
                          }
                        >
                          {selectedMenuItem === menu.id ? <RightColorArrow/> : <RightBlackArrow/> }
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="header-menu-header-div-menu-component">
                  {renderContent()}
                </div>
                <div className="header-menu-header-div-memate-component">
                  <img src={Images.logo} alt="logo" />
                  <div className="header-menu-memate-feature">
                    <div className="header-menu-feature">
                      <img src={menuImages.meMateCheck} />
                      <p className="header-menu-feature-text">
                        Easy to Learn adn User
                      </p>
                    </div>

                    <div className="header-menu-features">
                      <img src={menuImages.meMateCheck} />
                      <p className="header-menu-feature-texts">Remote Acess</p>
                    </div>

                    <div className="header-menu-features">
                      <img src={menuImages.meMateCheck} />
                      <p className="header-menu-feature-texts">Workflow</p>
                    </div>

                    <div className="header-menu-features">
                      <img src={menuImages.meMateCheck} />
                      <p className="header-menu-feature-texts">
                        Single database
                      </p>
                    </div>

                    <div className="header-menu-features">
                      <img src={menuImages.meMateCheck} />
                      <p className="header-menu-feature-texts">
                        Build for Australia
                      </p>
                    </div>

                    <div className="header-menu-features">
                      <img src={menuImages.meMateCheck} />
                      <p className="header-menu-feature-texts">CRM & ERP</p>
                    </div>

                    <div className="header-menu-features">
                      <img src={menuImages.meMateCheck} />
                      <p className="header-menu-feature-texts">Reporting</p>
                    </div>
                  </div>
                  <div className="request-a-button-wrapper">
                   <Link to='https://dev.memate.com.au/requestdemo'  target="_blank"><img src={menuImages.RequestAdemo} /> </Link>
                  </div>
                </div>
              </div>
              <div className="header-menu-footer-div">
                <div className="header-menu-footer-left-content">
                  <div
                    className="header-footer-legal"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setSelectedMenuItem(5);
                    }}
                  >
                    <img
                      src={
                        selectedMenuItem === 5
                          ? menuImages.selectedLegal
                          : menuImages.unselectedLegal
                      }
                    />
                    <p
                      className={
                        selectedMenuItem === 5
                          ? "header-footer-legal-text-selected"
                          : "header-footer-legal-text"
                      }
                    >
                      Legal
                    </p>
                  </div>
                  <div
                    className="header-footer-legal"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setSelectedMenuItem(6);
                    }}
                  >
                    <img
                      src={
                        selectedMenuItem === 6
                          ? menuImages.selectedResources
                          : menuImages.unselectedResources
                      }
                    />
                    <p
                      className={
                        selectedMenuItem === 6
                          ? "header-footer-legal-text-selected"
                          : "header-footer-legal-text"
                      }
                    >
                      Ressources
                    </p>
                  </div>
                </div>
                <div className="header-menu-footer-left-content">
                  <div className="header-footer-legal">
                    <img src={menuImages.unselectedSales} />
                    <Link to='/contact-sales'> <p className="header-footer-legal-text">Contact Sales</p> </Link>
                  </div>
                  <div className="header-footer-legal">
                    <img
                      src={menuImages.unselectedWatchDemo}
                      style={{ marginTop: "-2px" }}
                    />
                    <Link to='/watch-demo'> <p className="header-footer-legal-text">Watch demo</p> </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
