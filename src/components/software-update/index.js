import "./styles.css";
import { useState, useEffect } from "react";
import { updateList } from "../../api/software-update";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";
const SoftwareUpdate = () => {
  const [update, setUpdate] = useState([]);
  const [totalUpdate, setTotalUpdate] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const postsPerPage = 2;
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true); 
      try {
        const data = await updateList();
        console.log("Fetched data:", data);

        if (!Array.isArray(data)) {
          throw new Error("Fetched data is not an array");
        }

        setTotalUpdate(data.length);

        const startIndex = (currentPage - 1) * postsPerPage;
        const paginatedPosts = data.slice(startIndex, startIndex + postsPerPage);
        
        setUpdate((prevUpdate) => [...prevUpdate, ...paginatedPosts]); 
      } catch (error) {
        setError(error);
        console.error("Error fetching blog posts:", error);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchPosts();
  }, [currentPage]);

  const handleLoadMore = () => {
    if (currentPage * postsPerPage < totalUpdate) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Helmet>
        <title>MeMate Software Updates | Latest Features & Improvements</title>
        <meta name="description" content="See the latest MeMate software updates — new features, improvements, and fixes designed to help Aussie businesses run better every day." />
        <meta
          property="og:title"
          content="MeMate Software Updates | Latest Features & Improvements"
        />
        <meta
          property="og:description"
          content="See the latest MeMate software updates — new features, improvements, and fixes designed to help Aussie businesses run better every day."
        />
      </Helmet>
      <div className="">
        <div className="pageBreadcrumbssu">
                             <ul>
                               <li>Home</li>/<li> <Link className="MainPageLink active" to="/memate-software-updates">Latest Updates</Link></li>
                             </ul>
                             <Link href="https://memate.com.au/" className="backButStoriesSU"><img src={arrowIconBack} alt="Arrow" />Back</Link>
                           </div>
      <div className="brandNameSU">
           <h4>meMate’s</h4>
          <div className="latestUpdatesSU">
            <h2>
            Latest Updates
            </h2>
             <h1 className="h1tagsseo">MeMate Software Updates</h1>
          </div> 
          </div>
        <div className="parentSU">
          {update.map((item, index) => (
            <div key={index} className="content1SU uldateListWrap">
              <div
                className="dateSU"
                data-aos="fade-up"
                data-aos-offset="50"
                data-aos-delay="50"
                data-aos-duration="700"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-bottom"
              >
                {new Date(item.publish_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>

              <div
                className="contextTextSU"
                data-aos="fade-up"
                data-aos-offset="50"
                data-aos-delay="50"
                data-aos-duration="1200"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-bottom"
              >
                <div className="contentText1SU">{item.title}</div>
                <div className="contentText2SU">
                  <div dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
              </div>
            </div>
          ))}

          {currentPage * postsPerPage < totalUpdate && (
            <div
              className="updateButton"
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-bottom"
            >
              <button
                className="btnSU"
                onClick={handleLoadMore}
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "See more Updates"}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SoftwareUpdate;
