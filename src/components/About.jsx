import "../styles/About.css";
import myPhoto from "../assets/my_picture.png";  

function About() {
    return (
        <section id="about" className="about" data-aos="fade-up">
            <div className="about-content">

                <div className="about-text">
                    <h2>About Me</h2>
                    <p>
                       Detail-oriented Master of Computer Applications (MCA) graduate with a strong foundation in programming languages, proficient in HTML, CSS, JavaScript, Python and java. Having 3-months of internship experience as a Django Full Stack Developer, gaining hands-on experience in building web applications, database management, and debugging. Eager to apply problem-solving skills and technical knowledge to contribute to innovative projects and pursue continuous learning in a dynamic team environment.
                    </p>
                </div>

                <div className="about-image">
                    <img src={myPhoto} alt="Amit" />
                </div>

            </div> 
        </section>
    );
}

export default About;
