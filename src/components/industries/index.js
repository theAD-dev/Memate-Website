import style from './industries.module.scss';
import './style.css'; 
import Iconsdata from "../../assests/icons";
import { Link } from 'react-router-dom';



const IndustriesComponent = () => {
   const featuresData = [
      {
        category: 'Industries',
        items: [
          {
            icon: Iconsdata.indusCreative,
            title: 'Creative Agencies ',
            link:'/creative-agencies',
            description: 'Keep all your client details in one place with complete order history, discounts, and contacts.',
          },
          {
            icon: Iconsdata.indusElectronic,
            title: 'Electronic Repair Specialists',
            link:'/electronic-repair-specialists',
            description: 'Maintain a supplier list for your company, accessible to management, with a complete expense history.',
          },
          {
            icon: Iconsdata.indusPhoto,
            title: 'Photo & Video  Agency  ',
            link:'/photo-video-agency',
            description: 'Manage quotes with custom calculators, follow-ups, approvals, and a sales pipeline.',
          },
          {
            icon: Iconsdata.indusAutomotive,
            title: 'Automotive',
            link:'/automotive',
            description: 'View all your jobs on one screen with a timeline, complete project information, history, expenses, time spent, and more.',
          },
          {
            icon: Iconsdata.indusStartups,
            title: 'Startups ',
            link:'/startups',
            description: 'View all your jobs on one screen with a timeline, complete project information, history, expenses, time spent, and more.',
          },
          {
            icon: Iconsdata.indusConstruction,
            title: 'Construction ',
            link:'/construction',
            description: 'View all your jobs on one screen with a timeline, complete project information, history, expenses, time spent, and more.',
          },
        ],
      },
  
      
    ];
    
  return (
    <>
      <div className={style.mainMenuPages}>
        <div className={`titleHead ${style.mainHeadTitle}`}>
        <h4 className='tagHeadtitle'>
           Technology from the future, solving today’s problems.
          </h4>
          <h2>industries</h2>
          <span>
          Here are meMate’s main features to help you quickly understand if it will be suitable for your business.
          </span>
          <h1 className="h1tagsseo">
          Transform Your Industry with MeMate’s Business Management Software
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
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default IndustriesComponent;
