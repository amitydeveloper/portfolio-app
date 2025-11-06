import React, { useState } from "react";
import "../styles/Education.css";

const educationData = [
  {
    title: "MCA (Master of Computer Applications)",
    institution: "BMS College of Engineering",
    duration: "2023 – 2025",
    details: [
      "Studied Web development, Advanced Web development, Database Management Systems, Python, Java, Devops.",
      "secured an aggregate of 7.8 CGPA.",
      "Project Team Leader and Member during 2nd Semester.",
    ]
  },
  {
    title: "BCA (Bachelor of Computer Applications)",
    institution: "Sharnbasva University College",
    duration: "2021 – 2023",
    details: [
      "Studied HTML, CSS, JavaScript, Python & Java.",
      "Secured an aggregate of 9.02 CGPA.",
      "Project Team Leader during 5th Semester.",
      "Secured first rank among male students in the BCA program and ranked 11th overall in the college."
    ]
  },
  {
    title: "Class 12th (PUC)",
    institution: "Disha PU College",
    duration: "2018 – 2020",
    details: [
      "Subjects studied: Physics, Chemistry, Maths, English, Statistics , Hindi.",
      "Scored 78.6%."
    ]
  },
  {
    title: "SSLC / Class 10",
    institution: "Mother Teresa English Medium School",
    duration: "2017 – 2018",
    details: [
      "Subjects studied: Science, Maths, English, Social Studies, Kannada, Hindi.",
      "Scored 63.2%"
    ]
  }
];

const Education = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section className="edu-section" id="education" data-aos="fade-up">
      <h2 className="edu-title">Education</h2>

      <div className="timeline-container">
        {educationData.map((edu, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{edu.title}</h3>
              <p className="inst">{edu.institution}</p>
              <p className="year">{edu.duration}</p>
              <button onClick={() => setActiveModal(index)} className="view-more-btn">
                View More →
              </button>
            </div>
          </div>
        ))}
      </div>

      {activeModal !== null && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">{educationData[activeModal].title}</h3>
            <ul>
              {educationData[activeModal].details.map((d, i) => (
                <li key={i}> {d}</li>
              ))}
            </ul>
            <button className="close-btn" onClick={() => setActiveModal(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;
