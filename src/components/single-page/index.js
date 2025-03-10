import React, { useEffect, useState } from 'react';
import "./style.css";
import { Link, useParams, useNavigate, Navigate } from 'react-router-dom';
import Images from "../../assests/blog-images";
import { blogSingle } from '../../api/blogAPI';
import SubscribeForm from './subscribe';
import ShareComponent from './ShareComponent';
import { Helmet } from 'react-helmet';
const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";


const Single = ({postsSingle, postsLatest }) => {
  const { slug } = useParams(); 
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      setIsScrolled(scrollTop > 100); 

      const nearBottomThreshold = 2800;
      const isNearBottom =
        scrollTop + clientHeight >= scrollHeight - nearBottomThreshold;
      setIsNearBottom(isNearBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const findPost = () => {

      let foundPost = postsSingle?.find(post => post.slug === slug);

      if (!foundPost) {
        foundPost = postsLatest?.find(post => post.slug === slug);
      }

      return foundPost;
    };


    const fetchPost = async () => {
      const postFromArrays = findPost();
      
      if (postFromArrays) {
        setPost(postFromArrays); 
        setLoading(false);
      } else {
        try {
          const data = await blogSingle(slug); 
          setPost(data);
          if (data.error === 'News article not found') {
            navigate('/404'); 
          }
        } catch (error) {
          console.error("Error fetching post:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPost();
  },[slug, postsSingle, postsLatest, navigate]);

  if (loading) {
    return <div></div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

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

  return (
    <div>
       <Helmet>
        <title>{post.seo_title}</title>
        <meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Everything You Need to Know About The Impact of Management Software on Small Businesses" />
<meta name="twitter:description" content="Discover how management software can transform small businesses, enhancing productivity and operational efficiency." />
<meta name="twitter:image" content="https://memate.au/path-to-your-image.jpg" />
<meta name="twitter:image:alt" content="Impact of Management Software on Small Businesses" />

<meta property="og:title" content="Everything You Need to Know About The Impact of Management Software on Small Businesses" />
<meta property="og:description" content="Discover how management software can transform small businesses, enhancing productivity and operational efficiency." />
<meta property="og:image" content="https://memate.au/path-to-your-image.jpg" />
<meta property="og:url" content="https://memate.au/news/everything-you-need-to-know-about-the-impact-of-management-software-on-small-businesses" />

      </Helmet>
      <div className="parent parentSingle">
      <div className="pageBreadcrumbs">
            <ul>
              <li>Home</li><li>/</li><li><Link className="MainPageLink" to="/news">Latest Articles</Link></li><li>/</li><li><Link>{post.title}</Link></li>
            </ul>
            <Link to="/news" className="backButStories"><img src={arrowIconBack} alt="Arrow" /> Back</Link>
          </div>
       
        <div className="accounting-text-A categoryLinkTitle "><Link to={`/news/category/${post.category?.id}`}>{post.category?.title}</Link></div>
        <h1 className="heading-1-A">{post.title}</h1>
        <div className="heading-date-A">{formatDateWithOrdinal(post.publish_date)} | {post.author}</div>
        <div className={`stickySocialWrap ${isScrolled ? 'scrolled' : ''} ${
        isNearBottom ? 'hide' : ''
      }`} >

        <div className="stickySocial">
          <p>Share</p>
          <ShareComponent
            url={`https://memate.au/news/${post.slug}`}
            title={post.title}
            image={post.featured_img_url}
            description={post.description}
          />
        </div>
      </div>

        <div className="img-1-container-A ">
          <img className="img-1" src={post.featured_img_url} alt={post.title}></img>
        </div>
        <div className="heading-2-A single-page-heading"></div>
        <div className="heading-2-text-A single-page-heading-text ">
          <div dangerouslySetInnerHTML={{ __html: post.description }} />
        </div>
        {/* Tags */}
        <div className="blogMetstags">
  <strong>Tags</strong>
  <div className="blogloopdata">
    {(post.meta_keyword || '').split(',').map((tag, index) => {
      const slug = (post.meta_keyword_slug || '').split(',')[index]?.trim();
      return (
        <span key={index} className="tag">
          <Link to={`/news/tags/${slug || tag.trim().toLowerCase().replace(/\s+/g, '-')}`}>
            {tag.trim()}
          </Link>
        </span>
      );
    })}
  </div>
</div>

{/* Tags */}
    <div className='blogSinglePageMightLike parent-blog-page'>
      <h2>You Also Might Like</h2>
      <div className="img-container-3 parent-blog-pageWrap " data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
           {postsSingle?.slice(0, 3).map((post) => (
  <div key={post.id} className="img-container-3-div">
    <div className="img-container-3-img1-div">
      <Link to={`/news/${post.slug}`}>
        <img
          className="img-container-3-img-1"
          src={post.featured_img_url || Images.blogImgempty} 
          alt={post.title}
        />
      </Link>
      <div className="img-heading-container">
        <div className="date-A">
        {formatDateWithOrdinal(post.publish_date)} | {post.author}
        </div>
        <div className="date-heading-A">
          <Link to={`/news/${post.slug}`}>{post.title}</Link>
        </div>
        <div className='postCategory'>
           <Link to={`/news/category/${post?.category_id}`}>{post.category.title}</Link>
        </div>
      </div>
    </div>
  </div>
))}
 </div>
    </div>
    <div className='blogSubscribeWrap'>
     <SubscribeForm />
    </div>
      </div>
    </div>
  );
};

export default Single;
