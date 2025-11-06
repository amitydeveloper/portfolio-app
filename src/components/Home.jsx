import { useState, useEffect } from "react";
import "../styles/Home.css";
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { TbBuilding } from "react-icons/tb";
import resume from "../assets/Amit S.pdf";

const NaukriIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.593 11.08-.105-.94-.2-2.38.04-3.4.22-.94 1.42-5.98 1.42-5.98s-.36-.74-.36-1.82c0-1.71.99-2.99 2.22-2.99 1.05 0 1.56.79 1.56 1.73 0 1.05-.67 2.62-1.02 4.07-.29 1.22.62 2.21 1.84 2.21 2.2 0 3.88-2.32 3.88-5.67 0-2.96-2.13-5.03-5.17-5.03-3.52 0-5.59 2.64-5.59 5.37 0 1.06.41 2.19.92 2.8.1.12.11.22.08.34-.08.37-.26 1.22-.3 1.39-.05.22-.17.27-.39.16-1.46-.68-2.37-2.83-2.37-4.57 0-3.71 2.7-7.12 7.78-7.12 4.08 0 7.25 2.91 7.25 6.8 0 4.05-2.54 7.31-6.07 7.31-1.19 0-2.32-.62-2.7-1.35l-.73 2.81c-.26 1.04-.97 2.35-1.45 3.15C10.22 23.87 11.09 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

function Home() {

  const roles = [
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Python Django Developer"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % roles.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="home" data-aos="fade-up">

      <p className="hello">Hello, I'm</p>
      <h1 className="name">Amit S</h1>

      <h2 className="roles">
        Open to roles like:
        <span className="dynamic-role"> {roles[index]}</span>
      </h2>

      <p className="tagline">
        I design and develop full-stack web and mobile applications that are fast, scalable, and user-friendly.
      </p>
      <p className="tagline">
        You can view my social profiles and can contact me by clciking on below icon.
      </p>

      <a className="btn" href={resume} download>Download Resume</a>

      <div className="social-links">
        <a href="https://www.instagram.com/mr_cool_amitsharma?igsh=MXVub2g2NWY2MXNkbQ==" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://github.com/amitsharmadeveloper" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FaTwitter /></a>
        <a href="https://www.linkedin.com/in/amit-s-7aaa961bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target="_blank" rel="noreferrer"><NaukriIcon /></a> 
        <a href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-jobseeker-profile--profile-one-frontend" target="_blank" rel="noreferrer"><SiIndeed /></a>
        <a href="https://apna.co/profile" target="_blank" rel="noreferrer"><TbBuilding /></a>
      </div>

    </section>
  );
}

export default Home;
