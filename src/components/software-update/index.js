import "./styles.css";
import { useState, useEffect } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { updateList } from "../../api/software-update";
import { Helmet } from "react-helmet";

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
        <title>Software Updates & Technology Upgrades | MeMate Business Solutions</title>
        <meta
          property="og:title"
          content="Software Updates & Technology Upgrades | MeMate Business Solutions"
        />
        <meta
          property="og:description"
          content="Stay ahead with MeMate’s latest software system updates and technology upgrades. Explore how our 
          ongoing innovations keep Australian small businesses running efficiently."
        />
      </Helmet>
      <div className="">
        <div className="parent">
          <div className="brandName">
          <h1 className="h1tagsseo">meMate’s Latest Updades</h1>
          </div>
          <div className="latestUpdates">
            <h2 className="latest-update-text latest-update-head">
            Latest Updates
            </h2>
          </div>

          {update.map((item, index) => (
            <div key={index} className="content1 uldateListWrap">
              <div
                className="date"
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
                className="contextText"
                data-aos="fade-up"
                data-aos-offset="50"
                data-aos-delay="50"
                data-aos-duration="1200"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-bottom"
              >
                <div className="contentText1">{item.title}</div>
                <div className="contentText2">
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
                className="btn"
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
