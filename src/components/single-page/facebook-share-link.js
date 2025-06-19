import React from 'react';

const FacebookShareLink = ({ firstname, message, url1, mainImage }) => {
  const siteUrl = process.env.REACT_APP_SITE_URL || ''; 

  // Construct the Facebook share URL
  const fbShareUrl = `http://www.facebook.com/sharer.php?s=100&p[title]=${encodeURIComponent(
    firstname 
  )}&p[summary]=${encodeURIComponent(message)}&p[url]=${encodeURIComponent(
    url1
  )}&p[images][0]=${encodeURIComponent(
    `${siteUrl}/wp-content/uploads/greek/${mainImage}`
  )}`;

  return (
    <li>
      <a target="_blank" rel="noopener noreferrer" href={fbShareUrl}>
        <img
          src={`https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/facebook.svg`}
          alt="Share on Facebook"
        />
      </a>
    </li>
  );
};

export default FacebookShareLink;
