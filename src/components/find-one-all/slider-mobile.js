import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import Images from "../../assests/images";
import { Link } from "react-router-dom";
import TronButton from "../../layout/hover-button/tourn-but";

// Import images
const SalesImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/Sales-image.svg";
const CalculationImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/calculation-image.svg";
const EmployeesImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/employees-image.svg";
const SchedulingImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/sheduling-image.svg";
const CommunicationImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/communication-image.svg";
const ReportingImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/reporting-image.svg";
const InvoicingImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/invoicing-image.svg";
const ProfitabilityImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/profitablity-image.svg";
const ManagementImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/managment-image.svg";



const SliderTabMobile = () => {
  // Define images corresponding to each tab
  const tabs = [
    { label: "Sales", image: SalesImage ,iconIamgeActive:Images.saleActive,iconIamge:Images.sales,head:'Sales', para:'Manage every step of the sales process—quotes, proposals, follow-ups, and approvals—through a simple, efficient pipeline',link:'/features/sales-management-tools' },
    { label: "Invoicing", image: InvoicingImage,iconIamgeActive:Images.quoteActive,iconIamge:Images.quote ,head:'Quoting & Invoicing' ,para:'Create invoices, receive payments, and set reminders. Send quotes for customers to accept and follow up effortlessly.',link:'/features/invoicing-software' },
    { label: "Profitability", image: ProfitabilityImage,iconIamgeActive:Images.profitabilityActive,iconIamge:Images.profitability   ,head:'Profitability' ,para:'Budgeting, real-time operational profit tracking for each project, and expense management, even for long-term projects, make this an indispensable tool.',link:'/features/profitability-and-budgeting-software' },
    { label: "Management", image: ManagementImage,iconIamgeActive:Images.managmentActive,iconIamge:Images.management  ,head:'Management' ,para:'See every ongoing project on one screen with exceptional clarity and functionality',link:'/features/task-management-software'  }, // Default active tab
    { label: "Reporting", image: ReportingImage,iconIamgeActive:Images.reportingActive,iconIamge:Images.reporting  ,head:'Reporting' ,para:'Real-time profitability, goals, and statistics. Multiple, yet simple business overviews with detailed accounting insights.',link:'/features/business-reporting-tools'  },
    { label: "Communication", image: CommunicationImage,iconIamgeActive:Images.communicationActive,iconIamge:Images.communication   ,head:'Communication' ,para:'Communicate with your team and clients in just a few clicks. Send notifications via SMS, provide quotes, or update project status with ease.',link:'/features/team-communication-tools' },
    { label: "Calculation", image: CalculationImage,iconIamgeActive:Images.calculationActive,iconIamge:Images.calculation   ,head:'Calculation' ,para:'Create instant, accurate quotes and budgets with pre-configured products and services',link:'/features/contractor-management-software' },
    { label: "Scheduling", image: SchedulingImage,iconIamgeActive:Images.schedulingActive,iconIamge:Images.scheduling  ,head:'Scheduling & Work Management   ' ,para:'Workforce management, timesheets, and job approvals—everything you need to efficiently manage your team.',link:'/features/job-management-software'  },
    { label: "Employees", image: EmployeesImage,iconIamgeActive:Images.employeeActive,iconIamge:Images.employees  ,head:'Employees and Contractors' ,para:'Time tracking and contractor management, as well as job assignment and communication, are made easier with our mobile application.',link:'/features/employee-management-tools'  },
  ];

  
  const [selectedTab, setSelectedTab] = useState(1);

  const [fadeClass, setFadeClass] = useState("fade-in");

  const handleTabClick = (index) => {
    setSelectedTab(index);
    triggerFadeIn();
  };

  const triggerFadeIn = () => {
    setFadeClass(""); // Remove fade-in class temporarily
    setTimeout(() => {
      setFadeClass("fade-in"); // Reapply fade-in class for the transition
    }, 50);
  };

  const tabSliderSettings = {
    slidesToShow: 2,
    slidesToScroll: 3,
    focusOnSelect: true,
    infinite: true,
    centerMode: true,
    centerPadding: "40px",
    arrows: true,
    initialSlide: 3,
    speed: 500,
    autoPlay: false,
    afterChange: (current) => {
      setSelectedTab(current); 
      triggerFadeIn();
    },
  };

  return (
    <div className="slider-container sliderTabWrapper sliderTabWrapperApp" >
      

      {/* Tab List Slider */}
      <Slider {...tabSliderSettings} className="tab-slider" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1300"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-item ${index === selectedTab ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            <div className="boxCenterMode">
            <p>
            <img
                src={index === selectedTab ? tab.iconIamgeActive : tab.iconIamge}
                alt={`${tab.label} icon`}
              />
               <span> {tab.label}</span>
          
                </p>
            </div>
          </div>
        ))}
      </Slider>
      {/* Large Image Display */}
      <div className="large-image-container" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1400"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <img
          src={tabs[selectedTab].image}
          alt={tabs[selectedTab].label}
              className={`large-image ${fadeClass}`}
        />
             <div className="how-to-use">
        <p>{tabs[selectedTab].head}</p>
      </div>

      <div className="businesses-mode">
        <span>
        {tabs[selectedTab].para}
        </span>
      </div>
      </div>
      <div className="request-btn request-btnApp" style={{marginTop: "0"}}>
        <Link to={tabs[selectedTab].link} className="nav-btn--get-started get-started-border-box navbar-link"><TronButton text="Find more" /></Link>
      </div> 
    </div>
  );
};

export default SliderTabMobile;
