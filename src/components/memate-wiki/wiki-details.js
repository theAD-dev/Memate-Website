import React, { useState, useEffect } from "react";
import { useParams, useLocation,useNavigate  } from "react-router-dom";
import style from './wiki.module.scss';
import { useQuery } from "@tanstack/react-query";
import { wikiBaseDtails } from "../../api/wikiApi";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet";

const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";

const WikiDetails = () => {
    // const { categoryId } = useParams();

    const navigate = useNavigate();
    const location = useLocation();
    const { id: categoryId, slug: titleSlug } = location.state || {};

    const { data: wikiBaseIdData = [] } = useQuery({
        queryKey: ['wikiBaseDtails', categoryId],
        queryFn: () => wikiBaseDtails(categoryId),
        enabled: !!categoryId,
    });
   
      const [activeItem, setActiveItem] = useState(wikiBaseIdData[0]?.id);
 
      console.log('wikiBaseIdData: ', wikiBaseIdData);

      useEffect(() => {
        if (wikiBaseIdData.length > 0) {
            const titleSlug = wikiBaseIdData[0]?.titleSlug;
            if (titleSlug) {
                navigate(`/wiki-details/${titleSlug}`, { replace: true });
            } else {
                console.error("Slug is undefined for the first item.");
            }
        }
    }, [wikiBaseIdData, categoryId, navigate]);

    const handleClick = (id) => {
        setActiveItem(id);
        
    };

   
    return (
        <>
        <Helmet>
        <title>{wikiBaseIdData[0]?.seo_title}</title>
        <meta name="description" content={wikiBaseIdData[0]?.metadescription} />
        <meta property="og:title" content={wikiBaseIdData[0]?.seo_title} />
        <meta property="og:description" content={wikiBaseIdData[0]?.metadescription} />
      </Helmet>
        <div className="parent-blog">
            <div className="pageBreadcrumbs">
                <ul className={style.linkstyleDisable}>
                    <li><a href='/' className={style.linkstyleDisable}>Home</a></li>/
                    <li><a href='/memate-wiki' className={style.linkstyleDisable}>meMate wiki</a></li>/
                    <li><a>{wikiBaseIdData[0]?.title}</a></li>
                </ul>
                <a href="/memate-wiki" className="backButStories">
                    <img src={arrowIconBack} alt="Arrow" /> Back
                </a>
            </div>

            <div className={`${style.wikimainwrap}`}>
                <div className={style.wikimainhead}>
                    <h1>{wikiBaseIdData[0]?.title}</h1>
                    <p>{wikiBaseIdData[0]?.short_description}</p>
                </div>

                <div className="kb-wrapper">
                    {/* Left Navigation */}
                    <div className="kb-left-wrapper kb-tos-wrapper">
    <ul className="kb-list">
        {wikiBaseIdData.map((item, index) => {
            // Create a temporary div to parse the HTML content
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = item.description || "<b>No description available</b>";

            // Extract all <b> tags
            const boldTexts = Array.from(tempDiv.querySelectorAll("h2")).map((b) => b.textContent);

            return (
                <li key={index} className="kb-list-item-wrapper">
                    {/* Loop through each <b> tag */}
                    {boldTexts.map((boldText, idx) => (
                        <li
                            key={`${item.id}-${idx}`}
                            className={`kb-list-item ${activeItem === `${item.id}-${idx}` ? 'kb-list-item-active' : ''}`}
                        >
                            <Link
                                activeClass="kb-list-item-active"
                                to={`section-${item.id}-${idx}`}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => handleClick(`${item.id}-${idx}`)}
                            >
                                <span>{boldText}</span>
                            </Link>
                        </li>
                    ))}
                </li>
            );
        })}
    </ul>
</div>



                    {/* Right Content */}
                    <div className="kb-right-wrapper">
    {wikiBaseIdData.map((item) => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = `<div>${item.description || "<h2>No description available</h2>"}</div>`;

        const sections = Array.from(tempDiv.querySelectorAll("h2")).map((boldText) => {
            let description = "";
            let currentNode = boldText.nextSibling;
        
            while (currentNode) {
                if (currentNode.nodeName === "H2") break; // Stop when encountering the next <h2>
                if (currentNode.nodeType === Node.TEXT_NODE) {
                    if (currentNode.textContent.trim()) {
                        description += currentNode.textContent;
                    }
                } else {
                    description += currentNode.outerHTML || "";
                }
                currentNode = currentNode.nextSibling;
            }
        
            return {
                heading: boldText.textContent.trim(),
                description: description.trim() || "No description available",
            };
        });
        
        // Filter out duplicate sections by heading
        const uniqueSections = sections.filter(
            (section, index, self) =>
                index === self.findIndex((s) => s.heading === section.heading)
        );
        
        

        return (
            <div className="kb-right-section" key={item.id}>
            {uniqueSections.map((section, idx) => (
                <div key={`${item.id}-${idx}`} id={`section-${item.id}-${idx}`}>
                    <h2 className="kb-section-wiki-heading">{section.heading}</h2>
                    <p dangerouslySetInnerHTML={{ __html: section.description }} />
                </div>
            ))}
        </div>
        );
    })}
</div>





                </div>
            </div>
        </div>
        </>
    );
};

export default WikiDetails;
