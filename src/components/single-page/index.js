import React, { useEffect, useState } from 'react';
import "./style.css";
import { Link, useParams } from 'react-router-dom';
import Images from "../../assests/blog-images";
import { blogSingle } from '../../api/blogAPI';
import SubscribeForm from './subscribe';
const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";



const Single = ({posts, postsSingle, postsLatest }) => {
  const { slug } = useParams(); 
  const [post, setPost] = useState(null);
  console.log('post: ', post);
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
        } catch (error) {
          console.error("Error fetching post:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPost();
  }, [slug, postsSingle, postsLatest]);

  if (loading) {
    return <div>Loading...</div>;
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

  console.log(' post.category?.id: ',  post.category?.id);
  return (
    <div>
      
      <div className="parent parentSingle">
      <div className="pageBreadcrumbs">
            <ul>
              <li>Home</li>/<li> <Link className="MainPageLink" to="/news"> Latest Articles</Link></li>/<li> <Link>{post.title}</Link></li>
            </ul>
            <Link to="/news" className="backButStories"><img src={arrowIconBack} alt="Arrow" /> Back</Link>
          </div>
       
        <div className="accounting-text-A categoryLinkTitle "><Link to={`/news/category/${post.category?.id}`}>{post.category?.title}</Link></div>
        <div className="heading-1-A">{post.title}</div>
        <div className="heading-date-A">{formatDateWithOrdinal(post.publish_date)} | {post.author}</div>
        <div className={`stickySocialWrap ${isScrolled ? 'scrolled' : ''} ${
        isNearBottom ? 'hide' : ''
      }`} >
  <div className="stickySocial">
    <p>Share</p>
    <ul>
      <li>
        <Link className="fb socialIcon" to="/" aria-label="Share on Facebook"><img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/facebook.svg' /></Link>
      </li>
      <li>
        <Link className="twitter socialIcon" to="/" aria-label="Share on Twitter"><img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/twitter.svg' /></Link>
      </li>
      <li>
        <Link className="linkedin socialIcon" to="/" aria-label="Share on LinkedIn"><img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/linkedin.svg' /></Link>
      </li>
      <li>
        <Link className="link socialIcon" to="/" aria-label="Share Link"><img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/link.svg' /></Link>
      </li>
    </ul>
  </div>
</div>

        <div className="img-1-container-A ">
          <img className="img-1" src={post.featured_img_url} alt={post.title}></img>
        </div>
        <div className="heading-2-A single-page-heading"></div>
        <div className="heading-2-text-A single-page-heading-text ">
          <div dangerouslySetInnerHTML={{ __html: post.description }} />
        </div>
        <div className="blogMetstags">
          <strong>Tags</strong>
      <div className='blogloopdata'>
      {post.meta_keyword.split(',').map((tag, index) => (
          <span key={index} className="tag">
            {tag.trim()}
          </span>
        ))}
      </div>
</div>
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
           {post.category.title}
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
