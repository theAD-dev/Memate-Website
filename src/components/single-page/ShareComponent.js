import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  LinkShareButton,
} from "react-share";


const ShareComponent = ({ url, title, image, description }) => {
  return (
    <div className="share-buttons">
        <ul>
            <li>
            <FacebookShareButton url={url} quote={title} hashtag="#YourWebsite">
            <Link className="link socialIcon" to="/" aria-label="Share Link"> <img
          src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/facebook.svg"
          alt="facebook"
         
        /></Link>
      </FacebookShareButton>
            </li>
            <li>
            <TwitterShareButton url={url} quote={title} hashtag="#YourWebsite">
            <Link className="link socialIcon" to="/" aria-label="Share Link"> <img
          src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/twitter.svg"
          alt="twitter"
       
        /></Link>
      </TwitterShareButton>
            </li>
            <li>
            <LinkedinShareButton url={url} quote={title} hashtag="#YourWebsite">
            <Link className="link socialIcon" to="/" aria-label="Share Link"> <img
          src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/linkedin.svg"
          alt="linkedin"
         
        /></Link>
      </LinkedinShareButton>
            </li>
            <li>
            <Link className="link socialIcon" to="/" aria-label="Share Link"><img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/link.svg' /></Link>
            </li>
        </ul>
        
      

     
    </div>
  );
};

export default ShareComponent;
