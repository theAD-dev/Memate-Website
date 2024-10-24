import style from './industries.module.scss';
import './style.css'; 
import Iconsdata from "../../assests/icons";



const IndustriesComponent = () => {
   const featuresData = [
      {
        category: 'Industries',
        items: [
          {
            icon: Iconsdata.indusCreative,
            title: 'Creative Agencies ',
            description: 'Keep all your client details in one place with complete order history, discounts, and contacts.',
          },
          {
            icon: Iconsdata.indusElectronic,
            title: 'Electronic Repair Specialists',
            description: 'Maintain a supplier list for your company, accessible to management, with a complete expense history.',
          },
          {
            icon: Iconsdata.indusPhoto,
            title: 'Photo & Video  Agency  ',
            description: 'Manage quotes with custom calculators, follow-ups, approvals, and a sales pipeline.',
          },
          {
            icon: Iconsdata.indusAutomotive,
            title: 'Automotive',
            description: 'View all your jobs on one screen with a timeline, complete project information, history, expenses, time spent, and more.',
          },
          {
            icon: Iconsdata.indusStartups,
            title: 'Startups ',
            description: 'View all your jobs on one screen with a timeline, complete project information, history, expenses, time spent, and more.',
          },
          {
            icon: Iconsdata.indusConstruction,
            title: 'Construction ',
            description: 'View all your jobs on one screen with a timeline, complete project information, history, expenses, time spent, and more.',
          },
        ],
      },
  
      
    ];
    
  return (
    <>
      <div className={style.mainMenuPages}>
        <div className={style.mainHeadTitle}>
          <h1>industries</h1>
          <p>Here are meMate’s main features to help you quickly understand if it will be suitable for your<br></br> business.</p>
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

export default IndustriesComponent;
