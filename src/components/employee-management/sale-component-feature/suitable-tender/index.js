import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const SuitableTender = () => {
  return (
    <div className="sales-management-wrapper-dataF" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="3500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapperF">
        <p className="sale-titleF">Agile</p>
        <p className="sales-heading-salesF">Task Allocation &</p>
        <p className="sales-typeF">Team Collaboration</p>
        <p className="sales-description-salesF">
        The platform allows you to allocate tasks directly <br></br>from the project to each of your team members<br></br> via the mobile application.
         Team members can <br></br>add notes and discuss the project in group chats,<br></br> ensuring smooth collaboration.
        </p>
      </div>
      <div className="sales-imageF">
      <img src={Images.employeeAgile} type="image/svg+xml" />
      </div>
    </div>
  );
};

export default SuitableTender;
