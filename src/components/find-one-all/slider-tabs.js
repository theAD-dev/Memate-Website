import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import Images from "../../assests/images";
import { Link } from "react-router-dom";

// Import images
import SalesImage from "../../assests/images/Sales-image.svg";
import CalculationImage from "../../assests/images/calculation-image.svg";
import EmployeesImage from "../../assests/images/employees-image.svg";
import SchedulingImage from "../../assests/images/sheduling-image.svg";
import CommunicationImage from "../../assests/images/communication-image.svg";
import ReportingImage from "../../assests/images/reporting-image.svg";
import InvoicingImage from "../../assests/images/invoicing-image.svg";
import ProfitabilityImage from "../../assests/images/profitablity-image.svg";
import ManagementImage from "../../assests/images/managment-image.svg";



const SliderTab = () => {
  // Define images corresponding to each tab
  const tabs = [
    { label: "Sales", image: SalesImage ,iconIamgeActive:Images.saleActive,iconIamge:Images.sales,head:'Sales', para:'Manage every step of the sales process—quotes, proposals, follow-ups, and approvals—through a simple, efficient pipeline',link:'/feature-page-sales' },
    { label: "Invoicing", image: InvoicingImage,iconIamgeActive:Images.quoteActive,iconIamge:Images.quote ,head:'Quoting & Invoicing' ,para:'Create invoices, receive payments, and set reminders. Send quotes for customers to accept and follow up effortlessly.',link:'/invoicing' },
    { label: "Profitability", image: ProfitabilityImage,iconIamgeActive:Images.profitabilityActive,iconIamge:Images.profitability   ,head:'Profitability' ,para:'Budgeting, real-time operational profit tracking for each project, and expense management, even for long-term projects, make this an indispensable tool.',link:'/profitability-and-budgeting' },
    { label: "Management", image: ManagementImage,iconIamgeActive:Images.managmentActive,iconIamge:Images.management  ,head:'Management' ,para:'See every ongoing project on one screen with exceptional clarity and functionality',link:'/task-management'  }, // Default active tab
    { label: "Reporting", image: ReportingImage,iconIamgeActive:Images.reportingActive,iconIamge:Images.reporting  ,head:'Reporting' ,para:'Real-time profitability, goals, and statistics. Multiple, yet simple business overviews with detailed accounting insights.',link:'/reports'  },
    { label: "Communication", image: CommunicationImage,iconIamgeActive:Images.communicationActive,iconIamge:Images.communication   ,head:'Communication' ,para:'Communicate with your team and clients in just a few clicks. Send notifications via SMS, provide quotes, or update project status with ease.',link:'/communication' },
    { label: "Calculation", image: CalculationImage,iconIamgeActive:Images.calculationActive,iconIamge:Images.calculation   ,head:'Calculation' ,para:'Create instant, accurate quotes and budgets with pre-configured products and services',link:'/contractor' },
    { label: "Scheduling", image: SchedulingImage,iconIamgeActive:Images.schedulingActive,iconIamge:Images.scheduling  ,head:'Scheduling & Work Management   ' ,para:'Workforce management, timesheets, and job approvals—everything you need to efficiently manage your team.',link:'/scheduling'  },
    { label: "Employees", image: EmployeesImage,iconIamgeActive:Images.employeeActive,iconIamge:Images.employees  ,head:'Employees and Contractors' ,para:'Time tracking and contractor management, as well as job assignment and communication, are made easier with our mobile application.',link:'/employee-management'  },
  ];

  
  const [selectedTab, setSelectedTab] = useState(3);

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
    slidesToShow: 9,
    slidesToScroll: 1,
    focusOnSelect: true,
    infinite: true,
    centerMode: true,
    centerPadding: "40px",
    arrows: true,
    initialSlide: 3,
    speed: 500,
   autoPlay: false,
    afterChange: (current) => {
      setSelectedTab(current); // Ensure selected tab is synced with slider
      triggerFadeIn(); // Trigger animation when slide changes
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 9,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="slider-container sliderTabWrapper sliderTabWrapperApp">
      

      {/* Tab List Slider */}
      <Slider {...tabSliderSettings} className="tab-slider">
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
      <div className="large-image-container">
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

        <Link to={tabs[selectedTab].link}><button className="get-started-btn">Find more</button></Link>
    
      </div>
      
    </div>
  );
};

export default SliderTab;
