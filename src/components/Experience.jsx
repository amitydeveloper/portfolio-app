import React from "react";
import "../styles/Experience.css";
import companyLogo from "../assets/comapny_logo.png";

const Experience = () => {
    return (
        <section className="exp-section" id="experience" data-aos="fade-up">

            <h2 className="exp-title">Experience</h2>

            <div className="exp-card">

                <div className="exp-flex">


                    <div className="exp-left">
                        <p><strong>Job Role:</strong> Software developer intern</p>
                        <p><strong>Job Type:</strong> Internship</p>
                        <p><strong>Location:</strong> Hyderabad</p>
                        <p><strong>Work Mode:</strong> Remote</p>
                        <p><strong>Start Date:</strong> June 2025</p>
                        <p><strong>End Date:</strong> September 2025</p>

                        <p className="exp-desc">
                            <strong>
                                Responsibilities:  
                            </strong>
                                 Worked on developing responsive Webflow pages, improving UI layout,
                                animations, component structure, and cross-device responsiveness.
                                Integrated forms, CMS collections, and reusable components.
                            
                        </p>

                        <p><strong>Tech Stack:</strong>  HTML · CSS · JAVASCRIPT · PYTHON </p>
                        <p><strong> Frame Work:</strong>  DJANGO </p>
                        <p><strong>Tools Used :</strong>  VS CODE · GITBASH · GITHUB </p>
                    </div>

                    <div className="exp-right">
                        <img src={companyLogo} alt="Company Logo" className="exp-logo" />
                        <h4 className="company-name">Techciti Technology Pvt Ltd</h4>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Experience;
