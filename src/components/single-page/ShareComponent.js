import React from "react";
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
          <FacebookShareButton url={url} quote={title} hashtag={title} >
            <a
              className="link socialIcon"
              href="javascript:void(0);"
              aria-label="Share Link"
            >
              <img
                src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/facebook.svg"
                alt="facebook"
              />
            </a>
          </FacebookShareButton>
        </li>
        <li>
          <TwitterShareButton url={url} title={title} hashtags={[title]}>
            <a
              className="link socialIcon"
              href="javascript:void(0);"
              aria-label="Share Link"
            >
              <img
                src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/twitter.svg"
                alt="twitter"
              />
            </a>
          </TwitterShareButton>
        </li>
        <li>
          <LinkedinShareButton url={url} title={title} summary={description}>
            <a
              className="link socialIcon"
              href="javascript:void(0);"
              aria-label="Share Link"
            >
              <img
                src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/linkedin.svg"
                alt="linkedin"
              />
            </a>
          </LinkedinShareButton>
        </li>
        <li>
          <a
            className="link socialIcon"
            href="javascript:void(0);"
            aria-label="Share Link"
          >
            <img
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/link.svg"
              alt="link"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ShareComponent;
