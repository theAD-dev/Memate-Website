import "./style.css";
import React, { useState, useEffect, useRef } from "react"; 
import { Helmet } from 'react-helmet';
import { useLocation } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

const knowledgeData = [
  {
    id: 1,
    name: "Branding",
    description: `
    <div class="subHead">Warm  Intellectual and Friendly </div> 
      `,
    children: [],
  },
  {
    id: 2,
    name: "Logo Usage",

    description: `
    <p>The primary MeMate logo features a modern and vibrant gradient, transitioning from blue to orange. This gradient reflects the brand’s dynamic and versatile nature. The logo’s clean, lowercase typography emphasizes approachability and friendliness, aligning with MeMate’s mission to simplify business management.
</p>
  <ul class="logBrand">
    <li class="brandLogo01"><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/memate-brnad-logo.png" alt="Logo Brand 01" ></li>
    <li class="brandLogo02"><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/memate-brnad-logo.png" alt="Logo Brand 01" ></li>
    <li class="brandLogo03"><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/memate-brnad-logo.png" alt="Logo Brand 01" ></li>
    <li class="brandLogo04"><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/memate-brnad-logo.png" alt="Logo Brand 01" ></li>
  </ul>
  <ul class="logBrand">
  <h4>The logo</h4>
   <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/the-logo-scale.png" width="100%" alt="The logo" >
  </ul>
  <ul class="logBrand">
  <h4>Logo safezone</h4>
   <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/logo-safezone.png" width="100%" alt="The logo" >
  </ul>
  <div class="logBrandHori">
  <h4>Brand mark</h4>
  <ul>
    <li class="brandLogo01">
    <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/memate-brnad-logo.png" alt="Logo Brand 01" >
    </li>
    <li class="brandLogo02">
    <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/memate-brnad-logo.png" alt="Logo Brand 01" >
    </li>
    <li class="brandLogo03">
    <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/memate-brnad-logo.png" alt="Logo Brand 01" >
    </li>
</ul>
  </div>
  <div class="doesandDont">
    <h4>Dos and Don’ts</h4>
    <div class="listing">
      <ol>
        <strong>Dos</strong>
        <li><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/check-circle.svg" alt="icon"> Use the logo consistently across all media and materials.</li>
        <li><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/check-circle.svg" alt="icon"> Ensure the logo is always clearly visible against its background.</li>
        <li><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/check-circle.svg" alt="icon"> Maintain the logo’s aspect ratio when resizing to prevent distortion.</li>
      </ol>
      <ol>
        <strong>Don’ts</strong>
        <li><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/check-circle-icon.svg" alt="icon"> Do not alter the colors or gradient of the logo.</li>
        <li><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/check-circle-icon.svg" alt="icon"> Avoid using the logo on backgrounds that do not provide sufficient contrast.</li>
        <li><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/check-circle-icon.svg" alt="icon"> Do not add effects such as shadows, glows, or patterns to the logo.</li>
      </ol>
    </div>
  </div>
   
   `,
    children: [],
  },
  {
    id: 3,
    name: "Brand Files",
    description: `
   <ul class="brandFileGrid">
     <li>
     <span><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/frame39531.png" width="100%" alt="frame39531"></span>
     <span><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/frame427317987.png" width="100%" alt="frame427317987"></span>
     </li>
     <li>
     <span><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/frame427317985.png" width="100%" alt="frame427317985"></span>
     <span><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/frame427317987(1).png" width="100%" alt="frame427317987"></span>
     </li>
     <li>
     <span><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/group309.png" width="100%" alt="group309"></span>
     <span><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/frame427317987(1).png" width="100%" alt="frame427317987"></span>
     </li>

   </ul>
    
   
   `,
    children: [],
  },
  {
    id: 4,
    name: "Color Palette",
    description: `
   <p>The gradient transition from blue to orange in our brand palette symbolizes a journey from stability and trust to energy and innovation. The blue tones represent reliability and professionalism, while the warm orange hues convey enthusiasm and creativity. This gradient reflects MeMate’s commitment to providing dependable business management solutions while embracing forward-thinking and dynamic approaches. </p>
    <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/color-palette.png" width="100%" alt="Logo Brand 01" >
    
   
   `,
    children: [],
  },
  {
    id: 5,
    name: "Gradient",

    description: `
    <p>The blend of these colors visually narrates our brand’s mission to empower businesses with both confidence and innovative tools. This color choice embodies our values and appeals to a broad audience, ensuring a modern and approachable brand presence.</p>
    <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/gradient-img0.png" width="100%" alt="gradient 01" >&nbsp;&nbsp;&nbsp;
    <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/gradient-img01.png" width="100%" alt="gradient 02" >
   
    `,
    children: [],
  },
  {
    id:6,
    name: "Typography",

    description: `
    <p>The typography for MeMate utilizes the Sequel typeface, which is chosen for its modern, clean lines and versatility. The typeface comes in three primary weights: Light, Roman, and Bold, each serving distinct purposes within the brand’s visual language.</p>
   <div class="fonts-sec">
  <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/fonts-sec01.png" width="100%" alt="fonts 01" >
   </div>
    <p>The MeMate typography system leverages the Sequel typeface to create a clean, modern, and accessible design. This typeface, with its varying weights, provides a versatile and cohesive visual language across all brand communications.</p>
   <div class="fonts-sec">
  <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/font-sec02.png" width="100%" alt="fonts 02" >
   </div>
   
    `,
    children: [],
  },
  {
    id: 7,
    name: "Brand Message",

    description: `
    <p>MeMate is dedicated to simplifying business management through intuitive and innovative solutions. Our platform empowers businesses by streamlining operations, enhancing productivity, and providing tools that are both powerful and easy to use. We prioritize user-centric design, ensuring that our solutions are accessible and effective for all users.</p>
   <div class="brandSec">
    <ol>
      <li>
        <div class="in">
      <h6>Tone of Voice</h6>
      <p>Our tone is professional yet approachable, balancing clarity with warmth. We communicate in a friendly and supportive manner, ensuring that our messages are easy to understand and resonate with our audience.</p>
      </div>
      </li>
      <li>
        <div class="in">
      <h6>Down to Business</h6>
      <p>“MeMate: Down to Business” encapsulates our core message of simplifying and streamlining business operations, making it easier for companies to focus on what they do best.</p>
      </div>
      </li>
      <li>
        <div class="in">
      <h6>Key Themes</h6>
      <p>Our brand focuses on innovation, trust, and accessibility. We are committed to providing cutting-edge solutions that are reliable and user-friendly, ensuring that our clients can trust our products to meet their needs.</p>
      </div>
      </li>
      <li>
      <div class="in">
      <h6>Audience Connection</h6>
      <p>We connect with our audience by understanding their needs and providing tailored solutions. Our emphasis on user experience and customer support ensures that our clients feel valued and supported throughout their journey with us.</p>
      </div>
      </li>
    </ol>
   </div>
    `,
    children: [],
  },
  {
    id: 8,
    name: "Feel Examples",

    description: `
   <p>The typography for MeMate utilizes the Sequel typeface, which is chosen for its modern, clean lines and versatility. The typeface comes in three primary weights: Light, Roman, and Bold, each serving distinct purposes within the brand’s visual language.</p>
   <div class="feel-example">
   <p><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/feel-example01.png" width="100%" alt="Feel Examples 01" ></p>
   <p><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/feel-example02.png" width="100%" alt="Feel Examples 02" ></p>
   <p><img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/feel-example03.png" width="100%" alt="Feel Examples 03" ></p>

   </div>
   
    `,
    children: [],
  },
 
];

const MiddleSection = () => {
    const location = useLocation(); 
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);
  const [knowledge, setKnowledge] = useState([]);
  const [activeItem, setActiveItem] = useState(knowledgeData[0]?.id);
  const observerRef = useRef(null);
  const initialized = useRef(false);  
  useEffect(() => {
    setKnowledge(knowledgeData);
    // setActiveItem(0);
    // setKnowledge(0);
  }, []);

  useEffect(() => {
    if (knowledge.length === 0) return;

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id.split('-')[1];
          setActiveItem(Number(id));
          
          if (initialized.current) {
            // window.history.replaceState(null, null, `#section-${id}`);
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '-15% 0px -40% 0px',
      threshold: 0.2
    });

    const headings = document.querySelectorAll('.kb-section-heading');
    headings.forEach(heading => observerRef.current.observe(heading));

    requestAnimationFrame(() => {
      const firstVisible = Array.from(headings).find(heading => {
        const rect = heading.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.5;
      });
      
      setActiveItem(firstVisible ? 
        Number(firstVisible.id.split('-')[1]) : 
        knowledgeData[0].id
      );
      initialized.current = true;
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [knowledge]);



  // const handleClick = (id) => {
  //   setActiveItem(id);
  // };

  return (
    <>
    <Helmet>
    <title>Brand</title>
    <meta property="og:title" content="brand" />
      <meta property="og:description" content="" />
  </Helmet>
     <div className="kb-wrapper memate-brand-wrap">
        <div className="kb-left-wrapper1 kb-tos-wrapper1">
          {knowledge.map((item) => (
            <ul className="kb-list" key={item.id}>
              <li className={`kb-list-item1 ${activeItem === item.id ? 'kb-list-item-active1' : ''}`}>
                <Link
                  to={`section-${item.id}`}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onSetActive={() => setActiveItem(item.id)}
                >
                  {item.name}
                </Link>
              </li>
            </ul>
          ))}
        </div>

        <div className="kb-right-wrapper memate-brand-right">
          {knowledge.map((item) => (
            <div className="kb-right-section" key={item.id}>
              <h1 className="kb-section-heading" id={`section-${item.id}`}>
                {item.name}
              </h1>
              <div dangerouslySetInnerHTML={{ __html: item.description }} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MiddleSection;
