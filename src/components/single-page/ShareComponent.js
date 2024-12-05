import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

const ShareComponent = ({ url, title, image, description }) => {
  return (
    <div className="share-buttons">
      <ul>
        <li>
          <FacebookShareButton url={url} quote={title} image={image} hashtag={title} >
            <Link
              className="link socialIcon"
              aria-label="Share Link"
            >
              <img
                src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/facebook.svg"
                alt="facebook"
              />
            </Link>
          </FacebookShareButton>
        </li>
        <li>
          <TwitterShareButton url={url} title={title} image={image} hashtags={[title]}>
            <Link
              className="link socialIcon"
              aria-label="Share Link"
            >
              <img
                src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/twitter.svg"
                alt="twitter"
              />
            </Link>
          </TwitterShareButton>
        </li>
        <li>
          <LinkedinShareButton url={url} title={title} image={image} summary={description}>
            <Link
              className="link socialIcon"
              aria-label="Share Link"
            >
              <img
                src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/linkedin.svg"
                alt="linkedin"
              />
            </Link>
          </LinkedinShareButton>
        </li>
        <li>
          <Link
            className="link socialIcon"
            to={url} 
            aria-label="Share Link" 
          >
            <img
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/link.svg"
              alt="link"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ShareComponent;
