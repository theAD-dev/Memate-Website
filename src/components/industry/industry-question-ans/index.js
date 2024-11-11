import React, { useState } from "react";
import "./style.css";
import IndustryImages from "../../../assests/industry-images";
const IndustyQuesitonAndAns = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(2);
  const questions = [
    {
      question: "Is MeMate specifically designed for creative agencies?",
      key: 0,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
    {
      question: "How can MeMate benefit my creative agency?",
      key: 1,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
    {
      question:
        "Can MeMate handle the unique requirements of marketing and advertising agencies?",
      key: 2,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
    {
      question:
        "How does MeMate simplify project management for creative agencies?",
      key: 3,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
    {
      question:
        "Can MeMate assist in financial management for creative agencies?",
      key: 4,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
    {
      question: "How does MeMate help with client communication?",
      key: 5,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
    {
      question:
        "Is MeMate suitable for both small and large creative agencies?",
      key: 6,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
    {
      question: "Does MeMate offer creative workflow solutions?",
      key: 7,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
    {
      question:
        "Is MeMate compatible with other tools or software commonly used by creative agencies?",
      key: 8,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
    {
      question: "How can I learn more about MeMate and its features?",
      key: 9,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
  ];
  return (
    <div className="industry-question-ans-wrapper" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="4000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="industry-ques-container">
        <p className="industry-question-heading">We answer your questions</p>
        <div className="industry-question-wrapper">
          {questions?.map((ques) => {
            return (
              <div className="question-industry-ans-wrapper" onClick={()=>{setSelectedQuestion(ques.key)}} style={{cursor:"pointer"}}>
                <div className="question-wrapper">
                  <p className={selectedQuestion ===ques.key ? "question-detial-selected":"question-detail"}>{ques.question}</p>
                  <img src={IndustryImages.PlusIcon} style={{height:"17.5px",marginTop:"8px"}}/>
                </div>
               {selectedQuestion ===ques.key &&  <p className="question-answer-industry">{ques.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IndustyQuesitonAndAns;
