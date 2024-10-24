import React from "react";
import "./style.css";
import Images from "../../assests/blog-images";
import NextStep from "../next-step";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';



function Blog({ posts, totalPosts, loading, postsLatest, handleNext }) {
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
          <div className="heading-container">
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

          <div
            className="blog-image-container-1 parent-blog-pageWrap"
            style={{
              backgroundImage: `url(${postsLatest[0]?.featured_img_url || Images.blogImgempty})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              padding: '20px',
              width: '100%',
              height: '625px',
              marginTop: '-329px',
              borderRadius: '30px',
              marginBottom: '29px',

            }}
          >


            <div className="img-container-1-div ">
              <div>
                <div className="blog-image-container-div">
                  {/* <img src={blogs[0].featured_img_url} /> */}
                  <div className="img-container-1-div-text-1"> {new Date(postsLatest[0]?.publish_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                </div>
                <div className="img-container-1-div-text-2">
                  <Link to={`/news/${postsLatest[0]?.slug}`}>{postsLatest[0]?.title}</Link>
                </div>
              </div>


            </div>
          </div>
          <div className="blog-img-container-2 parent-blog-pageWrap">
            <div className="blog-img-container-2-img1-div">
              {postsLatest.length > 2 && (
                <Link to={`/news/${postsLatest[1].slug}`}><img
                  className="img-container-2-img-1"
                  src={postsLatest[1]?.featured_img_url || Images.blogImgempty}
                  alt="Blog featured image"
                /></Link>
              )}

              <div className="img-heading-container">
                <div className="date-A"> {new Date(postsLatest[1]?.publish_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} </div>
                <div className="date-heading-A"><Link to={`/news/${postsLatest[1]?.slug}`}>{postsLatest[1]?.title}</Link></div>
              </div>
            </div>
            <div className="blog-img-container-2-img2-div">
              {postsLatest.length > 2 && (
                <Link to={`/news/${postsLatest[2]?.slug}`}><img
                  className="img-container-2-img-2"
                  src={postsLatest[2]?.featured_img_url || Images.blogImgempty}
                  alt="Blog featured image"
                /></Link>
              )}

              <div className="img-heading-container">
                <div className="date-A"> {new Date(postsLatest[2]?.publish_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                <div className="date-heading-A"><Link to={`/news/${postsLatest[2]?.slug}`}>{postsLatest[2]?.title}</Link></div>
              </div>
            </div>
            <div className="latest-article-parent"></div>
          </div>

          <span className="latest-article-heading">Latest Articles</span>
          <div className="img-container-3 parent-blog-pageWrap">
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
                    <div className="date-A"> {new Date(post?.publish_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                    <div className="date-heading-A"><Link to={`/news/${post.slug}`}>{post.title}</Link></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="nextbtn-container-A">
            {totalPosts > posts?.length && <button onClick={handleNext} className="next-page-btn-A">{ loading ? "Loading..." : "Next page" }</button>}
          </div>
        </div>
        <NextStep text="Request a Demo" />
      </div>
    </div>

  );
}
export default Blog;
