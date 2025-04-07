import React from "react";
import "./style.css";
import Images from "../../assests/blog-images";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

function Blog({ PostsCategories, activeCategory, handleTabClick, posts, totalPosts, loading, postsLatest, handleNext }) {

  const formatDateWithOrdinal = (dateString) => {
    try {
      const date = new Date(dateString.replace(/(\d+)(st|nd|rd|th)/, '$1'));
      const day = date.getDate();
      const month = date.toLocaleString('en-US', { month: 'long' });
      const year = date.getFullYear();

      const ordinalSuffix = (n) => {
        if (n > 3 && n < 21) return 'th'; 
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
      return dateString;
    }
  };
  const filteredPosts = activeCategory === 0
    ? []
    : posts.filter(post => post.category.id === activeCategory);

    console.log("FILTERED -- ", filteredPosts);
    return (
    < div id="blogGrid">
      <Helmet>
        <title>meMate News | Latest Business Technology News, Software and Regulation updates</title>
        <meta name="description" content="Discover the latest news on small business technology and software updates. Stay informed about trends in CRM, ERP, and project management for Australian businesses." />
        <meta property="og:title" content="meMate News | Latest Business Technology News, Software and Regulation updates" />
        <meta property="og:description" content="Discover the latest news on small business technology and software updates. Stay informed about trends in CRM, ERP, and project management for Australian businesses." />
      </Helmet>

      <div className="parent-blog-page ">
        <div className="parent-blog">
          <div className="heading-container heading-container-categories" >
            <h1 className="heading-blog">
             Articles
            </h1>
            <div className="heading-blog-description">
              <h1 className="heading-text-blog">Latest Small Business <br />Technology News and Software Updates</h1>
            </div>
            <div className="dog-img-container1 dog-img-container">
              {/* <img className="dog-img" src={Images.blogImgDog} alt="unrendered" /> */}
              <img
              className="dog-img"
            srcSet={`${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/DogImage3x.png'} 600w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/DogImage2x.png'} 1200w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/DogImage1x.png'} 1800w`}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/DogImage3x.png'}
            // alt="Pricing main image"
          />
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

            {/* Updated Posts under Active Category %blame @ramansaini14 for changes 
            // status: committed on vps tunnel and changes staged automatically */}
            {filteredPosts.length !== 0 ?
            <>
                    {filteredPosts.length > 5 ? 
                    <>
                    <div className="categories">
                      {filteredPosts?.map((post) => (
                        <div key={post.id} className="img-container-3-div "  data-aos="fade-up"
                        data-aos-offset="50"
                        data-aos-delay="50"
                        data-aos-duration="2500"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-bottom">
                          <div className="img-container-3-img1-div" style={{ marginBottom: "0.5rem" }}>
                            <Link to={`/news/${post.slug}`}>
                              <img
                                className="img-container-3-img-1"
                                src={post.featured_img_url || Images.blogImgempty}
                                alt={post.title}
                              />
                            </Link>
                            <div className="img-heading-container">
                              <div className="date-A">{formatDateWithOrdinal(post.publish_date)} | {post.author}</div>
                              <div className="date-heading-main"><Link to={`/news/${post.slug}`}>{post.title}</Link></div>
                            </div>
                            <div className='postCategory'>
                              <Link to={`/news/category/${post.category.id}`}>{post.category.title}</Link>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="nextbtn-container-A">
                          {totalPosts > posts?.length && <button onClick={handleNext} className="next-page-btn-A">{loading ? "Loading..." : "Next page"}</button>}
                      </div>
                    </div>
                    </> :
                      <>
                      <div className="categories">
                        {filteredPosts?.map((post) => (
                          <div key={post.id} className="img-container-3-div"  data-aos="fade-up"
                          data-aos-offset="50"
                          data-aos-delay="50"
                          data-aos-duration="2500"
                          data-aos-mirror="true"
                          data-aos-once="false"
                          data-aos-anchor-placement="top-bottom">
                            <div className="img-container-3-img1-div" style={{ marginBottom: "0.5rem" }}>
                              <Link to={`/news/${post.slug}`}>
                                <img
                                  className="img-container-3-img-1"
                                  src={post.featured_img_url || Images.blogImgempty}
                                  alt={post.title}
                                />
                              </Link>
                              <div className="img-heading-container">
                                <div className="date-A">{formatDateWithOrdinal(post.publish_date)} | {post.author}</div>
                                <div className="date-heading-main"><Link to={`/news/${post.slug}`}>{post.title}</Link></div>
                              </div>
                              <div className='postCategory'>
                                <Link to={`/news/category/${post.category.id}`}>{post.category.title}</Link>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      </>
                      }
                      </>
                      : (activeCategory !==0) ? ((loading)? <div style={{display: "flex", justifyContent: 'center',  height: "300px", alignItems: 'center'}}><p>Loading...</p></div> : <div style={{ display: 'flex', justifyContent: 'center',  height: "300px", alignItems: 'center'}}><p>No Posts</p></div> ) : ""
                       }
              
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
                      marginBottom: '20px',

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
                        <div className="img-container-1-div-text-2 ">
                          <Link className="fontfamilyChanger" id='fontfamilyChanger' to={`/news/${postsLatest[0]?.slug}`}>{postsLatest[0]?.title}</Link>
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
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
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
                    <div className="date-heading-main"><Link to={`/news/${postsLatest[1]?.slug}`}>{postsLatest[1]?.title}</Link></div>
                    <div className='postCategory'>
                      <Link to={`/news/category/${postsLatest[1]?.category.id}`}>{postsLatest[1]?.category.title}</Link>
                    </div>
                  </div>
                </div>
                <div className="blog-img-container-2-img2-div ">
                  {postsLatest.length > 2 && (
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
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
                    <div className="date-heading-main"><Link to={`/news/${postsLatest[2]?.slug}`}>{postsLatest[2]?.title}</Link></div>
                    <div className='postCategory'>
                      <Link to={`/news/category/${postsLatest[2]?.category.id}`}>{postsLatest[2]?.category.title}</Link>
                    </div>
                  </div>
                </div>
                <div className="latest-article-parent"></div>
              </div>
            </>
          }

          {/* {hide this and do not load data when other tabs gets hits} */}
          {activeCategory === 0 ? 
          <>
            <span className="articlesHeading" data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom">Articles</span>
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
                      src={post.featured_img_url || Images.blogImgempty} // Used demo image if featured_img_url is null
                      alt={post.title}
                    />
                  </Link>
                  <div className="img-heading-container">
                    <div className="date-A">{formatDateWithOrdinal(post.publish_date)} | {post.author}</div>
                    <div className="date-heading-main"><Link to={`/news/${post.slug}`}>{post.title}</Link></div>
                  </div>
                  <div className='postCategory'>
                    <Link to={`/news/category/${post.category.id}`}>{post.category.title}</Link>
                  </div>
                </div>
              </div>
            ))}
                <div className="nextbtn-container-A">
                  {totalPosts > posts?.length && <button onClick={handleNext} className="next-page-btn-A">{loading ? "Loading..." : "Load More"}</button>}
                </div>
          </div> 
          </>: <div></div>
          }
          
          {/* =============end  */}
        </div>

      </div>
    </div>

  );
}
export default Blog;
