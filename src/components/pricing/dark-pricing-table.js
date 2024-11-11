import React, { useState } from 'react';
import style from './pricing-module.module.scss';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from 'react-router-dom';
const pricingboll = 'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/pricingboll.png';



const PricingTable = () => {

  // State to toggle between monthly and yearly prices
  const [isYearly, setIsYearly] = useState(false);

  // Example pricing data
  const plans = [
    {
      name: "Business",
      image: pricingboll,
      monthlyPrice: `$99.85 <span>/ Month</span>`,
      yearlyPrice: `$1,018.47 <span>/ Year</span>`,
      companypara: 'Essentials you need to run your company',
      individuals:'For individuals',
      whatsInclude:'What’s included',
      YourSavings: `Your Savings: <span>-$179.73</span>`,
      link:'https://dev.memate.com.au/onboarding',
      action: 'Get started',
      features: ["Client Management", "Supplier Management", "Sales Pipeline","Project Management","Internal Chat","Invoicing","Statistic Reports","Profitability and Budgeting","Expenses"]
    },
    {
      name: "Business + Work",
      image: pricingboll,
      popular: 'Popular',
      YourSavings: `Your Savings: <span>-$291.91</span>`,
      monthlyPrice: `$162.17 <span>/ Month</span>`,
      yearlyPrice: `$1,654.13 <span>/ Year</span>`,
      companypara: 'Everything in Business + Employee and Contractor Management.',
      whatsInclude:'What’s included',
      individuals:'For individuals',
      link:'https://dev.memate.com.au/onboarding',
      action: 'Get started',
      features: ["Employee Management", "Time Sheets & Tracker", "Contractor Management","Job Scheduling","Company News","Task Management","Company Calendar"]
    },
    {
      name: "Entreprise",
      image: pricingboll,
      whatsInclude:'Complete Package',
      companypara: 'Everything in Business + Employee and Contractor Management.',
      companyparaSecond: 'Everything in Business + Employee and Contractor Management.',
      
      individuals:'For',
      monthlyPrice: `Contact us`,
      yearlyPrice: `Contact us`,
      companypara: 'Unlimited Customisation to Your Needs',
      bottomText:'Let’s talk',
      link:'/contact-us',
      
      action: 'Contact Us',
      features: ["Custom Integrations", "Unique Workflows", "Custom Calculators","Advanced Reporting","Custom Features Especially for Your Industry"]
    }
  ];

  return (
    <div className={style.PricingTableWrap} data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="5500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
    <div className={style.pricingtable}>
     <div className={style.toggleSwitch}>
  
  <label className={style.switch}>
    <span className={!isYearly ? style.activeLabel : ''}>Monthly</span>
    <input
      type="checkbox"
      checked={isYearly}
      onChange={() => setIsYearly(!isYearly)}
    />
    <span className={style.slider}></span>
    <span className={isYearly ? style.activeLabel : ''}>Yearly<br></br> Save 15%</span>
  </label>
  
</div>


      <div className={style.pricingcards}>
        {plans.map((plan, index) => (
          <div key={index} className={` ${style.pricingcard}`}>
            <div className={style.tophead}>
            <div className={style.head}>
            <div className={style.left1}>
            <div className={style.left}>
         {plan.image && <img src={plan.image} alt={plan.name} />}
         </div>
         {/* <p>{plan.bottomText}</p> */}
         </div>
         <div className={style.right}>
         {/* <span>{plan.individuals}</span> */}
         <h5>{plan.name}</h5>
         </div>
         {/* <div className={style.popular}>
         <span>{plan.popular}</span>
         </div> */}
         </div>
         
         <h2>{plan.bigHead}</h2>
         
         </div>
         <p className={style.companypara}>{plan.companypara}</p>
         <h5 className={style.YourSavings}
               dangerouslySetInnerHTML={{ __html: isYearly ? plan.YourSavings : "" }} />
        
            <p className={style.price}
               dangerouslySetInnerHTML={{ __html: isYearly ? plan.yearlyPrice : plan.monthlyPrice }} />
           
         
            
            <ul>
              <h4>{plan.whatsInclude}</h4>
              {plan.features.map((feature, i) => (
                <li key={i}><div className={style.checkcircleicon}><CheckCircleIcon htmlColor="#29292B" sx={{width:"25.162px"}}/></div>{feature}</li>
              ))}
            </ul>
            <Link to={plan.link} target='_blank'><button>{plan.action}</button></Link>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default PricingTable;
