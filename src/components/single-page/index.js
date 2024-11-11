import React, { useEffect, useState } from 'react';
import "./style.css";
import { Link, useParams } from 'react-router-dom';
import { blogSingle } from '../../api/blogAPI';
const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";



const Single = ({ postsSingle, postsLatest }) => {
  const { slug } = useParams(); 
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Function to search for post in both arrays by slug
    const findPost = () => {
      // Check in postsSingle first
      let foundPost = postsSingle?.find(post => post.slug === slug);
      
      // If not found, check in postsLatest
      if (!foundPost) {
        foundPost = postsLatest?.find(post => post.slug === slug);
      }

      return foundPost;
    };

    const fetchPost = async () => {
      const postFromArrays = findPost();
      
      if (postFromArrays) {
        setPost(postFromArrays); // Set post if found in postsSingle or postsLatest
        setLoading(false);
      } else {
        try {
          const data = await blogSingle(slug); // Fetch post if not found in arrays
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

  return (
    <div>
      
      <div className="parent parentSingle">
      <div className="pageBreadcrumbs">
            <ul>
              <li>Home</li>/<li> <Link className="MainPageLink" to="/news"> Latest Articles</Link></li>/<li> <Link>{post.title}</Link></li>
            </ul>
            <Link to="/news" className="backButStories"><img src={arrowIconBack} alt="Arrow" /> Back</Link>
          </div>
        <div className="accounting-text-A">{post.category?.title}</div>
        <div className="heading-1-A">{post.title}</div>
        <div className="heading-date-A">{post.publish_date}</div>
        <div className="img-1-container-A ">
          <img className="img-1" src={post.featured_img_url} alt={post.title}></img>
        </div>
        <div className="heading-2-A single-page-heading"></div>
        <div className="heading-2-text-A single-page-heading-text ">
          <div dangerouslySetInnerHTML={{ __html: post.description }} />
        </div>
      </div>
    </div>
  );
};

export default Single;
