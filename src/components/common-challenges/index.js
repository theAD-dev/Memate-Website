import Images from "../../assests/images";
import "./style.css";
import ScrollReveal from 'scrollreveal';
import  { useEffect } from "react";

const CommonChallenges = () => {
  useEffect(() => {
    const slideUpConfig = {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
    };
    ScrollReveal().reveal('.section1', { ...slideUpConfig, delay: 200 });
    ScrollReveal().reveal('.section2', { ...slideUpConfig, delay: 400 });
    ScrollReveal().reveal('.section3', { ...slideUpConfig, delay: 600 });
    ScrollReveal().reveal('.section4', { ...slideUpConfig, delay: 400 });
    ScrollReveal().reveal('.section5', { ...slideUpConfig, delay: 800 });
    ScrollReveal().reveal('.section6', { ...slideUpConfig, delay: 200 });
  }, []);





  return (
    <div className="common-box-wrapper">
      <div className="common-box">
        <div className="challenges-text">
          <h3>Streamline Your Business and Enjoy Full Control:</h3>
        </div>
        <div className="control-main-sec">
          <div className="me-meta-card">
            <div className="max-cont-width">
              <div className="met-points section1">
                <img className="main-bg-img" src={Images.cardBg} />
                <div className="me-meta-image">
                  <img src={Images.metalogo} />
                  <p className="card-text">
                    Establish comprehensive control within the company 24/7 from
                    any point in the world.
                  </p>
                </div>
              </div>
              <div className="internal-control section2">
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

            <div className="predict-side section3">
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
          <div className="project-profitability section4">
            <div className="inner-text">
              <div className="inner-text-container">
              <p><strong>Track Every Expense</strong> and Time Allocated to Your Projects</p>
              </div>
             
            </div>
          </div>

          <div className="real-time">
            <div className="gain-time section5">
              <p>
                Gain <span>real-time visibility</span> into all areas of your
                business.
              </p>
              <img className="graph-number" src={Images.graphAndNum} />
            </div>
            <div className="overcome-pro section6">
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
