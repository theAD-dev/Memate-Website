
import React, { useState,useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Images from "../../assests/images";
import { Link } from "react-router-dom";
import './style.css'; 
import { PanelMenu } from 'primereact/panelmenu';
const items = [     
  {
      label: 'Files',
      icon: 'pi pi-file',
      items: [
          {
              label: 'Documents',
              icon: 'pi pi-file',
              items: [
                  {
                      label: 'Invoices',
                      icon: 'pi pi-file-pdf',
                      items: [
                          {
                              label: 'Pending',
                              icon: 'pi pi-stop'
                          },
                          {
                              label: 'Paid',
                              icon: 'pi pi-check-circle'
                          }
                      ]
                  },
                  {
                      label: 'Clients',
                      icon: 'pi pi-users'
                  }
              ]
          },
          {
              label: 'Images',
              icon: 'pi pi-image',
              items: [
                  {
                      label: 'Logos',
                      icon: 'pi pi-image'
                  }
              ]
          }
      ]
  },
  {
      label: 'Cloud',
      icon: 'pi pi-cloud',
      items: [
          {
              label: 'Upload',
              icon: 'pi pi-cloud-upload'
          },
          {
              label: 'Download',
              icon: 'pi pi-cloud-download'
          },
          {
              label: 'Sync',
              icon: 'pi pi-refresh'
          }
      ]
  },
  {
      label: 'Devices',
      icon: 'pi pi-desktop',
      items: [
          {
              label: 'Phone',
              icon: 'pi pi-mobile'
          },
          {
              label: 'Desktop',
              icon: 'pi pi-desktop'
          },
          {
              label: 'Tablet',
              icon: 'pi pi-tablet'
          }
      ]
  }
];
const MenuData = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };


  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 250 ) {
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
          { content: "Legal", link: "/legal"}
        ],
      },
        imgTab: `${menuImages.unselectedLegal}` 
     
      },
      { title: 'Resources', 
        contents: {
          "Resources & tools": [
            { content: "Supplier Database", link: "/supplier-database" },
            { content: "delete-request", link: "/supplier-management" },
          ],
          "MeMate Manual": [
            { content: "Knowledge Database", link: "/knowledge-base" },
          ],
          "Business Support": [
            { content: "Memate Wiki", link: "/memate-wiki" },
          ],
         
        },
        imgTab: `${menuImages.unselectedResources}` },
    
   
    ];
  
 
  return (
    <div className={`burger-menu-wrapper active ${show && 'hidden'}`}>
      <Menu 
        isOpen={menuOpen}
        right
        customBurgerIcon={ <img src={Images.BurgerIcon} /> }
        customCrossIcon={ <img src={Images.burgerCloseIcon} /> }
        onStateChange={handleStateChange}
        width={'359px'}
      >
<<<<<<< HEAD
        <PanelMenu />
       <div className='listMobileWrap'>
       <div className='listMobileTab'>
    
      <div className="tab-buttons">
      <ul>
        {tabs.map((tab, index) => (
          <li key={index}
          className={index === activeTab ? 'currentTab' : ''}
          onClick={() => handleTabClick(index)}><span><img src={tab.imgTab} />{tab.title}</span></li>
        ))}
        <li><Link to='/watch-demo'><img src={menuImages.unselectedSales} />Contact Sales</Link></li>
        <li><Link to='/watch-demo'><img src={menuImages.unselectedWatchDemo} />Watch demo</Link></li>
         </ul>
      </div>
      </div>
      <div className="tab-content">
  {tabs[activeTab].contents ? (
    <ul>
      {Object.keys(tabs[activeTab].contents).map((sectionKey) => (
        <li key={sectionKey} className={sectionKey}>
          <strong>{sectionKey}</strong>
          <ul>
            {tabs[activeTab].contents[sectionKey].map((contentItem, i) => (
              <li key={i}>
                <Link to={contentItem.link} target="_blank" rel="noopener noreferrer">
                  {contentItem.content}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  ) : (
    <p>dzfsdf</p>
  )}
</div>

    
        {/* <ul>
          <li><Link to='/watch-demo'><img src={menuImages.unselectedLegal} />Legal</Link></li>
          <li><Link to='/watch-demo'><img src={menuImages.unselectedResources} />Resources</Link></li>
          <li><Link to='/contact-sales'><img src={menuImages.unselectedSales} />Contact Sales</Link></li>
          <li><Link to='/watch-demo'><img src={menuImages.unselectedWatchDemo} />Watch demo </Link></li>
          </ul> */}
     
       </div>
       <div className='logoMobileWrap'>
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
=======
       
        <a onClick={closeMenu} className="menu-item" href="/about">
          About
        </a>
        <a onClick={closeMenu} className="menu-item" href="/services">
          Services
        </a>
        <a onClick={closeMenu} className="menu-item" href="/contact">
          Contact
        </a>
>>>>>>> f5e0a2492cea95c5b1400834426b9501fda1dd66
      </Menu>
      <div className='mobilemenu-wrapper'>
 <div className='mobile-logo'>
<Link to='/'><img src={Images.logo} alt="logo" /></Link>
 </div>
 <div className="hamburger-container">

    </div>
 </div>
    
     

      
    </div>
  );
};

export default MenuData;
