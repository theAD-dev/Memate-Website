import React, { useState, useEffect } from 'react';
import style from './supplier-module.module.scss';
import "./style.css";
import { Link } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FilterIcon = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/search-filter.svg";
const LogoFilter = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo-filter.svg";
const googlemap = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/googlemap.svg";
const GlobIcon = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/glob-icon.svg";


const DataBase = ({ supplier = [], search, loading, totalSupplier, onNext, searchTerm, setSearchTerm, activeLetter, setActiveLetter }) => {
  console.log('totalSupplier: ', totalSupplier);
  const [expandedPanel, setExpandedPanel] = useState(false);

  
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : false);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div className={style.searchfilterBox} data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <div className={style.searchIcon}>
          <img src={FilterIcon} alt='filter Icon' />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search"
            aria-label="Search suppliers"
          />
        </div>
      </div>

      <div className={style.alphabetbox} style={{ marginBottom: "10px" }} data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <span className={style.spanDisplay}>Display</span>
        <div className={style.allButFilter}>
          <button className={style.active} onClick={()=> setActiveLetter("")}>All</button>
          <button disabled>#</button>
        </div>
        {alphabet.map((letter) => (
          <button
            onClick={() => setActiveLetter(letter)}
            key={letter}
            style={{
              marginRight: "5px",
              backgroundColor: activeLetter === letter ? "lightblue" : "white"
            }}
          >
            {letter}
          </button>
        ))}
      </div>

      <ul className={style.alphabetFilter}>
        {supplier.length > 0 ? (
          supplier.map((item, index) => (
            <li key={index} data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="50"
            data-aos-duration="2500"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom">
              <Accordion className={style.alphabetlist}
                expanded={expandedPanel === index}
                onChange={handleAccordionChange(index)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`} className={style.itemDatawrap}
                  id={`panel${index}-header`}
                >
                  <Typography className={style.itemDatalist}>
                    <div className={style.left}>
                      {item.upload_file && <img src={`${item.upload_url}`} alt={`${item.label} logo`} />}
                      {item.legal_name}
                    </div>
                    <div className={style.right}>
                      {item.abn && <div className={style.roundBx}>ABN: {item.abn}</div>}
                      <div className={style.roundimg}> <Link to={item.website} target='_blank'><img src={GlobIcon} alt={`${GlobIcon} icon`} /></Link></div>
                      <div className={style.roundimg}><Link to={`http://maps.google.com/?q=${item.business_location}`} target='_blank'><img src={googlemap} alt={`${googlemap} icon`} /></Link></div>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={style.accInnercontent}>
                  <div className={style.accInnerhead}>

                    <p>{item.industry}</p>
                    <ul>
                      {item.supplied_services?.split(',').map((service, idx) => (
                        <li key={idx}>{service.trim()}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={style.accInneradd}>
                    <ul>
                      <li><Link to={`http://maps.google.com/?q=${item.business_location}`} target="_blank">{item.business_location}</Link></li>
                      <li><Link to={`mailto:${item.email}`}>{item.email}</Link></li>
                      <li><Link to={item.website} target="_blank">{item.website}</Link></li>
                    </ul>
                    <Link to={`/data-single/${item.slug}`} className={style.detailsSupplyersbut}>View Details</Link>
                  </div>
                </AccordionDetails>
              </Accordion>
            </li>
          ))
        ) : (
          <p>No suppliers found</p>
        )}
      </ul>

      {totalSupplier > supplier?.length && (
        <button onClick={onNext} className={style.loadmoreSupplyersbut}>
          {loading ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
};

export default DataBase;
