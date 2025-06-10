import { Link } from "react-router-dom";
import "./style.css";
import TronButton from "../../../layout/hover-button/tourn-but";
const SalesComponent = () => {
  return (
  <>
    <div className="sales-component-wrapper" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
       <h1 className="h1tagsseo">Compare the solutions</h1>
       <div className="sales-heading client-heading client-heading-ServiceM8">MeMate vs ServiceM8 </div>
      <div className="sales-componet-content-wrapper client-component-para">
     
        <div className="compaire-service01">
        <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/Mockup.png" width="100%" alt="Mockup" />
        </div>

        <div className="compaireHeadPara">
          <h2>Work smarter with the #1 Service M8 alternative.</h2>
          <p>Despite the similarities in name and target audience, these two software solutions are quite different. ServiceM8 is focused more on “on-the-go” tradespeople, while meMate caters to more established businesses with a more robust workflow.</p>
        <div className="request-btn request-btn-center" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <Link to='/' target="_blank" className="nav-btn--get-started navbar-link"><TronButton text="Get started" /></Link>
      </div>

        </div>
      </div>
    </div>
  </>
  );
};

export default SalesComponent;
