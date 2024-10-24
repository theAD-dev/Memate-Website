import style from './features.module.scss';
import './style.css'; 
import Iconsdata from "../../assests/icons";



const FeaturesComponent = () => {
   const featuresData = [
      {
        category: 'Management',
        items: [
          {
            icon: Iconsdata.ClientManagement,
            title: 'Client Management',
            description: 'Keep all your client details in one place with complete order history, discounts, and contacts.',
          },
          {
            icon: Iconsdata.SupplierManagement,
            title: 'Supplier Management',
            description: 'Maintain a supplier list for your company, accessible to management, with a complete expense history.',
          },
          {
            icon: Iconsdata.SalePipline,
            title: 'Sales Pipeline',
            description: 'Manage quotes with custom calculators, follow-ups, approvals, and a sales pipeline.',
          },
          {
            icon: Iconsdata.ManagementDashboard,
            title: 'Project Management',
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
            description: 'Send automated updates via emails and SMS. Keep all communication history in the project.',
          },
          {
            icon: Iconsdata.techScheduling,
            title: 'Scheduling',
            description: 'Monitor profitability in real-time, including expenses, timesheets, and cost of goods.',
          },
          {
            icon: Iconsdata.techInvoicing,
            title: 'Invoicing',
            description: 'Convert quotes into invoices with one click and receive payments with automated follow-ups.',
          },
          {
            icon: Iconsdata.techStatistic,
            title: 'Statistic',
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
            description: 'Access over 20 built-in reports to assist with your business analytics.',
          },
          {
            icon: Iconsdata.ProdProfitability,
            title: 'Profitability & Budgeting',
            description: 'Monitor the profitability of each order in real-time, including expenses, timesheets, and the cost of goods.',
          },
          {
            icon: Iconsdata.ProdEmployeey,
            title: 'Employee Management',
            description: 'Onboard your employees and keep contacts and details in one place.',
          },
          {
            icon: Iconsdata.ProdContractor,
            title: 'Contractor',
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
            description: 'Easily create jobs for your contractors, send them individually or in groups, link them to orders, and track profitability.',
          },
          {
            icon: Iconsdata.collabFixed,
            title: 'Fixed  or time tracker ',
            description: 'Pay contractors based on a preset agreement, whether fixed payment, time tracker, or hourly.',
          },
          {
            icon: Iconsdata.collabApproval,
            title: 'Job approval',
            description: 'Approve submitted work with one simple click and manage invoices from your contractors in one system.',
          },
          {
            icon: Iconsdata.collabLocation,
            title: 'Multi Location',
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
            description: 'Facilitate all communication within the company.',
          },
          {
            icon: Iconsdata.funTimesheet,
            title: 'Timesheet',
            description: 'Automatically receive timesheets from your staff, based on scheduled shifts and time trackers.',
          },
          {
            icon: Iconsdata.funNews,
            title: 'News',
            description: 'Create a team with your company news feed and updates.',
          },
          {
            icon: Iconsdata.funTask,
            title: 'Task management',
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
            description: 'View all jobs, shifts, holidays, and unavailability on one company calendar.',
          },
          {
            icon: Iconsdata.valueCalculators,
            title: 'Calculators',
            description: 'Hourly or fixed pricing and add margins or markups to calculate the cost for the customer.',
          },
         
        ],
      },
      
    ];
    
  return (
    <>
      <div className={style.mainMenuPages}>
        <div className={style.mainHeadTitle}>
          <h1>Features</h1>
          <p>
            Here are meMate’s main features to help you quickly understand if it
            will be suitable for your<br></br> business.
          </p>
        </div>

        {featuresData.map((featureCategory, categoryIndex) => (
          <div key={categoryIndex} className={style.mainGridWrap}>
            <h2>{featureCategory.category}</h2>
            <div className={style.mainGridwtapFlex}>
              {featureCategory.items.map((item, itemIndex) => (
                <div key={itemIndex} className={`itemFlex ${style.itemFlex}`}>
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
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturesComponent;
