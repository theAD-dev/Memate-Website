import { useEffect, useState } from "react";
import menuImages from "../../assests/menu-images";
import Images from "../../assests/images";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { MenuAbout, MenuFeature, MenuIndustry, MenuLegal, MenuNews, MenuRessources } from "./menu";
import "./style.css";

const DownBlackArrow = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/down-black-arrow.svg";
const DownWhiteArrow = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/down-white-arrow.svg";
const RightWhiteArrow = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/right-white-arrow.svg";
const RightBlackArrow = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/down-black-arrow.svg"


const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const menuItemList = [
    {
      id: 1,
      label: "Features",
      selectedIcon: menuImages.featureImage,
      unselectedIcon: menuImages.featureImageUnselected,
    },
    {
      id: 2,
      label: "Industries",
      selectedIcon: menuImages.industrySelected,
      unselectedIcon: menuImages.industryUnSelected,
    },
    {
      id: 3,
      label: "News & Stories",
      selectedIcon: menuImages.newStorySelected,
      unselectedIcon: menuImages.newStoryUnSelected,
    },
    {
      id: 4,
      label: "About",
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

  return (
    <div>
      <div className="header">
        <div className="header-flex-cont">
          <div className="header-logo-wrapper" onClick={handleLogoClick}>
            <img src={Images.logo} alt="logo" />
          </div>
          <div className="header-navbar-container">
            <div
              className={`header-navbar-item ${
                showDropDown ? "header-navbar-item-active" : ""
              }`}
              onClick={() => setShowDropDown(!showDropDown)}
            >

              <div className="about-drop">
                <p>About</p>
                <span>{showDropDown ? <span style={{marginBottom:"1px"}}><img src={DownWhiteArrow} alt="DownWhiteArrow" /></span> : <img src={DownBlackArrow} alt="DownBlackArrow" /> }</span>
              </div>

            </div>
            <div className="header-navbar-item">
              <p>Pricing</p>
            </div>
            <div className="header-navbar-item">
            <Link to="/blog"><p>Blog</p></Link>
            </div>
            <div className="header-navbar-item">
            <Link to="/contact-us"><p>Contact us</p></Link>
            </div>
          </div>
          <button className="border-gradient">Log in</button>
          {showDropDown && (
            <div className="header-menu-wrapper">
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
                        onClick={() => setSelectedMenuItem(menu.id)}
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
                              selectedMenuItem === menu.id
                                ? menu?.selectedIcon
                                : menu.unselectedIcon
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
                          {selectedMenuItem === menu.id ? <img src={RightWhiteArrow} alt="RightWhiteArrow" /> : <img src={RightBlackArrow} alt="RightBlackArrow" style={{ transform: "rotate(-90deg)" }}/> }
                          {/* <NavigateNextIcon
                            htmlColor={
                              selectedMenuItem === menu.id ? "#ffffff" : ""
                            }
                            style={{ strokeWidth: "2px" }}
                          /> */}
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
                   <Link to='https://dev.memate.com.au/requestdemo'><img src={menuImages.RequestAdemo} /> </Link>
                   
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
                    <p className="header-footer-legal-text">Contact Sales</p>
                  </div>
                  <div className="header-footer-legal">
                    <img
                      src={menuImages.unselectedWatchDemo}
                      style={{ marginTop: "-2px" }}
                    />
                    <p className="header-footer-legal-text">Watch demo</p>
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
