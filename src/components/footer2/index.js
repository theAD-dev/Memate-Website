import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import {ReactComponent as FacebookIcon} from "../../assests/icons/footer-facebook.svg";
import {ReactComponent as LinkdinIcon} from "../../assests/icons/footer-linkdin.svg";
import {ReactComponent as InstagramIcon} from "../../assests/icons/footer-instagram.svg";
import {ReactComponent as AppStoreIcon} from "../../assests/icons/app-store-icon.svg";
import {ReactComponent as PlayStoreIcon} from "../../assests/icons/play-store-icon.svg";
import {ReactComponent as MacAppStoreIcon} from "../../assests/icons/mac-app-store.svg";
import {ReactComponent as MicrosoftAppStoreIcon} from "../../assests/icons/microsoft-app-store.svg"

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="main-footer">
        <div className="section1">
          <div className="heading-section">
            <div>
              <p className="footer-heading">Down to Business &nbsp;<span className="trade-mark">TM</span></p>
            </div>
            <div className="footer-icons">
              <div><Link to="https://www.facebook.com/mematesoftware/"><FacebookIcon/></Link></div>
              <div><Link to="https://www.instagram.com/memateapp/"><InstagramIcon/></Link></div>
              <div><Link to="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F78408530"><LinkdinIcon/></Link></div>
            </div>
          </div>
          <div className="download-section">
            <div className="download-heading">Download</div>

            <div className="application-section">
              <p>Mobile Application for Employees and Contractors</p>
              <div className="application-icons">
                <div><Link to="https://play.google.com/store/apps/details?id=com.memate&pli=1"><AppStoreIcon/></Link></div>
                <div><Link to="https://apps.apple.com/in/app/memate/id1563935364"><PlayStoreIcon/></Link></div>
              </div>
            </div>

            <div className="application-section">
              <p>Desktop Application for Business Management</p>
              <div className="application-icons">
                <div><MacAppStoreIcon/></div>
                <div><MicrosoftAppStoreIcon/></div>
              </div>
            </div>

            <div className="paragraph-section">
              <p>Apple and the Apple logo are trade marks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc., registered in the U.S. and other countries. Google Play and the Google Play logo are trade marks of Google LLC.</p>
            </div>
          </div>
        </div>

        <div className="section2">
          <div className="footer-links">

            <div className="links">
              <p className="link-heading">Company</p>
              <div className="page-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F78408530" target="_blank">Carreers</Link>
              </div>
            </div>

            <div className="links">
              <p className="link-heading">Business Software</p>
              <div className="page-links" style={{width:"117px"}}>
                <Link to="/pricing">Plan and Pricing</Link>
                <Link to="/features">Features</Link>
                <Link to="/industries">Industries</Link>
                
              </div>
            </div>

            <div className="links">
              <p className="link-heading">Features</p>
              <div className="page-links" style={{width:"141px"}}>
              <Link to="/client-management">Client Management</Link>
              <Link to="/supplier-management">Supplier Management</Link>
              <Link to="/feature-page-sales">Sales Pipeline</Link>
              <Link to="/project-management">Project Management</Link>
              <Link to="/communication">Communication</Link>
              <Link to="/schedule-jobs">Schedule Jobs</Link>
              <Link to="/invoicing">Invoicing</Link>
              <Link to="/statistic">Statistic</Link>
              <Link to="/reports">Reports</Link>
              </div>
            </div>

            <div className="links">
              <p className="link-heading">Resources & Tools</p>
              <div className="page-links" style={{width:"118px"}}>
               <Link to="/knowledge-base">Knowledge Base</Link>
                <Link to="/customer-stories">Customer Stories</Link>
                <Link to="/supplier-database">Supplier Database</Link>
                <Link to="/sitemap">Sitemap</Link>
                <Link to="https://dev.memate.com.au/requestdemo" target="_blank">Request a Demo</Link>
                <Link to="https://dev.memate.com.au/requestdemo" target="_blank">My Account</Link>
              </div>
            </div>

            <div className="links">
              <p className="link-heading">Industries</p>
              <div className="page-links" style={{width: "181px"}}>
              <Link to="/creative-agencies">Creative Agencies</Link>
              <Link to="/electronic-repair-specialists">Electronic Repair Specialists</Link>
              <Link to="/photo-video-agency">Photo & Video Agency</Link>
              <Link to="/automotive">Automotive</Link>
              <Link to="/startups">Startups</Link>
              <Link to="/construction">Construction</Link>
              </div>
            </div>

            <div className="links">
              <p className="link-heading">Compare</p>
              <div className="page-links" style={{width: "149px"}}>
              <Link to="/">MeMate vs QuickBooks</Link>
              <Link to="/">MeMate vs Myob</Link>
              <Link to="/">MeMate Vs Jira</Link>
              <Link to="/">MeMate vs Monday</Link>
              <Link to="/">MeMate vs Trello</Link>
              <Link to="/">MeMate vs SalesForce</Link>
              <Link to="/">MeMate vs Airtable</Link>
              <Link to="/">MeMate vs Wrike</Link>
              <Link to="/">MeMate vs Servicem8</Link>
              <Link to="/">MeMate vs Reckon</Link>
              <Link to="/">MeMate vs Xero</Link>
              <Link to="/">MeMate vs ms Project</Link>
              <Link to="/">MeMate vs Sage</Link>
              <Link to="/">MeMate vs NetSuite</Link>
              </div>
            </div>

            <div className="links">
              <p className="link-heading">Legal</p>
              <div className="page-links" style={{width: "142px"}}>
                <a>Terms And Conditions</a>
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms-of-use">Website Terms of Use</Link>
                <Link to="/security">Security</Link>
                <Link to="/legal">Legal</Link>
              </div>
            </div>

            <div className="links">
              <p className="link-heading">Support</p>
              <div className="page-links" style={{width: "109px"}}>
              <Link to="/contact-us">Contact Us</Link>
              <Link to="/delete-request">Delete Request</Link>
                <Link to="/software-update"><p>Software Update </p></Link>
              </div>
            </div>

          </div>
        </div>

        <div className="section3">
          <div className="copyright">
            <p>© MeMate 2024 </p>
            <Link to="https://www.thead.com.au/" target="_blank"><p>theAd | Web Design Company in Sydney</p></Link>
          </div>
        </div>
        {/* <div className="socail-media-sec">
          <div className="footer-logo">
            <img src={Images.logo} alt="logo" />
          </div>
          <p className="management-footer">Business Management Software</p>
          <div className="connect">
            <h3>Connect</h3>
            <div className="media-links">
              <img src={Images.facebookIcon} />
              <img src={Images.instagramIcon} />
              <img src={Images.linkdinIcon} />
            </div>
          </div>
          <div className="download">
            <h3>Download</h3>
            <div className="store">
              <img src={Images.appStore} />
              <img src={Images.googleStore} />
            </div>
            <div className="store">
              <img src={Images.macAppStore} />
              <img src={Images.microSoftSore} />
            </div>
          </div>

          <div className="bottom-text">
            <p>© MeMate 2024 </p>

            <p>theAd | Web Design Company in Sydney</p>
          </div>
        </div>

        <div className="company-link">
          <h3>Company</h3>
          <div className="page-links">
            <p>Home</p>
            <p>About</p>
            <p>Carreers</p>
          </div>
        </div>
        <div className="company-link">
          <h3>Features</h3>
          <div className="page-links">
            <p>Client Management</p>
            <p>Supplier Management</p>
            <p>Sales </p>
            <p>Project Management </p>
            <p>Communication </p>
            <p>Scheduling </p>
            <p>Invoicing </p>
            <p>Statistic </p>
            <p>Reports </p>
          </div>
          <div className="company-link top-space">
            <h3>
              Ressources <br />& Tools
            </h3>
            <div className="page-links">
              <p>Customer Stories </p>
              <p>Supplier Database </p>
              <p>Sitemap </p>
              <p>Book a Demo</p>
              <p>My Account </p>
            </div>
          </div>
        </div>
        <div className="company-link">
          <h3>Industries</h3>
          <div className="page-links">
            <p>Creative Agencies </p>
            <p>Electronic Repair Specialists</p>
            <p>Photo & Video Agency </p>
            <p>Automotive </p>
            <p>Startups </p>
            <p>Construction </p>
          </div>

          <div className="company-link top-space">
            <h3>Compare </h3>
            <div className="page-links">
              <p>MeMate vs QuickBooks </p>
              <p>MeMate vs Myob </p>
              <p>MeMate Vs Jira </p>
              <p>MeMate vs Monday </p>
              <p>MeMate vs Trello </p>
              <p>MeMate vs SalesForce </p>
              <p>MeMate vs Airtable </p>
              <p>MeMate vs Wrike </p>
              <p>MeMate vs Servicem8 </p>
              <p>MeMate vs Reckon </p>
              <p>MeMate vs Xero </p>
              <p>MeMate vs ms Project </p>
              <p>MeMate vs Sage </p>
              <p>MeMate vs NetSuite </p>
            </div>
          </div>
        </div>

        <div className="company-link">
          <h3>Legal</h3>
          <div className="page-links">
            <p>Terms And Conditions </p>
            <p>Privacy Policy</p>
            <p>Website Terms of Use </p>
            <p>Security </p>
            <p>Legal </p>
          </div>

          <div className="company-link top-space">
            <h3>Support</h3>
            <div className="page-links">
              <p>Contact us </p>
              <p>Delete Request </p>
              <p>Software Update </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
