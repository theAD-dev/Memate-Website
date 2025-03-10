import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from './wiki.module.scss';
import { useQuery } from "@tanstack/react-query";
import { wikiBaseDtails } from "../../api/wikiApi";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet";

const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";

const WikiDetails = () => {
    const { titleSlug } = useParams();
    const navigate = useNavigate();
    const { data: wikiBaseIdData = [], isLoading, error } = useQuery({
        queryKey: ['wikiBaseDtails', titleSlug],
        queryFn: () => wikiBaseDtails(titleSlug),
        enabled: !!titleSlug, 
    });
    
    const [activeItem, setActiveItem] = useState(null);
    const observerRef = useRef(null);
    const initialized = useRef(false);

    useEffect(() => {
        if (!isLoading && !error) {
            const isValidSlug = wikiBaseIdData.some(
                (item) => item.slug === titleSlug
            );
            if (!isValidSlug) {
                navigate('*', { replace: true });
            }
        }
    }, [wikiBaseIdData, titleSlug, isLoading, error, navigate]);

    useEffect(() => {
        if (wikiBaseIdData.length > 0) {
            const firstSlug = wikiBaseIdData[0]?.titleSlug;
            if (firstSlug && firstSlug !== titleSlug) {
                navigate(`/memate-wiki/${firstSlug}`, { replace: true });
            }
        }
    }, [wikiBaseIdData, titleSlug, navigate]);

    useEffect(() => {
        if (wikiBaseIdData.length === 0) return;

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    setActiveItem(sectionId);
                    
                    if (initialized.current) {
                        // window.history.replaceState(null, null, `#${sectionId}`);
                    }
                }
            });
        };

        observerRef.current = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '-30% 0px -40% 0px',
            threshold: 0.2
        });

        const headings = document.querySelectorAll('.kb-section-heading');
        headings.forEach(heading => observerRef.current.observe(heading));

        // Set initial active item
        requestAnimationFrame(() => {
            const firstVisible = Array.from(headings).find(heading => {
                const rect = heading.getBoundingClientRect();
                return rect.top <= window.innerHeight * 0.5;
            });
            
            if (firstVisible) {
                setActiveItem(firstVisible.id);
            } else if (headings.length > 0) {
                setActiveItem(headings[0].id);
            }
            initialized.current = true;
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [wikiBaseIdData]);

    if (isLoading) return <div></div>;
    if (error) return <div>Error fetching data. Please try again later.</div>;

    return (
        <>
            <Helmet>
                <title>{wikiBaseIdData[0]?.seo_title || "Wiki Details"}</title>
                <meta name="description" content={wikiBaseIdData[0]?.metadescription || "Wiki details page"} />
                <meta property="og:title" content={wikiBaseIdData[0]?.seo_title || "Wiki Details"} />
                <meta property="og:description" content={wikiBaseIdData[0]?.metadescription || "Wiki details page"} />
            </Helmet>
            <div className="parent-blog">
                <div className="pageBreadcrumbs">
                    <ul className={style.linkstyleDisable}>
                        <li><a href="/" className={style.linkstyleDisable}>Home</a></li>/
                        <li><a href="/memate-wiki" className={style.linkstyleDisable}>meMate wiki</a></li>/
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
                        <div className="kb-left-wrapper kb-tos-wrapper highlight-words">
                            <ul className="kb-list">
                                {wikiBaseIdData.map((item) => {
                                    const tempDiv = document.createElement("div");
                                    tempDiv.innerHTML = item.description || "";
                                    const headings = Array.from(tempDiv.querySelectorAll("h2"));
                                    
                                    return headings.map((heading, idx) => {
                                        const sectionId = `section-${item.id}-${idx}`;
                                        return (
                                            <li
                                                key={sectionId}
                                                className={`kb-list-item ${activeItem === sectionId ? 'kb-list-item-active' : ''}`}
                                            >
                                                <Link
                                                    activeClass="kb-list-item-active"
                                                    to={sectionId}
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-70}
                                                    duration={500}
                                                    onSetActive={() => setActiveItem(sectionId)}
                                                >
                                                    <span>{heading.textContent}</span>
                                                </Link>
                                            </li>
                                        );
                                    });
                                })}
                            </ul>
                        </div>

                        <div className="kb-right-wrapper">
                            {wikiBaseIdData.map((item) => {
                                const tempDiv = document.createElement("div");
                                tempDiv.innerHTML = `<div>${item.description || ""}</div>`;
                                const sections = Array.from(tempDiv.querySelectorAll("h2"));
                                
                                return sections.map((heading, idx) => {
                                    const sectionId = `section-${item.id}-${idx}`;
                                    let content = [];
                                    let currentNode = heading.nextSibling;

                                    while (currentNode && currentNode.nodeName !== 'H2') {
                                        content.push(currentNode.outerHTML || currentNode.textContent);
                                        currentNode = currentNode.nextSibling;
                                    }

                                    return (
                                        <div key={sectionId} className="kb-right-section">
                                            <h2 
                                                className="kb-section-heading" 
                                                id={sectionId}
                                                dangerouslySetInnerHTML={{ __html: heading.innerHTML }}
                                            />
                                            <div dangerouslySetInnerHTML={{ __html: content.join('') }} />
                                        </div>
                                    );
                                });
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WikiDetails;