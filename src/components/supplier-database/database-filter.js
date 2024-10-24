import React, { useState } from 'react';
import style from './supplier-module.module.scss';
import "./style.css";
import { Link } from "react-router-dom";
import FilterIcon from "../../assests/icons/search-filter.svg";
import LogoFilter from "../../assests/icons/logo-filter.svg";
import googlemap from "../../assests/icons/googlemap.svg";
import GlobIcon from "../../assests/icons/glob-icon.svg";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const data = [
  {
    label: "EnergyAustralia",
    logo: LogoFilter,
    ABN: "226365507",
    icon: GlobIcon,
    map: googlemap,
  },
  {
    label: "Camerafix",
    logo: LogoFilter,
    ABN: "226365507",
    icon: GlobIcon,
    map: googlemap,
  },
];


const DataBase = () => {
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeLetter, setActiveLetter] = useState("");
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
      <div className={style.searchfilterBox}>
        <div className={style.searchIcon}>
          <img src={FilterIcon} alt='filter Icon' />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search"
          />
        </div>
      </div>

      <div className={style.alphabetbox} style={{ marginBottom: "10px" }}>
        <span className={style.spanDisplay}>Display</span>
        <div className={style.allButFilter}>
          <button className={style.active}>All</button>
          <button>#</button>
        </div>
        {alphabet.map((letter) => (
          <button
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
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <li key={index}>
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
                      {item.logo && <img src={item.logo} alt={`${item.label} logo`} />}
                      {item.label}
                    </div>
                    <div className={style.right}>
                      {item.ABN && <div className={style.roundBx}>ABN: {item.ABN}</div>}
                      {item.icon && <div className={style.roundimg}><img src={item.icon} alt={`${item.label} icon`} /></div>}
                      {item.map && <div className={style.roundimg}><img src={item.map} alt={`${item.label} icon`} /></div>}
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={style.accInnercontent}>
                  <div className={style.accInnerhead}>
                    <p>Supplied Services</p>
                    <ul>
                      <li>Content Creation</li>
                      <li>Social Media Management</li>
                      <li>Graphic Design</li>
                    </ul>
                  </div>
                  <div className={style.accInneradd}>
                    <ul>
                      <li>  45CW+9P Ultimo, New South Wales, Australia	</li>
                      <li>	info@camerafix.com.au</li>
                      <li>	https://www.camerafix.com.au/</li>
                    </ul>
                    <Link to='/data-single' className={style.detailsSupplyersbut}>View Details</Link>
                  </div>
                </AccordionDetails>
              </Accordion>
            </li>
          ))
        ) : (
          <li>No results found.</li>
        )}
      </ul>
      <button className={style.loadmoreSupplyersbut}>Load More</button>
    </div>
  );
};

export default DataBase;
