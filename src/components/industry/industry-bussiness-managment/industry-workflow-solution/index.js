import React from "react";
import style from './workflow.module.scss';
import { Link } from "react-router-dom";
const IndustryWorkFlowSolution = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.flexboxWrapstyle} ${style.bgContentWrap} ${style.sectionTopSpace}`}>
<div className={`${style.spacingLeft} ${style.flexContentWrap}`}>
<h4>Unique</h4>
<h3>Creative</h3>
<h2>Workflow Solutions</h2>
    <p>Create simple workflows and custom calculators based on different hourly rates, equipment costs, and more. Easily build complete packages with 
      customizable options, ensuring a clean workflow while avoiding undercharging or missing important service elements.</p>
      <Link to="/calendar">Calendar</Link>
      
</div>
<div className={style.flexImageBox}>
  <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/unique-main-img.svg" alt="unique-main"/>
</div>
</div>
</> 
  );
};

export default IndustryWorkFlowSolution;

