import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';
const MenuNews = () => {
  return (
    <div className='menu-new-wrapper'>
      <div className='menu-news'>
                <div className='first-News'>
                  <span>
                  <span className='first-news-top-heading'>Our</span>
                       <div className="first-news-sub-heading">News</div> 
                       <p className='first-news-description'>Industry-related news to help you in business management.</p>
                    
                  </span>

                  <Link to="/blog"><button className='first-news-button'>Read more</button></Link>
                       
                </div>
                <div className='first-News'>
                  <span>
                  <span className='first-news-top-heading'>Customer</span>
                       <div className="first-news-sub-heading">Stories</div> 
                       <p className='first-news-description'>Read how other companies using memate</p>
                  </span>

                       <button className='first-news-button'>Check Stories</button>
                </div>
                <div className='first-News'>
                  <span>
                  <span className='first-news-top-heading'>Software</span>
                       <div className="first-news-sub-heading">Update</div> 
                       <p className='first-news-description'>Our Latest Software Updates, Releases, and Upcoming Development Features</p>
                  </span>

                  <Link to="/software-update"> <button className='first-news-button-3'>See Updates</button></Link>
                </div>
      </div>
    </div>
  )
}

export default MenuNews
