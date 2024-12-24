import style from './features.module.scss';
import './style.css'; 
import Iconsdata from "../../assests/icons";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';



const FeaturesComponent = () => {
   const featuresData = [
      {
        category: 'Management',
        items: [
          {
            icon: Iconsdata.ClientManagement,
            title: 'Client Management',
            link:'/client-management',
            description: 'Keep all your client details in one place with complete order history, discounts, and contacts.',
            
          },
          {
            icon: Iconsdata.SupplierManagement,
            title: 'Supplier Management',
            link:'/supplier-management',
            description: 'Maintain a supplier list for your company, accessible to management, with a complete expense history.',
          },
          {
            icon: Iconsdata.SalePipline,
            title: 'Sales Pipeline',
            link:'/feature-page-sales',
            description: 'Manage quotes with custom calculators, follow-ups, approvals, and a sales pipeline.',
          },
          {
            icon: Iconsdata.ManagementDashboard,
            title: 'Project Management',
            link:'/project-management',
            description: 'View all your jobs on one screen with a timeline, complete project information, history, and more.',
          },
        ],
      },
      {
        category: 'Technology',
        items: [
          {
            icon: Iconsdata.techCommunication,
            title: 'Communication',
            link:'/communication',
            description: 'Send automated updates via emails and SMS. Keep all communication history in the project.',
          },
          {
            icon: Iconsdata.techScheduling,
            title: 'Scheduling',
            link:'/scheduling',
            description: 'Monitor profitability in real-time, including expenses, timesheets, and cost of goods.',
          },
          {
            icon: Iconsdata.techInvoicing,
            title: 'Invoicing',
            link:'/invoicing',
            description: 'Convert quotes into invoices with one click and receive payments with automated follow-ups.',
          },
          {
            icon: Iconsdata.techStatistic,
            title: 'Statistic',
            link:'/statistic',
            description: 'Motivate your management with a simple, real-time target system.',
          },
        ],
      },
      {
        category: 'Productivity',
        items: [
          {
            icon: Iconsdata.ProdReports,
            title: 'Reports',
            link:'/reports',
            description: 'Access over 20 built-in reports to assist with your business analytics.',
          },
          {
            icon: Iconsdata.ProdProfitability,
            title: 'Profitability & Budgeting',
            link:'/profitability-and-budgeting',
            description: 'Monitor the profitability of each order in real-time, including expenses, timesheets, and the cost of goods.',
          },
          {
            icon: Iconsdata.ProdEmployeey,
            title: 'Employee Management',
            link:'/employee-management',
            description: 'Onboard your employees and keep contacts and details in one place.',
          },
          {
            icon: Iconsdata.ProdContractor,
            title: 'Contractor',
            link:'/contractor',
            description: 'Create a list of trusted contractors with a complete history of cooperation and ratings for better collaboration.',
          },
        ],
      },
      {
        category: 'Collaboration',
        items: [
          {
            icon: Iconsdata.collabSchedule,
            title: 'Schedule Jobs',
            link:'/schedule-jobs',
            description: 'Easily create jobs for your contractors, send them individually or in groups, link them to orders, and track profitability.',
          },
          {
            icon: Iconsdata.collabFixed,
            title: 'Fixed  or time tracker ',
            link:'/time-tracker',
            description: 'Pay contractors based on a preset agreement, whether fixed payment, time tracker, or hourly.',
          },
          {
            icon: Iconsdata.collabApproval,
            title: 'Job approval',
            link:'/job-approval',
            description: 'Approve submitted work with one simple click and manage invoices from your contractors in one system.',
          },
          {
            icon: Iconsdata.collabLocation,
            title: 'Multi Location',
            link:'/multi-location',
            description: 'Create a separate management dashboard for multiple offices or locations.',
          },
        ],
      },
      {
        category: 'Functionality',
        items: [
          {
            icon: Iconsdata.funInternal,
            title: 'Internal chat',
            link:'/internal-chat',
            description: 'Facilitate all communication within the company.',
          },
          {
            icon: Iconsdata.funTimesheet,
            title: 'Time sheet',
            link:'/time-sheet',
            description: 'Automatically receive timesheets from your staff, based on scheduled shifts and time trackers.',
          },
          {
            icon: Iconsdata.funNews,
            title: 'News',
            link:'/features-news',
            description: 'Create a team with your company news feed and updates.',
          },
          {
            icon: Iconsdata.funTask,
            title: 'Task management',
            link:'/task-management',
            description: 'Utilize a task to-do list feature to improve efficiency.',
          },
        ],
      },
      {
        category: 'Value',
        items: [
          {
            icon: Iconsdata.valueCalendar,
            title: 'Calendar',
            link:'/calendar',
            description: 'View all jobs, shifts, holidays, and unavailability on one company calendar.',
          },
          {
            icon: Iconsdata.valueCalculators,
            title: 'Calculators',
            link:'/calculators',
            description: 'Hourly or fixed pricing and add margins or markups to calculate the cost for the customer.',
          },
         
        ],
      },
      
    ];
    
  return (
    <>
     <Helmet>
    <title>Features | Business Management Software and Workflow Automation Tools in Australia</title>
    <meta property="og:title" content="Features | Business Management Software and Workflow Automation Tools in Australia" />
      <meta property="og:description" content="Discover the comprehensive features of MeMate, Australia’s top business management software. From CRM for small businesses to project management features and workflow automation tools, we have it all." />
</Helmet>
      <div className={style.mainMenuPages}>
        <div className={`titleHead ${style.mainHeadTitle}`}>
        <h4 className='tagHeadtitle '>
           Technology from the future, solving today’s problems.
          </h4>
          <h2>Features</h2>
          <span>
          Here are meMate’s main features to help you quickly understand if it will be suitable for your<br/> business.
          </span>
          <h1 className="h1tagsseo">
          Comprehensive Features of Business Management and CRM <br/>Software
          </h1>
        </div>

        {featuresData.map((featureCategory, categoryIndex) => (
          <div key={categoryIndex} className={style.mainGridWrap}>
            <h2 data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">{featureCategory.category}</h2>
            <div className={style.mainGridwtapFlex}>
              {featureCategory.items.map((item, itemIndex) => (
              <Link data-aos="fade-up"
              data-aos-offset="50"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-bottom" to={item.link}>
                <div key={itemIndex} className={`itemFlex  ${style.itemFlex}`}>
                  <div className={style.itemicon}>
                    <img
                      className={`withoutHover ${style.withoutHover}`}
                      src={item.icon}
                      alt={item.title}
                    />
                  </div>
                  <div className={style.itemText}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturesComponent;
