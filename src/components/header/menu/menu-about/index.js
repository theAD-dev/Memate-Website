import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
const MenuAbout = () => {
  const navigate = useNavigate();
  const handleContactNavigation = ()=>{
    navigate("/contact-us")
  }
  return (
    <div className="menu-new-wrapper">
      <div className="menu-news">
        <div className="first-about">
          <span>
          <p className="about-top-heading">About</p>
          <p className="about-sub-heading">Memate</p>
          </span>

                <button className="about-1-button">Read More</button>
        </div>
        <div className="second-about">
          <span>
          <p className="about-top-heading">Our</p>
          <p className="about-sub-heading">Careers</p>
          </span>

                <button className="about-1-button">Check Careers</button>
        </div>
        <div className="third-about">
          <span>
          <p className="about-top-heading-third">Contact</p>
          <p className="about-sub-heading-third">Our Team</p>
          </span>
          <div>
                <button className="about-1-button-third" onClick={()=>handleContactNavigation()}>Contact</button>
                </div>
        </div>
      </div>
    </div>
  );
};

export default MenuAbout;
