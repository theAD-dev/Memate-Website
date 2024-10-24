import { useState, useEffect } from 'react';
import "./style.css";
import { Link } from "react-router-dom";
import Images from "../../assests/blog-images";
import { updateListLatest } from "../../api/software-update";


const NewsAndUpdate = ({ postsLatest }) => {
  let savedUpdatedData = [];
try {
  savedUpdatedData = JSON.parse(sessionStorage.getItem('updateData') || "[]");
} catch (error) {
  console.error('Error parsing updateData from sessionStorage:', error);
  savedUpdatedData = [];
}
  const [update, setUpdate] = useState(savedUpdatedData);

  useEffect(() => {
    const fetchUpdate = async () => {
      try {
        const data = await updateListLatest();
        sessionStorage.setItem('updateData', JSON.stringify(data));
        setUpdate(data);
      } catch (err) {
        console.log('Error during getting the update Data:', err);
      }
    };

    if (!update?.length) fetchUpdate();
  }, []);

  return (
    <>
      <div className="slider-section1">
        <div className="success-stories1">
          <div className="bottom-management">
            <h2>News and Updates</h2>
            <p>
              Discover how meMate is transforming businesses across Australia.
            </p>
            {/* <button>Read More</button> */}
          </div>
          <div className="newsandUpdateNew">
            <div className="NewsflexWrap">
              <div className="Newsitem">
                <div className="itemHead">
                  <span>News</span> <Link to='/news'>All News</Link>
                </div>
                <ul>
                  {postsLatest?.map((post) => (
                    <li key={post.id}>
                      <div className="imgBox">
                        <Link to={`/news/${post.slug}`}> <img
                          src={post?.featured_img_url || Images.blogImgempty}
                          alt="Blog featured image"
                        /></Link>
                      </div>
                      <div className="textBox">
                        <span>{new Date(post?.publish_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        <Link to={`/news/${post?.slug}`}><h2>{post?.title}</h2></Link>
                        <Link to={`/news/${post?.slug}`}>Read More</Link>
                      </div>
                    </li>
                  ))}
                </ul>

              </div>
              <div className="softwareWrp">
                <div className="itemHead">
                  <span>Updates</span> <Link to='/software-update'>All Updates</Link>
                </div>
                <ul>
                  {update?.map((updateitem) => (
                    <li key={updateitem?.id}>
                      <h3>{updateitem?.title}</h3>
                      <span>{new Date(updateitem?.publish_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </li>
                  ))}

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsAndUpdate;
