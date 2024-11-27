import React from "react";
import "./style.css";
import Images from "../../assests/blog-images";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';


function Blog({ posts, totalPosts, loading, postsLatest, handleNext }) {
  console.log('postsLatest: ', postsLatest);
  const formatDateWithOrdinal = (dateString) => {
    try {
      const date = new Date(dateString.replace(/(\d+)(st|nd|rd|th)/, '$1')); // Remove suffix for parsing
  
      // Get day, month, and year
      const day = date.getDate();
      const month = date.toLocaleString('en-US', { month: 'long' });
      const year = date.getFullYear();
  
      // Add ordinal suffix to the day
      const ordinalSuffix = (n) => {
        if (n > 3 && n < 21) return 'th'; // Handles 11th–13th
        switch (n % 10) {
          case 1: return 'st';
          case 2: return 'nd';
          case 3: return 'rd';
          default: return 'th';
        }
      };
  
      return `${day}${ordinalSuffix(day)} ${month}, ${year}`;
    } catch (error) {
      console.error("Error formatting date:", error);
      return dateString; // Return original string if conversion fails
    }
  };
  return (
    < div id="blogGrid">
      <Helmet>
        <title>MeMate News: Product Management Product Updates & Industry Trends</title>
        <meta property="og:title" content="MeMate News: Product Management Product Updates & Industry Trends" />
        <meta property="og:description" content="Stay updated with the latest MeMate news and industry insights. Discover product updates, company announcements, and expert advice for your business.
    " />
      </Helmet>
      <div className="parent-blog-page ">
        <div className="parent-blog">
          <div className="heading-container" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
            <h1 className="heading-blog">
              latest <br></br>articles
            </h1>
            <div className="heading-blog-description">
              <span className="heading-text-blog">Crafted by Our Team</span>
            </div>
            <div className="dog-img-container1 dog-img-container">
              <img className="dog-img" src={Images.blogImgDog}></img>
            </div>
          </div>
          
          <Link to={`/news/${postsLatest[0]?.slug}`}>
          <div
            className="blog-image-container-1 parent-blog-pageWrap "
            style={{
              backgroundImage: `url(${postsLatest[0]?.featured_img_url || Images.blogImgempty})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              padding: '20px',
              minWidth: '1063px',
              height: '625px',
              marginTop: '-329px',
              borderRadius: '30px',
              marginBottom: '29px',

            }}
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="50"
            data-aos-duration="600"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom">
            <div className="img-container-1-div " data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
              <div>
                <div className="blog-image-container-div">
                  {/* <img src={blogs[0].featured_img_url} /> */}
                  <div className="img-container-1-div-text-1">
                  {formatDateWithOrdinal(postsLatest[0]?.publish_date)} | {postsLatest[0]?.author}
                     </div>
                </div>
                <div className="img-container-1-div-text-2">
                  <Link to={`/news/${postsLatest[0]?.slug}`}>{postsLatest[0]?.title}</Link>
                </div>
                <div className='postCategory'>
                {postsLatest[0]?.category.title}
              </div>
              </div>
            </div>
            </div>
            </Link>
         
          <div className="blog-img-container-2 parent-blog-pageWrap parent-blog-pageWrap1" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
            <div className="blog-img-container-2-img1-div ">
              {postsLatest.length > 2 && (
                <Link to={`/news/${postsLatest[1].slug}`}><img
                  className="img-container-2-img-1"
                  src={postsLatest[1]?.featured_img_url || Images.blogImgempty}
                  alt="Blog featured image"
                /></Link>
              )}

              <div className="img-heading-container ">
                <div className="date-A"> 
                {formatDateWithOrdinal(postsLatest[1]?.publish_date)} | {postsLatest[1]?.author}
                </div>
                <div className="date-heading-A"><Link to={`/news/${postsLatest[1]?.slug}`}>{postsLatest[1]?.title}</Link></div>
                <div className='postCategory'>
                {postsLatest[1]?.category.title}
              </div>
              </div>
            </div>
            <div className="blog-img-container-2-img2-div ">
              {postsLatest.length > 2 && (
                <Link to={`/news/${postsLatest[2]?.slug}`}><img
                  className="img-container-2-img-2"
                  src={postsLatest[2]?.featured_img_url || Images.blogImgempty}
                  alt="Blog featured image"
                /></Link>
              )}

              <div className="img-heading-container">
                <div className="date-A"> 

                {formatDateWithOrdinal(postsLatest[2]?.publish_date)} | {postsLatest[2]?.author}
                </div>
                <div className="date-heading-A"><Link to={`/news/${postsLatest[2]?.slug}`}>{postsLatest[2]?.title}</Link></div>
                <div className='postCategory'>
                {postsLatest[2]?.category.title}
              </div>
              </div>
            </div>
            <div className="latest-article-parent"></div>
          </div>
          <span className="latest-article-heading" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">Latest Articles</span>
          <div className="img-container-3 parent-blog-pageWrap " data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
            {posts?.map((post) => (
              <div key={post.id} className="img-container-3-div">
                <div className="img-container-3-img1-div">
                  <Link to={`/news/${post.slug}`}>
                    <img
                      className="img-container-3-img-1"
                      src={post.featured_img_url || Images.blogImgempty} // Use demo image if featured_img_url is null
                      alt={post.title}
                    />
                  </Link>
                  <div className="img-heading-container">
                    <div className="date-A">{formatDateWithOrdinal(post.publish_date)} | {post.author}</div>
                    <div className="date-heading-A"><Link to={`/news/${post.slug}`}>{post.title}</Link></div>
                  </div>
                  <div className='postCategory'>
                {post.category.title}
              </div>
                </div>
              </div>
            ))}
          </div>
          <div className="nextbtn-container-A">
            {totalPosts > posts?.length && <button onClick={handleNext} className="next-page-btn-A">{ loading ? "Loading..." : "Next page" }</button>}
          </div>
        </div>
      
      </div>
    </div>

  );
}
export default Blog;
