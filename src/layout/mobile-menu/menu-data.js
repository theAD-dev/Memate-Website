
import React, { useState,useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Images from "../../assests/images";
import { Link } from "react-router-dom";
import './style.css'; 
import PanelMenu from './panel-menu';
import menuImages from "../../assests/menu-images";
import { useLocation } from "react-router-dom";


const MenuData = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };


  // const closeMenu = () => setMenuOpen(false);
  // const toggleMenu = () => setMenuOpen(!menuOpen);
  

    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > '100%' ) {
            setShow(true)
        }else{
          setShow(false)
        }
    }
  
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
      setActiveTab(index);
    };
  
    const tabs = [
      { title: 'Legal', 
        contents: {
          Legal: [
          { content: "Terms & Conditions", link: "/terms-and-conditions"},
          { content: "Privacy", link: "/privacy" },
          { content: "Website terms of Use", link: "/terms-of-use" },
          { content: "Security", link: "/security"},
          { content: "Legal", link: "/legal"},
          { content: "FAQs", link: "/faqs"}
        ],
      },
        imgTab: `${menuImages.unselectedLegal}` 
     
      },
      { title: 'Resources', 
        contents: {
          linkResources: "/resources",
          "Resources & tools": [
            { content: "Supplier Database", link: "/supplier-database" },
            { content: "delete-request", link: "/delete-request" },
          ],
          "MeMate Manual": [
            { content: "Knowledge Database", link: "/knowledge-base" },
          ],
          "Business Support": [
            { content: "Memate Wiki", link: "/memate-wiki" },
          ],
          "Brand Information": [
            { content: "Brand", link: "/brand" },
          ],
         
        },
        imgTab: `${menuImages.unselectedResources}` },
    
   
    ];
  
    const location = useLocation();
  return (
    <div className={`burger-menu-wrapper active ${show && 'hidden'}`}>
      <Menu 
        isOpen={menuOpen}
        right
        customBurgerIcon={ <img src={Images.BurgerIcon} alt='BurgerIcon' type="image/svg+xml" /> }
        customCrossIcon={ <img src={Images.burgerCloseIcon} alt='burgerCloseIcon' type="image/svg+xml" /> }
        onStateChange={handleStateChange}
        width={'359px'}
      >
        <PanelMenu />
       <div className='listMobileWrap'>
       <div className='listMobileTab'>
    
      <div className="tab-buttons">
      <ul>
        {tabs.map((tab, index) => (
          <li key={index}
          className={index === activeTab ? 'currentTab' : ''}
          onClick={() => handleTabClick(index)}><span><img src={tab.imgTab} alt='imgTab'/>{tab.title}</span></li>
        ))}
        <li><Link to='/watch-demo' className={`watch-demo ${location.pathname === "/watch-demo" ? "navbar-item-active" : ""}`}><img src={menuImages.unselectedSales} alt='unselectedSales'/>Contact Sales</Link></li>
        <li><Link to='/watch-demo' className={`watch-demo ${location.pathname === "/watch-demo" ? "navbar-item-active" : ""}`}><img src={menuImages.unselectedWatchDemo} alt='unselectedWatchDemo' />Watch demo</Link></li>
         </ul>
      </div>
      </div>
      <div className="tab-content resourceMobileIcon">
  {tabs[activeTab].contents ? (
    <ul>
      {Object.keys(tabs[activeTab].contents).map((sectionKey) => (
        <li key={sectionKey} className={sectionKey}>
          {/* Render the linkResources (which is a string, not an array) */}
          {sectionKey === "linkResources" ? (
            <Link to={tabs[activeTab].contents.linkResources}>
              <strong>{sectionKey}</strong>
            </Link>
          ) : (
            <>
             
              <ul>
                {/* Ensure that the section content is an array before calling .map() */}
                {Array.isArray(tabs[activeTab].contents[sectionKey]) && 
                  tabs[activeTab].contents[sectionKey].map((contentItem, i) => (
                    <li key={i}>
                      <Link
                        to={contentItem.link}
                        className={`resource${i} ${location.pathname === contentItem.link ? "navbar-item-active" : ""}`}
                        rel="noopener noreferrer"
                      >
                        {contentItem.content}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </>
          )}
        </li>
      ))}
    </ul>
  ) : (
    <p>No content available</p>
  )}
</div>


     
       </div>
       <div className='logoMobileWrap'>
       <div className="header-menu-header-div-memate-component">
                  <img src={Images.logo} alt="logo" type="image/svg+xml" />
                  <div className="header-menu-memate-feature">
                    <div className="header-menu-feature">
                      <img src={menuImages.meMateCheck} alt='meMateCheck'/>
                      <p className="header-menu-feature-text">
                        Easy to Learn and Use
                      </p>
                    </div>

                    <div className="header-menu-features">
                      <img src={menuImages.meMateCheck} alt='meMateCheck'/>
                      <p className="header-menu-feature-texts">Remote Acess</p>
                    </div>

                    <div className="header-menu-features">
                      <img src={menuImages.meMateCheck} alt='meMateCheck'/>
                      <p className="header-menu-feature-texts">Workflow</p>
                    </div>

                    <div className="header-menu-features">
                      <img src={menuImages.meMateCheck} alt='meMateCheck' />
                      <p className="header-menu-feature-texts">
                        Single database
                      </p>
                    </div>

                    <div className="header-menu-features">
                      <img src={menuImages.meMateCheck} alt='meMateCheck'/>
                      <p className="header-menu-feature-texts">
                        Build for Australia
                      </p>
                    </div>

                    <div className="header-menu-features">
                      <img src={menuImages.meMateCheck} alt='meMateCheck'/>
                      <p className="header-menu-feature-texts">CRM & ERP</p>
                    </div>

                    <div className="header-menu-features">
                      <img src={menuImages.meMateCheck} alt='meMateCheck'/>
                      <p className="header-menu-feature-texts">Reporting</p>
                    </div>
                  </div>
                  <div className="request-a-button-wrapper">
                   <Link to='https://app.memate.com.au/requestdemo'  target="_blank"><img src={menuImages.RequestAdemo} alt='RequestAdemo'/> </Link>
                  </div>
                </div>
       </div>
      </Menu>
      <div className='mobilemenu-wrapper'>
 <div className='mobile-logo'>
<Link to='/'><img src={Images.logo} alt="logo" type="image/svg+xml" /></Link>
 </div>
 <div className="hamburger-container"></div>
 </div>
    </div>
  );
};

export default MenuData;
