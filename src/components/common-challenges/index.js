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
      <div className="common-box">
        <div className="challenges-text" data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="900"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom">
          <h3>Streamline Your Business and Enjoy Full Control:</h3>
        </div>
        <div className="control-main-sec" data-aos="fade-up"
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
                {/*  */}
                <div className="me-meta-image">
                  {/* <img src={Images.metalogo} alt="metalogo" type="image/svg+xml" /> */}
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
                      {/* <img src={Images.profileUser} alt="profileUser" type="image/svg+xml" /> */}
                      <ProfileIcon/>
                    </div>
                    <div className="user-prof">
                      {/* <img src={Images.exportTag} alt="exportTag" type="image/svg+xml" /> */}
                      <ExportTag/>
                    </div>
                    <div className="user-prof">
                      {/* <img src={Images.note} alt="note" type="image/svg+xml" /> */}
                      <Note/>
                    </div>
                    <div className="user-prof">
                      {/* <img src={Images.suppliers} alt="suppliers" type="image/svg+xml" /> */}
                      <Supplier/>
                    </div>
                    <div className="user-prof">
                      {/* <img src={Images.graph} alt="graph" type="image/svg+xml" /> */}
                      <GraphIcon/>
                    </div>
                    <div className="user-prof">
                      {/* <img src={Images.iconWork} alt="iconWork" type="image/svg+xml" /> */}
                      <WorkIcon/>
                    </div>
                    <div className="user-prof">
                      {/* <img src={Images.calender} alt="calender" type="image/svg+xml" /> */}
                      <Calender/>
                    </div>
                    <div className="user-prof">
                      {/* <img src={Images.shopicon} alt="shopicon" type="image/svg+xml" /> */}
                      <ShopIcon/>
                    </div>
                    <div className="user-prof">
                      {/* <img src={Images.emptyWallet} alt="emptyWallet" type="image/svg+xml" /> */}
                      <Empty/>
                    </div>
                    <div className="user-prof">
                      {/* <img src={Images.iconDashb} alt="iconDashb" type="image/svg+xml"/> */}
                      <DashBoardIcon/>
                    </div>
                    <div className="user-prof">
                      {/* <img src={Images.iconPople} alt="iconPople" type="image/svg+xml"/> */}
                      <IconPople/>
                    </div>
                    <div className="user-prof">
                      {/* <img src={Images.iconApproval} alt="iconApproval" type="image/svg+xml"/> */}
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
                {/* <p className="image-business"><Man/></p> */}
                <img className="mask-business" src={Images.mask} alt="mask" type="image/svg+xml" />
                {/* <p className="mask-business"><Mask/></p> */}
                <img className="graph-business" src={Images.graphBuss} alt="graphBuss" type="image/svg+xml" />
                {/* <p className="graph-business"><Graph/></p> */}

                
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
              {/* <p className="graph-number"> */}
              {/* <GraphAndNum/> */}
              {/* </p> */}
            </div>
            <div className="overcome-pro ">
              <div className="overcome-pro-content">
              <p className="overcomePara">
                {/* {" "} */}
                Overcome scaling challenges <span className="paraText">caused by manual
                processes</span>
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonChallenges;
