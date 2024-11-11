import Images from "../../assests/images";
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
                <img className="main-bg-img" src={Images.cardBg} />
                <div className="me-meta-image">
                  <img src={Images.metalogo} />
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
                      <img src={Images.profileUser} />
                    </div>

                    <div className="user-prof">
                      <img src={Images.exportTag} />
                    </div>

                    <div className="user-prof">
                      <img src={Images.note} />
                    </div>

                    <div className="user-prof">
                      <img src={Images.suppliers} />
                    </div>

                    <div className="user-prof">
                      <img src={Images.graph} />
                    </div>

                    <div className="user-prof">
                      <img src={Images.iconWork} />
                    </div>

                    <div className="user-prof">
                      <img src={Images.calender} />
                    </div>
                    <div className="user-prof">
                      <img src={Images.shopicon} />
                    </div>
                    <div className="user-prof">
                      <img src={Images.emptyWallet} />
                    </div>
                    <div className="user-prof">
                      <img src={Images.iconDashb} />
                    </div>

                    <div className="user-prof">
                      <img src={Images.iconPople} />
                    </div>
                    <div className="user-prof">
                      <img src={Images.iconApproval} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="predict-side">
              <div className="activities-text">
                <p>
                see <span> and predict unprofitable </span>{" "}
                  business activities.
                </p>
              </div>

              <div className="business-profile">
                <img className="image-business" src={Images.busprofile} />
                <img className="mask-business" src={Images.mask} />
                <img className="graph-business" src={Images.graphBuss} />
              </div>
            </div>
          </div>
          <div className="project-profitability " data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1030"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
            <div className="inner-text">
              <div className="inner-text-container">
              <p><strong>Track Every Expense</strong> and Time Allocated to Your Projects</p>
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
              <p>
                Gain <span>real-time visibility</span> into all areas of your
                business.
              </p>
              <img className="graph-number" src={Images.graphAndNum} />
            </div>
            <div className="overcome-pro ">
              <div className="overcome-pro-content">
              <p>
                {" "}
                <span>Overcome scaling challenges </span> caused by manual
                processes 
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
