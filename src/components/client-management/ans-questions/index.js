import React, { useState } from "react";
import "./style.css";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import Images from "../../../assests/images";
const QuestionAnswer = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(3);

  const questions = [
    {
      question: "What features does memate offer as a Sales Management Software?",
      key: 1,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
    {
      question: "How does memate enhance efficiency with its Sales Pipeline Management Tool?",
      key: 2,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
    {
      question: "What advantages does memate’s CRM Sales Tool offer for Small Businesses?",
      key: 3,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
    {
      question: "Can memate be used for Sales Tracking in various industries?",
      key: 4,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
    {
      question: "What makes memate a reliable Lead Management Solution?",
      key: 5,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
    {
      question: "How  memate optimise business operations with its Sales Process Optimisation Software?",
      key: 6,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
    {
      question: "What is unique about memate’s Pipeline Management Software?",
      key: 7,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
    {
      question: "How can memate’s Sales Funnel for Small Business help in growth?",
      key: 8,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
    {
      question: "What features does memate include in its Sales Pipeline Software?",
      key: 9,
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
    },
    {
      question: "Why choose memate for Lead Management Software?",
      answer:
        "Yes, our CRM system includes features specifically designed to manage prospective clients. It helps you track leads, nurture prospects, and convert them into loyal customers.",
      key: 10,
    },
  ];

  return (
    <div className="question-answer-wrapper" >
      <div className="question-answer-content">
        <div className="question-answer-heading-wrapper" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="6000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
          <p className="question-answer-heading">We answer your questions</p>
        </div>
        <div className="questions-wrapper" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="6500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
          {questions.map((ques, index) => (
            <div className="each-ques-wrapper">
              <div
                key={index}
                className={`question-answer-ques ${selectedQuestion === ques.key ? "selected" : ""}`}
                onClick={() => setSelectedQuestion(selectedQuestion === ques.key ? null : ques.key)}
              >
                <p className="question-answer-ques-info">{ques.question}</p>
                <Box
                  className="add-icon-wrapper"
                  sx={{
                    height: "24px",
                    width: "24px",
                    color:
                      selectedQuestion === index ? "linear-gradient(to right, #1AB2FF 33.15%, #FFB258 62%)" : "#000",
                  }}
                >
                  <div className="plus-icon-image-wrapper">
                    {selectedQuestion === ques.key ? (
                      <img
                        src={Images.selectedQuestion}
                        className="icon"
                        alt="Selected Question"
                        style={{ height: "100px" }}
                      />
                    ) : (
                      <AddIcon className="icon" htmlColor="#000000" />
                    )}
                  </div>
                </Box>
              </div>
              {selectedQuestion === ques.key ? <div className="question-answer-ans-info">{ques?.answer}</div> : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswer;
