import React from "react";
import "./style.css";
import Images from "../../assests/images";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="main-footer">
        <div className="socail-media-sec">
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
              <Link to="/software-update"><p>Software Update </p></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
