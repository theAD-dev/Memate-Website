import React,{useState} from 'react'; 
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import menuImages from '../../assests/menu-images';
const RightBlackArrow = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/down-black-arrow.svg"
const RightColorArrow = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/right-color-arrow.svg"


const items = [
    { 
        title: "Features", 
        imgtitle: `${menuImages.featureIcon}`,  
        //heading:"Management", 
        contents: {
            Management: [
              { content: "Client Management", link: "/client-management", img: `${menuImages.clientManagement}` },
              { content: "Supplier Management", link: "/supplier-management", img: `${menuImages.supplierManagement}` },
              { content: "Sales Pipeline", link: "/feature-page-sales", img: `${menuImages.salesPipeline}` },
              { content: "Project Management", link: "/project-management", img: `${menuImages.projectManagement}` }
            ],
            Productivity: [
              { content: "Reports", link: "/reports", img: `${menuImages.reports}` },
              { content: "Profitability & Budgeting", link: "/profitability-and-budgeting", img: `${menuImages.profitAndBudget}` },
              { content: "Employee Management", link: "/employee-management", img: `${menuImages.emplyManage}` },
              { content: "Contractor", link: "/contractor", img: `${menuImages.contractor}` }
            ],
            Functionality: [
              { content: "Internal chat", link: "/internal-chat", img: `${menuImages.internalChat}` },
              { content: "Timesheet", link: "/time-sheet", img: `${menuImages.timeSheet}` },
              { content: "Features News", link: "/features-news", img: `${menuImages.news}` },
              { content: "Task Management", link: "/task-management", img: `${menuImages.taskManagement}` }
            ],
            Technology: [
                { content: "Communication", link: "/communication", img: `${menuImages.communicationIcon}` },
                { content: "Scheduling", link: "/scheduling", img: `${menuImages.schduling}` },
                { content: "Invoicing", link: "/invoicing", img: `${menuImages.invoicing}` },
                { content: "Statistic", link: "/statistic", img: `${menuImages.statistics}` }
              ],
              Collaboration: [
                { content: "Schedule Jobs", link: "/schedule-jobs", img: `${menuImages.jobSchdule}` },
                { content: "Fixed  or time tracker", link: "/time-tracker", img: `${menuImages.jobHouly}` },
                { content: "Job approval", link: "/job-approval", img: `${menuImages.jobApproval}` },
                { content: "Multi Location", link: "/multi-location", img: `${menuImages.MultiLocation}` }
              ],
              Value: [
                { content: "Calendar", link: "/calendar", img: `${menuImages.calendar}` },
                { content: "Calculators", link: "/calculators", img: `${menuImages.Calculators}` },
              ]
          }
    },
    { 
        title: "Industries", 
        imgtitle: `${menuImages.industriesIcon}`,  
        contents: {
            Industries: [
              { content: "Creative Agencies", link: "/creative-agencies", img: `${menuImages.creativeAgency}` },
              { content: "Electronic Repair Specialists", link: "/electronic-repair-specialists", img: `${menuImages.electronic}` },
              { content: "Photo & Video Agency", link: "/photo-video-agency", img: `${menuImages.photoVideoAgency}` },
              { content: "Automotive", link: "/automotive", img: `${menuImages.automotive}` },
              { content: "Startups", link: "/startups", img: `${menuImages.startUps}` },
              { content: "Construction", link: "/construction", img: `${menuImages.construction}` }
            ],
        
          }
    },
    { 
        title: "News & Stories", 
        imgtitle: `${menuImages.newsIconMobile}`,  
        contents: {
            News: [
              { contentNews: "Our", boldText:"News", paraText: "Industry-related news to help you in business management.", button: 'Read more', link: "/news" },
              { contentNews: "Customer", boldText:"Stories", paraText: "Read how other companies using memate", button: 'Read more', link: "/customer-stories" },
              { contentNews: "Software", boldText:"Update", paraText: "Our Latest Software Updates, Releases, and Upcoming Development Features", button: 'Read more', link: "/feature-page-sales" },
            ]
        } 
          
    },
    { 
        title: "About", 
        imgtitle: `${menuImages.aboutMobileIcon}`,  
        contents: {
            News: [
              { contentNews: "About", boldText:"Memate",  button: 'Read more', link: "/news" },
              { contentNews: "Our", boldText:"Careers",  button: 'Check Careers', link: "/customer-stories" },
              { contentNews: "Contact",boldText:"Our team",  button: 'Contact', link: "/feature-page-sales" },
            ]
        } 
          
    },
  
  
  ];
const PanelMenu = () => {
     // Render the Accordion component
     const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
   <>
    <div className="accordion">
    {items.map((item, index) => (
                <div key={index} className="accordion-item">
                      <div
              className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            >
                        <span><img src={item.imgtitle} alt={item.title} />{item.title}</span>    {activeIndex === index ? <img src={RightColorArrow} alt="RightColorArrow" className={activeIndex === index ? 'rotate' : ''}/> : <img src={RightBlackArrow} alt='RightBlackArrow' style={{ transform: "rotate(-90deg)" }} />}
                    </div>
                    {activeIndex === index && (
                        <div className={`accordion-content ${item.title}`}>
                            <ul>
                                {Object.keys(item.contents).map((sectionKey) => (
                                    <li key={sectionKey} className={sectionKey}>
                                        <strong>{sectionKey}</strong>
                                        <ul className='orderList'>
                                            {item.contents[sectionKey].map((contentItem, i) => (
                                                <li key={i}>
                                                    <Link 
                                                to={contentItem.link} 
                                                className={location.pathname === contentItem.link ? "navbar-item-active" : ""} 
                                                rel="noopener noreferrer"
                                              >  
                                                        {contentItem.img ? (
                                                            <img src={contentItem.img} alt={contentItem.content} />
                                                        ) : (
                                                            <div className='newsWrapMobile'>
                                                            <div className='newsWrapbox'>
                                                            <p> {contentItem.contentNews}<span>{contentItem.boldText}</span></p>
                                                            <p className='first-news-description'> {contentItem.paraText && contentItem.paraText}</p>
                                                            {contentItem.button && <button className='first-news-button'>{contentItem.button}</button>}
                                                            </div>
                                                            </div>
                                                        )}
                                                       {contentItem.content}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}

    </div>

   </>
  )
}

export default PanelMenu
