import { Link } from "react-scroll";
import "../styles/Navbar.css";
import profilelogo from "../assets/profile_picture.jpg";
function Navbar() {
    return (
        <div className="sidebar">
            <div className="profile">
                <img src={profilelogo} alt="profile" />
                <h2>Amit S</h2>
            </div>

            <ul className="menu">
                <li><Link to="home" smooth duration={500} spy>Home</Link></li>
                <li><Link to="about" smooth duration={500} spy>About</Link></li>
                <li><Link to="skills" smooth duration={500} spy>Skills</Link></li>
                <li><Link to="education" smooth duration={500} spy>Education</Link></li>
                <li><Link to="experience" smooth duration={500} spy>Experience</Link></li>
                <li><Link to="introvideo" smooth duration={500} spy>IntroVideo</Link></li>
                <li><Link to="contact" smooth duration={500} spy>Contact</Link></li>
            </ul>
        </div>
    );
} 

export default Navbar;
