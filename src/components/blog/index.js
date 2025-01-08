import React from "react";
import "./style.css";
import Images from "../../assests/blog-images";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';



function Blog({ PostsCategories, activeCategory, handleTabClick, posts, totalPosts, loading, postsLatest, handleNext }) {
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
    <title>meMate News | Latest Business Technology News, Software and Regulation updates</title>
    <meta name="description" content="Discover the latest news on small business technology and software updates. Stay informed about trends in CRM, ERP, and project management for Australian businesses." />
    <meta property="og:title" content="meMate News | Latest Business Technology News, Software and Regulation updates" />
    <meta property="og:description" content="Discover the latest news on small business technology and software updates. Stay informed about trends in CRM, ERP, and project management for Australian businesses." />
    <meta property="og:image" content={postsLatest[0]?.featured_img_url || 'default-image-url'} />
    <meta property="og:url" content={`https://yourdomain.com/news/${postsLatest[0]?.slug || ''}`} />

    <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": postsLatest[0]?.title || "Title of a News Article",
      "image": postsLatest[0]?.images || [
        "https://example.com/photos/1x1/photo.jpg",
        "https://example.com/photos/4x3/photo.jpg",
        "https://example.com/photos/16x9/photo.jpg"
      ],
      "datePublished": postsLatest[0]?.publish_date || "2024-01-05T08:00:00+08:00",
      "dateModified": postsLatest[0]?.last_modified || "2024-02-05T09:20:00+08:00",
      "author": [
        {
          "@type": "Person",
          "name": postsLatest[0]?.author || "Jane Doe",
          "url": postsLatest[0]?.author_url || "https://example.com/profile/janedoe123"
        }
      ],
      "publisher": {
        "@type": "Organization",
        "name": "MeMate",
        "logo": {
          "@type": "ImageObject",
          "url": "https://yourdomain.com/logo.png"
        }
      }
    })}
    </script>
</Helmet>

      <div className="parent-blog-page ">
        <div className="parent-blog">
          <div className="heading-container heading-container-categories" >
            <h1 className="heading-blog">
              latest <br></br>articles
            </h1>
            <div className="heading-blog-description">
              <h1 className="heading-text-blog">Latest Small Business <br />Technology News and Software Updates</h1>
            </div>
            <div className="dog-img-container1 dog-img-container">
              <img className="dog-img" src={Images.blogImgDog}></img>
            </div>
          </div>

          
          <div className="categoriesMainWrap">
            <div className="listTabs">
              {PostsCategories?.map((postCat) => (
                <button
                  key={postCat.id}
                  className={`filterBlogTabBtn ${activeCategory === postCat.id ? "active" : ""
                    }`}
                  onClick={() => handleTabClick(postCat.id)}
                >
                  {postCat.title}
                </button>
              ))}
            </div>

            {/* Posts under Active Category */}
            <div className="categories">
              {PostsCategories?.map((postCat) => (
                <div key={postCat.id}>
                  {activeCategory === postCat.id &&
                    postCat.posts?.map((post) => (
                      <div key={post.id} style={{ marginBottom: "0.5rem" }}>
                        {post.title}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {
            activeCategory === 0 && <>
              <div className="cateLatesWrap">
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
                          <Link to={`/news/category/${postsLatest[0]?.category.id}`}>{postsLatest[0]?.category.title}</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

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
                    <Link to={`/news/category/${postsLatest[1]?.category.id}`}>{postsLatest[1]?.category.title}</Link>
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
                    <Link to={`/news/category/${postsLatest[2]?.category.id}`}>{postsLatest[2]?.category.title}</Link>
                    </div>
                  </div>
                </div>
                <div className="latest-article-parent"></div>
              </div>
            </>
          }

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
           {posts?.slice(3).map((post) => (
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
                   <Link to={`/news/category/${post.category.id}`}>{post.category.title}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="nextbtn-container-A">
            {totalPosts > posts?.length && <button onClick={handleNext} className="next-page-btn-A">{loading ? "Loading..." : "Next page"}</button>}
          </div>
        </div>

      </div>
    </div>

  );
}
export default Blog;
