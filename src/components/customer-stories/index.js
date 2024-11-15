import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const CustomerStoriesImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/customersoriesCamera.png";
const customersoriesProImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/customersoriesPro.png";
const customersoriesEliteImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/customersoriesElite.png";
const customersoriesBoatImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/customersoriesBoat.png";
const customersoriesSortedImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/customersoriesSorted.jpg";

function CustomerStories() {
  return (
<>
<Helmet>
    <title>Success Stories: How MeMate Helps Our Customers</title>
    <meta property="og:title" content="Success Stories: How MeMate Helps Our Customers" />
      <meta property="og:description" content="Explore inspiring customer stories showcasing the impact of MeMate. See how our platform has enhanced productivity and project management.
    " />
</Helmet>
<div className="parent-blog-page customerstoriespage">
      <div className="parent-blog">
        <div className="heading-container">
          <h1 className="heading-blog">
          customer  <br></br>stories
          </h1>
          <div className="heading-blog-description">
            <span className="heading-text-blog">Power of meMate Put to Work</span>
            
          </div>
          <div class="small-heading"> <p>How Small Businesses Use meMate in Their Everyday Activities to Increase Profitability</p></div>
       
        </div>
<div className="customerstoriesGrid">
<div className="innerGrid">
 <Link to='/camera-fix'><img
    className="img-container-stories"
    src={CustomerStoriesImage}
    alt="Blog featured image"
  /></Link> 
            <div className="customerstoriesDetails">
              <div className="category">Camera Fix</div>
              <div className="date-heading-title"><Link to='/camera-fix'>Empowering a Boutique Camera Repair Shop to Manage Business and Serve Over 100 Clients Monthly</Link></div>
             <Link to='/camera-fix' className="readMoreBut">Read More</Link>
            </div>
          </div>
<div className="innerGrid">
 <Link to="/pro-vinyl"><img
    className="img-container-stories"
    src={customersoriesProImage}
    alt="Blog featured image"
  /></Link> 
            <div className="customerstoriesDetails">
              <div className="category">PROvinyl</div>
              <div className="date-heading-title"><Link to="/pro-vinyl">Running a Car Wrapping Company on meMate</Link></div>
             <Link to="/pro-vinyl" className="readMoreBut">Read More</Link>
            </div>
          </div>
<div className="innerGrid">
 <Link to="/elite-life"><img
    className="img-container-stories"
    src={customersoriesEliteImage}
    alt="Blog featured image"
  /></Link> 
            <div className="customerstoriesDetails">  
              <div className="category">Elite Life</div>
              <div className="date-heading-title"><Link to="/elite-life">Using meMate to Run a Private Membership Club</Link></div>
             <Link to="/elite-life" className="readMoreBut">Read More</Link>
            </div>
          </div>
<div className="innerGrid">
 <Link to="/boat-wizard" ><img
    className="img-container-stories"
    src={customersoriesBoatImage}
    alt="Blog featured image"
  /></Link> 
            <div className="customerstoriesDetails">  
              <div className="category">Boat Wizard</div>
              <div className="date-heading-title"><Link to="/boat-wizard">We quote and invoice all our marine engineering services.</Link></div>
             <Link to="/boat-wizard" className="readMoreBut">Read More</Link>
            </div>
          </div>
<div className="innerGrid">
 <Link to="/sorted-media" ><img
    className="img-container-stories"
    src={customersoriesSortedImage}
    alt="Blog featured image"
  /></Link> 
            <div className="customerstoriesDetails">  
              <div className="category">Sorted Media</div>
              <div className="date-heading-title"><Link to="/sorted-media">Photography and Videography on Demand</Link></div>
             <Link to="/sorted-media" className="readMoreBut">Read More</Link>
            </div>
          </div>


       </div>
      </div>
    </div>
    </>

  );
}
export default CustomerStories;
