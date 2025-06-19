import Images from "../../assests/images";
import ApprovalIcon from "../../svg/ApprovalIcon";
import Calender from "../../svg/Calender";
import DashBoardIcon from "../../svg/DashBoardIcon";
import Empty from "../../svg/Empty";
import ExportTag from "../../svg/ExportTag";
import Graph from "../../svg/Graph";
import GraphAndNum from "../../svg/GraphAndNum";
import GraphIcon from "../../svg/GraphIcon";
import IconPople from "../../svg/IconPople";
import Man from "../../svg/Man";
// import Man from "../../svg/Man";
import Mask from "../../svg/Mask";
import MetaLogo from "../../svg/MetaLogo";
import Note from "../../svg/Note";
import ProfileIcon from "../../svg/ProfileIcon";
import ShopIcon from "../../svg/ShopIcon";
import Supplier from "../../svg/Supplier";
import WorkIcon from "../../svg/WorkIcon";
import "./style.css";


const CommonChallenges = () => {
  return (
    <div className="common-box-wrapper">
      <div className="common-box1">
        <div className="challenges-text" data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="900"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom">
          <h3>Streamline Your Business <br/>and Enjoy Full Control</h3>
          <p>Track, analyze, and manage all your business activities in one clear, organized place.</p>
        </div>
        <div className="streamlineimggrid" data-aos="fade-up"
          data-aos-offset="50"  >
            <div className="gridboxstreamline item1"> 
             <img
                srcSet={`${'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/streamline-img1-3x.png'} 600w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/streamline-img1-2x.png'} 1200w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/streamline-img1-1x.png'} 1800w`}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
                src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/streamline-img1-1x.png'} 
                alt="Landing Hero"
              />
              <h4>A system designed for complete <br/> control over business activities</h4>
            </div>
            <div className="gridboxstreamline item2"> 
             <img
                srcSet={`${'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/streamline-img2-3x.png'} 600w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/streamline-img2-2x.png'} 1200w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/streamline-img2-1x.png'} 1800w`}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
                src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/streamline-img2-1x.png'} 
                alt="Landing Hero"
              />
               <h4>Track Every Expense and Time <br/> Allocated to Your Projects</h4>
            </div>
            <div className="gridboxstreamline item3"> 
             <img
                srcSet={`${'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/streamline-img3-3x.png'} 600w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/streamline-img3-2x.png'} 1200w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/streamline-img3-1x.png'} 1800w`}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
                src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/streamline-img3-1x.png'} 
                alt="Landing Hero"
              />
              <h4>See and predict unprofitable <br/> business activities.</h4>
            </div>
            <div className="gridboxstreamline item4"> 
             <img
                srcSet={`${'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/streamline-img4-3x.png'} 600w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/streamline-img4-2x.png'} 1200w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/streamline-img4-1x.png'} 1800w`}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
                src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/streamline-img4-1x.png'} 
                alt="Landing Hero"
              />
                <h4>Overcome scaling challenges <br/> caused by manual processes </h4>
            </div>
          </div>
        {/* <div className="control-main-sec" data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom">
          <div className="me-meta-card">
            <div className="max-cont-width">
              <div className="met-points" >
                <p className="memateMetaLogo">
                <MetaLogo/>
                </p>
                <img className="main-bg-img" src={Images.cardBg} alt="cardBg" />
                <div className="me-meta-image">
                  <p className="card-text">
                    Establish comprehensive control within the company 24/7 from
                    any point in the world.
                  </p>
                </div>
              </div>
              <div className="internal-control ">
                <div className="internal-control-content">
                  <div className="control-text">
                    <p>A System Designed for <strong>Complete Control Over Business</strong> Activities</p>
                  </div>
                  <div className="icons">
                    <div className="user-prof">
                      <ProfileIcon/>
                    </div>
                    <div className="user-prof">
                      <ExportTag/>
                    </div>
                    <div className="user-prof">
                      <Note/>
                    </div>
                    <div className="user-prof">
                      <Supplier/>
                    </div>
                    <div className="user-prof">
                      <GraphIcon/>
                    </div>
                    <div className="user-prof">
                      <WorkIcon/>
                    </div>
                    <div className="user-prof">
                      <Calender/>
                    </div>
                    <div className="user-prof">
                      <ShopIcon/>
                    </div>
                    <div className="user-prof">
                      <Empty/>
                    </div>
                    <div className="user-prof">
                      <DashBoardIcon/>
                    </div>
                    <div className="user-prof">
                      <IconPople/>
                    </div>
                    <div className="user-prof">
                      <ApprovalIcon/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="predict-side">
              <div className="activities-text">
                <p>
                See <strong className="strongText"> and predict unprofitable </strong>{" "}
                  business activities.
                </p>
              </div>
              <div className="business-profile">
                <img className="image-business" src={Images.busprofile} alt="busprofile"/>
                <img className="mask-business" src={Images.mask} alt="mask" type="image/svg+xml" />
                <img className="graph-business" src={Images.graphBuss} alt="graphBuss" type="image/svg+xml" />
              </div>
            </div>
          </div>
          <div className="project-profitability project-profitability-space" data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="1030"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom">
            <div className="inner-text">
              <div className="inner-text-container">
              <p className="heading-flex"><span className="spanTextMQ">Track Every Expense</span> <br/></p><p>&nbsp;and Time Allocated to Your Projects</p>
              </div>
            </div>
          </div>
          <div className="real-time" data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="50"
            data-aos-duration="1040"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom">
            <div className="gain-time ">
              <img className="graph-number" src={Images.graphAndNum} alt="graphAndNum" type="image/svg+xml" />
            </div>
            <div className="overcome-pro ">
              <div className="overcome-pro-content">
              <p className="overcomePara">
                Overcome scaling challenges <span className="paraText">caused by manual
                processes</span>
              </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CommonChallenges;
