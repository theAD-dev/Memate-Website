import { Link } from 'react-router-dom';
import style from './mematefaqs.module.scss';
import './style.css'; 
import { Helmet } from 'react-helmet';
import QuestionAnswer from './ans-questions';
const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";



const MemateFaqsComponent = () => {
  
    
  return (
    <>
   <Helmet>
    <title>meMate FAQs</title>
    <meta property="og:title" content="meMate FAQs" />
      <meta property="og:description" content="meMate FAQs
    " />
</Helmet>
<div className="parent-blog">
<div className="pageBreadcrumbs">
                <ul className={style.linkstyleDisable}>
                    <li><a href='/' className={style.linkstyleDisable}>Home</a></li>/
                    <li><a href='/' className={style.linkstyleDisable}>meMate PAQs</a></li>
                    {/* <li><a>sds</a></li> */}
                </ul>
                <a href="/" className="backButStories">
                    <img src={arrowIconBack} alt="Arrow" /> Back
                </a>
            </div>
    <div className={`${style.mainMenuPages} ${style.ResourcesPages}`}>
    <div className={`titleHead ${style.mainHeadTitle}`}>
    
          <h2>FAQs</h2>
        
          <h1 className="h1tagsseo">
          Your Ultimate Guide to Simplifying Business Management
          </h1>
          
        </div>
    
<QuestionAnswer />
    </div>
    </div>

 
     </>
  );
};

export default MemateFaqsComponent;
