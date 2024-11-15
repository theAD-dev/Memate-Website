import "./style.css";
import React, { useState, useEffect } from "react"; 
import { Helmet } from 'react-helmet';
import { Link, animateScroll as scroll } from "react-scroll";

const knowledgeData = [
  {
    "id": 1,
    "name": "Website Terms of Use",
    "description": `
      <p>Use of this website is subject to the terms of this Website Terms of Use, as amended from time to time. If you do not agree to these terms, you should immediately cease using this website. The terms of this Website Terms of Use do not exclude, restrict, or modify:</p>
    <ul>
    <li>the application of any provision of the Australian Consumer Law (whether applied as a law of the Commonwealth or any State or Territory of Australia) (ACL); </li>
    <li>the exercise of any right or remedy conferred by the ACL; or </li>
    <li>the liability of meMate for a failure to comply with any applicable consumer guarantees where to do so would:</li>
    <li>contravene the ACL; or</li>
    <li>cause any part of this Website Terms of Use to be void.</li>
    
    </ul>
   
    <p>
Notice regarding representations, documents, and other website content
Subject to the above and to the extent permitted by law:
    </p>
   

     <ul>
    <li>meMate makes no representations, conditions, or warranties of any kind, express or implied, as to the operation or results of this website, or the accuracy, correctness, or reliability of the information, content, or documentation available on this website; and </li>
    <li>meMate  shall not be liable for any direct, indirect, or consequential damages whatsoever, including loss of use, data, or profits, whether arising in contract, negligence, equity, or under statute as a result of or in connection with the use of this website or documentation, or information available on this website.</li>
    
    </ul>
     <p>
Some jurisdictions do not allow the exclusion or limitation of implied warranties or of liability for incidental or consequential damages, so the above limitations or exclusions may not apply to you. In the event that any of the above limitations or exclusions are held to be unenforceable, meMate’s total liability shall not exceed the amount of the fee you have paid.
    </p>
     <p>
The documents published on this website could include technical inaccuracies or typographical errors. The information presented on this website is changed periodically, and meMate may make improvements and/or changes in the product(s), program(s), and/or documentation described at any time, without notice. </p>
   
    `,
    "children": []
  },
  {
    "id": 2,
    "name": "Notice specific to software available on this website",

    "description": `
    <p>
    Any software downloaded from this website is governed by the terms of the end-user license agreement (EULA), which accompanies or is included with the software. Any reproduction or redistribution of the software not in accordance with the EULA is prohibited by law.
    </p>
    <p>
   Without limiting the foregoing, reproduction or copying of the software to any other server, site, or location for subsequent reproduction or redistribution is expressly prohibited.</p>

    `,
    "children": []
  },
  {
    "id": 3,
    "name": "MeMate does not provide Tax Advice",
    "description": `
    <p>meMate is not a registered entity pursuant to the Tax Agent Services Act 2009 (TASA) and therefore cannot provide taxation advice to clients. If you have a query concerning taxation, including filing your BAS return or annual tax statements, you should consult with your accountant or other registered tax adviser.</p>
   `   
    ,
    "children": []
  },
  {
    "id": 4,
    "name": "Links to third-party sites",

    "description": `
    <p>Some links on this website will let you leave this site. The linked sites are not under the control of meMate, and meMate is not responsible for their operation or contents. These links are provided as a convenience and do not imply an endorsement of the site by meMate.</p>
    `,
    "children": []
  },
  {
    "id": 5,
    "name": "Applicable law",

    "description": `
    <p>This website is operated and provided from Australia. Your use of this website is governed by the laws of Victoria, Australia.</p>
    <p>This website may be accessed throughout Australia and overseas. meMate makes no representations that the content of this website complies with the laws (including intellectual property laws) of any country outside Australia. If you access this website from outside Australia, you do so at your own risk and are responsible for complying with the laws in the place where you access this website.</p>
    `,
    "children": []
  },
  {
    "id": 6,
    "name": "Intellectual property rights",

    "description": `
    <p>
    meMate and the meMate logo are registered trademarks of meMate Enterprise Pty  Limited. Other product and company names mentioned on this website might be the trademarks of their respective owners.
    </p>
    <p>
   Copyright in this website is owned by meMate Enterprise Pty  Limited. </p>
    `,
    "children": []
  },
  {
    "id": 7,
    "name": "Shopping cart",

    "description": `
    <p>
meMate’s websites include an electronic shopping cart. In the event that you commence but do not complete a transaction, meMate or its agents may use the information you have entered to contact you by email to either:
    </p>
    <p>
(a) remind you that the transaction remains incomplete; or</p>
(b) understand why the transaction did not complete (‘Follow-Up Email’).</p>
    <p>By using meMate’s websites, you consent to receiving such Follow-Up Emails. If you do receive a Follow-Up Email, you can request that meMate not make further contact regarding the incomplete transaction.</p>
    `,
    "children": []
  }
];

const TOS = () => {
  const [knowledge, setKnowledge] = useState([]);
  const [activeItem, setActiveItem] = useState(knowledgeData[0]?.id);
 
  useEffect(() => {
    setKnowledge(knowledgeData);
  }, []);

  const handleClick = (id) => {
    setActiveItem(id);
  };

  return (
    <>
    <Helmet>
    <title>Terms of Use: Guidelines for Using MeMate</title>
    <meta property="og:title" content="Terms of Use: Guidelines for Using MeMate" />
      <meta property="og:description" content="Check the terms of use for MeMate services. Understand your rights and responsibilities when using our platform for a seamless experience." />
</Helmet>
    <div className="kb-wrapper">
 <div className="tos-header">
        <p className="tos-section-heading" id="section1">
          Memate
        </p>
        <p className="tos-header-section-sub-heading tos-section-heading" id="section1">
          Terms of use
        </p>
      </div>
      <div className="kb-left-wrapper kb-tos-wrapper">
        {knowledge?.map((item, index) => (
          <ul className="kb-list" key={index}>
            <li
              className={`kb-list-item ${activeItem === item.id ? 'kb-list-item-active' : ''}`}
            >
             <Link
                activeClass="kb-list-item-active"
                to={`section-${item.id}`}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => handleClick(item.id)}
              >
                {item.name}
              </Link>

              
              {item.children && (
                <ul className="kb-nested-list">
                  {item.children.map((subItem, subIndex) => (
                    <li key={subIndex} className="kb-nested-list-item">
                      <Link
                        activeClass="kb-nested-list-item-active"
                        to={`subsection-${subItem.id}`}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => handleClick(subItem.id)} // Handle click event for nested items
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        ))}
      </div>

      <div className="kb-right-wrapper">
        {knowledge?.map((item, index) => (
          <div className="kb-right-section" key={index}>
            <h1 className="kb-section-heading" id={`section-${item.id}`}>
              {item.name}
            </h1>
           
            <br />
            <div
            className="kb-section-description"
            dangerouslySetInnerHTML={{
              __html: item.description || "No description available",
            }}
          />
            <br />

            {item.children && (
              <div className="kb-children-section">
                {item.children.map((child, childIndex) => (
                  <div key={childIndex}>
                    <h2 className="kb-child-heading" id={`subsection-${child.id}`}>
                      {child.name}
                    </h2>
                    <p className="kb-child-date">
                      {new Date(child.updated_at).toLocaleDateString()}
                    </p>
                    <p className="kb-child-description">
                      {child.knowledge && (
                        <>
                          {child.knowledge.map((knowledgeitem, knowledgeIndex) => (
                            <div key={knowledgeIndex}>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: knowledgeitem.description || "No description available",
                                }}
                              />
                            </div>
                          ))}
                        </>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default TOS;
