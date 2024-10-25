
import Images from "../../assests/images";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import "./style.css";
import { Link } from "react-router-dom";
import CustomerStoriesImage from "../../assests/blog-images/customersoriesCamera.png";
import customersoriesProImage from "../../assests/blog-images/customersoriesPro.png";
import customersoriesEliteImage from "../../assests/blog-images/customersoriesElite.png";
import customersoriesBoatImage from "../../assests/blog-images/customersoriesBoat.png";
import customersoriesSortedImage from "../../assests/blog-images/customersoriesSorted.jpg";


import React from "react";
import Slider from "react-slick";

const SliderStories = () => {
    const settings = {
        className: "center",
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        centerPadding: "60px",
        dots: false,
        autoplay: false,
        slidesToScroll: 1,
        slidesToShow: 3,
        speed: 500,
      
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 1024, 
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 768, 
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 480, 
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };
      

  return (
    <div className="slider-container" id="slider-container">
      <Slider {...settings}>
        <div className="slider-item">
          <Link to='/camera-fix'><img src={CustomerStoriesImage} alt="Blog featured image"/></Link> 
          <div className="customerstoriesitem">
              <div className="category">Camera Fix</div>
              <div className="date-heading-title"><Link to='/camera-fix'>Empowering Camera Repair Shop to Manage Business and Serve Over 100 Clients Monthly</Link></div>
            
            </div>
        </div>
        <div className="slider-item">
        <Link to='/pro-vinyl'><img src={customersoriesProImage} alt="Blog featured image"/></Link> 
        <div className="customerstoriesitem">
              <div className="category">PROvinyl</div>
              <div className="date-heading-title"><Link to='/pro-vinyl'>Running a Car Wrapping Company on meMate</Link></div>
            
            </div>
        </div>
        <div className="slider-item">
        <Link to='/elite-life'><img src={customersoriesEliteImage} alt="Blog featured image"/></Link> 
        <div className="customerstoriesitem">
              <div className="category">Elite Life</div>
              <div className="date-heading-title"><Link to='/elite-life'>Using meMate to Run a Private Membership Club</Link></div>
         
            </div>
        </div>
        <div className="slider-item">
        <Link to='/boat-wizard'><img src={customersoriesBoatImage} alt="Blog featured image"/></Link> 
        <div className="customerstoriesitem">
              <div className="category">Boat Wizard</div>
              <div className="date-heading-title"><Link to='/boat-wizard'>We quote and invoice all our marine engineering services.</Link></div>
           
            </div>
        </div>
        <div className="slider-item">
        <Link to='/sorted-media'><img src={customersoriesSortedImage} alt="Blog featured image"/></Link> 
        <div className="customerstoriesitem">
              <div className="category">Sorted Media</div>
              <div className="date-heading-title"><Link to='/sorted-media'>Photography and Videography on Demand</Link></div>
            </div>
        </div>
     
      </Slider>
    </div>
  );
};

export default SliderStories;
