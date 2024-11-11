import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const SuitableTender = () => {
  return (
    <div className="suitable-tender-wrapper marginSpaceTop" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="3500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapper">
        <p className="sale-title">Agile</p>
        <p className="sales-heading-sales">Task Allocation &</p>
        <p className="sales-type">Team Collaboration</p>
        <p className="sales-description-sales">
        The platform allows you to allocate tasks directly <br></br>from the project to each of your team members<br></br> via the mobile application.
         Team members can <br></br>add notes and discuss the project in group chats,<br></br> ensuring smooth collaboration.
        </p>
      </div>
      <div className="suitable-table-image-wrapper">
      <img src={Images.employeeAgile} />
     
      </div>
    </div>
  );
};

export default SuitableTender;
