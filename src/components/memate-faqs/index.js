import { Link } from "react-router-dom";
import style from "./mematefaqs.module.scss";
import "./style.css";
import { Helmet } from "react-helmet";
import QuestionAnswer from "./ans-questions";
const arrowIconBack =
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";

const MemateFaqsComponent = () => {
  return (
    <>
      <Helmet>
        <title>MeMate FAQs | Business Management Software Questions</title>
        <meta
          name="description"
          content="Everything you want to know about MeMate — from features to onboarding. Quick answers for Aussie businesses making the switch."
        />
        <meta
          property="og:title"
          content="MeMate FAQs | Business Management Software Questions"
        />
        <meta
          property="og:description"
          content="Everything you want to know about MeMate — from features to onboarding. Quick answers for Aussie businesses making the switch.
    "
        />
      </Helmet>
      <div className="parent-blog">
        <div className="pageBreadcrumbsF">
          <ul className={style.linkstyleDisable}>
            <li>
              <a href="/" className={style.linkstyleDisable}>
                Home
              </a>
            </li>
            /
            <li>
              <a href="/" >
                meMate FAQs
              </a>
            </li>
          </ul>
          <a href="/" className="backButStories">
            <img src={arrowIconBack} alt="Arrow" /> Back
          </a>
        </div>
        <div className={`${style.mainMenuPagesF}`}>
          <div className={`titleHead ${style.mainHeadTitleF}`}>
            <h2>FAQs</h2>
            <div className={style.faqman}>
                 <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1748587435/faq-man_zfwpjv.png" alt="FAQ" />
            </div>

          </div>
          <QuestionAnswer />
        </div>
      </div>
    </>
  );
};

export default MemateFaqsComponent;
