import "./style.css";
import React, { useState, useEffect } from "react"; 
import { Helmet } from 'react-helmet';
import { Link, animateScroll as scroll } from "react-scroll";

const knowledgeData = [
  {
    "id": 1,
    "name": "meMate Terms of Use",
    "description": `
      <p>Our terms of use outline the agreement between you and meMate. They detail our commitment as your service provider and your responsibilities as our valued customer.</p>
    `,
    "children": []
  },
  {
    "id": 2,
    "name": "Introduction",

    "description": `
    <p>
    Welcome to meMate! We’re thrilled to have you join us. Before you begin using meMate, we ask that you review and accept these terms. We’ve aimed to make everything clear and jargon-free, so you’ll know exactly what we expect from you and what you can expect from us.</p>

    <p>
  To make this process easier, we’ve included summary paragraphs at the start of each section to give you a quick overview.
  </p>
    <p>
These terms cover your legal rights and obligations, so please read them carefully. If you find that you can’t agree to our terms, unfortunately, you won’t be able to use our services.
  </p>
    <p>
Should you have any questions or comments after reading, please reach out to us via meMate Central. We’re here to help and look forward to assisting you.
</p>
    <p>
Last updated on 31 July 2024. We’ve updated these terms to ensure greater clarity and transparency and to better align with our business practices. The updates also include specific requirements for subscribers in our partner program, designed to ensure their clients have appropriate subscription access rights.
</p>
    `,
    "children": []
  },
  {
    "id": 3,
    "name": "Joining and Using meMate",
    "description": `
    <p>In this section we explain how to subscribe to meMate and use our services. When you see a word in bold, it will have the same corresponding meaning every time it’s used within these terms.
    </p>
    <ul>
    
      <li>
      <strong>1. You and meMate</strong>
      <p>
      When we say you or your, we mean both you and any entity or firm you’re authorised to represent. When we say meMate, we, our or us, 
      we’re talking about the meMate entity you contract with and pay fees to based on the edition of the meMate product you’re using.
      </p>
      </li>
      <li>
      <strong>2. Our Services</strong>
      <p>
      Our services consist of all the services we provide now or in the future, including our online and mobile accounting and project managing and financial products.
      </p>
      </li>
      <li>
      <strong>3. Creating a Subscription</strong>
      <p>
     When you create a subscription to use our services and accept these terms, you become a subscriber. 
     If you’re the subscriber, you’re the one responsible for paying for your subscription.
      </p>
      </li>
      <li>
      <strong>4. People Invited to Use meMate</strong>
      <p>
 An invited user is a person other than the subscriber who has been invited to use our services through a subscription. 
 If you’re an invited user, you must also accept these terms to use our services.
      </p>
      </li>
      <li>
      <strong>5. User Roles and Access:</strong>
      <p>
As a subscriber inviting others into a subscription, you should understand the permissions you’re granting to invited users. 
Check out information about user roles and levels of access on meMate.
      </p>
      </li>
      <li>
      <strong>6. Partner Program</strong>
      <p>
If you participate in our partner program, read our additional partner terms.
      </p>
      </li>
      <li>
      <strong>7. Online Payments</strong>
      <p>
If you are located in one of the regions set out in the additional online payments terms and you choose to connect 
Stripe to your subscription (so you can accept online payments from 
customers through your meMate invoices), read our additional online payments terms.
      </p>
      </li>
      <li>
      <strong>8. The Right to Use Our Services</strong>
      <p>
Whether you’re a subscriber or an invited user, we grant you the right to use our services (based on your subscription type, your user role and the 
level of access you’ve been granted) for as long as the subscriber continues to pay for the subscription, until the subscription is terminated, 
or – if you’re an invited user – until your access is revoked.
      </p>
      </li>
      <li>
      <strong>9. Subscriber Role</strong>
      <p>
     As a subscriber, you take responsibility for fully controlling how your subscription is managed and who can access it. It’s quite a big deal! For example:
     <ul>
      <li>You can transfer a subscription.</li>
      <li>You control access to a subscription. You decide who’s invited to use our services you’ve subscribed to and what kind of access the invited user has. You can change or stop that access at any time.</li>
      <li>You’re responsible for resolving any disputes with any invited users over access to your subscription. You can find out more about disputes over access on meMate Central. If you participate in our partner program and act as the subscriber on behalf of your client, we may reasonably direct you to provide your client with read-only access to the subscription in accordance with the additional partner terms.</li>
      <li>You’re responsible for all your invited users’ activity.</li>
     </ul>
      </p>
      </li>
      <li>
      <strong>10. Rules</strong>
      <p>
     Whatever your role, when you use meMate you agree to follow the rules in section 46. Please read them and make sure you understand what you should and shouldn’t do.
      </p>
      </li>
      <li>
      <strong>11. Your Responsibilities</strong>
      <p>You promise that you’ll keep your information (including a current email address) up to date. You’re responsible for providing true, accurate and complete information and for verifying the accuracy of any information that you use from our services for your legal, tax and compliance obligations. You’re also responsible for protecting your username and password from getting stolen or misused. </p>
      <p>Our service has minimum password standards but you will ensure that passwords are very strong and not easily guessable. The stronger the password the better! For more on security generally, check out the security section below.</p>
      </li>
      <li>
      <strong>12. When We Introduce New or Revised Services</strong>
      <p> Since we’re always thinking about how to make meMate the best it can be – seriously, we’ve got teams dedicated to it – we regularly expand our services. For new or updated services, there might be additional terms. We’ll let you know what those terms are before you start using those services.</p>
      </li>
      <li>
      <strong>13. What We Own</strong>
      <p>We own everything we’ve put into our services unless otherwise stated and excluding content owned by others. This includes rights in the design, compilation, and look and feel of our services. It also includes rights in all copyrighted works, trademarks, designs, inventions, and other intellectual property. You agree not to copy, distribute, modify or make derivative works of any of our content or use any of our intellectual property rights in any way not expressly permitted by us.</p>
      </li>
      
    </ul>
   `   
    ,
    "children": []
  },
  {
    "id": 4,
    "name": "Pricing",

    "description": `
    <p>Unless you’re in a free trial or other offer period, you’ll need to pay for a subscription based on the pricing of your selected plan. The pricing details and other terms of your subscription are explained when you select your plan. This section is for the subscriber, not an invited user.</p>
    <ul>
      <li>
      <strong>14. Trial Subscriptions</strong>
      <p>When you first sign up, you can opt for a free trial, based on the terms specified at the time. If you choose to continue 
      using our services after the trial, you’ll be billed when you add your billing details into our services, 
      explained in more detail in the pricing plan and on meMate.</p>
      <p>If you choose not to continue using our services following a trial, you may delete your organisation.</p>
      </li>
    </ul>
    
    
    
    
    `,
    "children": []
  },
  {
    "id": 5,
    "name": "Termination",

    "description": `
    <p>This website is operated and provided from Australia. Your use of this website is governed by the laws of Victoria, Australia.</p>
    <p>This website may be accessed throughout Australia and overseas. meMate makes no representations that the content of this website complies with the laws (including intellectual property laws) of any country outside Australia. If you access this website from outside Australia, you do so at your own risk and are responsible for complying with the laws in the place where you access this website.</p>
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
