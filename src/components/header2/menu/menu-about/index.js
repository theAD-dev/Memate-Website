import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

const MenuAbout = () => {
  return (
    <div className='menu-new-wrapper'>
      <div className='menu-news'>
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            (isActive ? "menuActive" : "link") + " news first-News" 
          }
        >
          <span>
            <span className='first-news-top-heading'>About</span>
            <div className="first-news-sub-heading">Memate</div> 
            
          </span>
          <button className='first-news-button'>Read more</button>
        </NavLink>

        <NavLink 
          to="/our-careers" 
          className={({ isActive }) => 
            (isActive ? "menuActive" : "link") + " news first-News"
          }
        >
          <span>
            <span className='first-news-top-heading'>Our</span>
            <div className="first-news-sub-heading">Careers</div> 
          
          </span>
          <button className='first-news-button'>Check Careers</button>
        </NavLink>

        <NavLink 
          to="/contact-us" 
          className={({ isActive }) => 
            (isActive ? "menuActive" : "link") + " news first-News"
          }
        >
          <span>
            <span className='first-news-top-heading'>Contact</span>
            <div className="first-news-sub-heading">Our Team</div> 
          
          </span>
          <button className='first-news-button-3'>Contact</button>
        </NavLink>
      </div>
    </div>
  );
}

export default MenuAbout;
