import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./style.css";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import Images from "../../../assests/images";

const QuestionAnswer = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(1);

  const questions = [
    {
      question: "What is meMate’s job scheduling feature, and why do I need it?",
      key: 1,
      answer:
        "meMate’s job scheduling feature allows businesses to organize, assign, and track tasks or shifts for employees and contractors. It simplifies the process of managing schedules, improves communication, and ensures that all jobs are completed on time.",
    },
    {
      question: "How does meMate help manage shifts for employees?",
      key: 2,
      answer:
        "With meMate, you can easily schedule shifts for part-time and full-time employees, track their availability, and handle time-off requests. The system helps avoid scheduling conflicts and ensures every shift is covered.",
    },
    {
      question: "Can I manage contractors with meMate’s job scheduling?",
      key: 3,
      answer:
        "Yes, meMate enables you to assign jobs to contractors, track their performance, and process their invoices—all within the platform. It provides a seamless way to manage contractors alongside your internal team.",
    },
    {
      question: "How does meMate track time for employees and contractors?",
      key: 4,
      answer:
        "meMate automatically tracks time for employees and contractors through its built-in time tracking feature. It generates timesheets based on logged hours, making approvals and payroll processing easy.",
    },
    {
      question: "Is meMate suitable for businesses with multiple locations?",
      key: 5,
      answer:
        "Absolutely. meMate supports multi-location management, allowing you to schedule jobs, track shifts, and manage employees across multiple locations from one unified platform.",
    },
    {
      question: "Can I communicate with my team through meMate’s job scheduling feature?",
      key: 6,
      answer:
        "Yes, meMate includes communication tools that allow you to update employees and contractors, assign jobs, and share shift details through the platform or mobile app, ensuring everyone stays on the same page.",
    },
    {
      question: "Does meMate integrate with payroll systems?",
      key: 7,
      answer:
        "Yes, meMate integrates time tracking with payroll, automatically converting logged hours into timesheets for easy approval and processing. This ensures accuracy in payments and reduces manual work.",
    },
    {
      question: "Can meMate handle shift changes and time-off requests?",
      key: 8,
      answer:
        "Yes, meMate allows employees to request time off or swap shifts, with approval options for managers. The system keeps track of all scheduling changes, so nothing gets lost in the process.",
    },
    {
      question: " How does meMate improve transparency and accountability?",
      key: 9,
      answer:
        "meMate provides a clear overview of each team member’s availability, shifts, and assigned jobs. You can track their progress and performance, ensuring transparency and accountability at all times.",
    },
    {
      question: " Is meMate accessible via mobile devices?",
      answer:
        "Yes, meMate offers a mobile app that allows managers to schedule shifts, assign tasks, and communicate with team members on the go. Employees and contractors can also view their schedules and log their time from their mobile devices.",
      key: 10,
    },
  ];

  const toggleQuestion = (key) => {
    setSelectedQuestion(selectedQuestion === key ? null : key);
  };

  // Generate FAQ Schema dynamically
  const generateFAQSchema = () => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": questions.map((ques) => ({
        "@type": "Question",
        "name": ques.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": ques.answer,
        },
      })),
    };
    return JSON.stringify(schema);
  };

  return (
    <div className="question-answer-wrapper">
      {/* Inject JSON-LD Schema into the <head> */}
      <Helmet>
        <script type="application/ld+json">{generateFAQSchema()}</script>
      </Helmet>

      <div className="question-answer-content">
        <div className="question-answer-heading-wrapper">
          <p className="question-answer-heading">We answer your questions</p>
        </div>
        <div className="questions-wrapper">
          {questions.map((ques) => (
            <div key={ques.key} className="each-ques-wrapper">
              <div
                className={`question-answer-ques ${
                  selectedQuestion === ques.key ? "selected" : ""
                }`}
                onClick={() => toggleQuestion(ques.key)}
              >
                <p className="question-answer-ques-info">{ques.question}</p>
                <Box
                  className="add-icon-wrapper"
                  sx={{
                    height: "24px",
                    width: "24px",
                    transform:
                      selectedQuestion === ques.key
                        ? "rotate(45deg)"
                        : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <div className="plus-icon-image-wrapper">
                    {selectedQuestion === ques.key ? (
                      <img
                        src={Images.selectedQuestion}
                        className="icon"
                        alt="Selected Question"
                        style={{ height: "24px" }}
                      />
                    ) : (
                      <AddIcon className="icon" htmlColor="#000000" />
                    )}
                  </div>
                </Box>
              </div>
              <div
                className={`question-answer-ans-info ${
                  selectedQuestion === ques.key ? "expanded" : ""
                }`}
              >
                {selectedQuestion === ques.key && <p>{ques.answer}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswer;
