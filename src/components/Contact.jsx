import "../styles/Contact.css";
import emailjs from "emailjs-com";
import { useState } from "react";


import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [msg, setMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_z0b2kb4",   
      "template_29emasv",  
      e.target,
      "kQzSqavPnCWAJ2Vfw"    
    ).then(() => {
      setMsg("Message sent successfully!");
      e.target.reset();
    }, () => {
      setMsg("Failed to send. Try again.");
    });
  };

  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-sub">Get in touch</p>

      <div className="contact-container">

        <div className="contact-left">
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <div>
              <h4>Contact Me</h4>
              <p>7411171397</p>
            </div>
          </div>

          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <h4>Email</h4>
              <p>amityk45@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h4>Location</h4>
              <p>Bengaluru, Karnataka, India</p>
            </div>
          </div>
        </div>

  
        <form onSubmit={sendEmail} className="contact-form">

          <input type="hidden" name="to_email" value="amityk45@gmail.com" />

          <input type="text" name="sender_name" placeholder="Name" required />
          <input type="email" name="sender_email" placeholder="Email" required />
          <input type="text" name="sender_role" placeholder="Designation" required />
          <input type="number" name="sender_phone" placeholder="Phone Number" required />

          <input type="text" name="subject" placeholder="Subject" required />

          <textarea name="message" placeholder="Message" rows="5" required />

          <button type="submit" className="send-btn">Send Message</button>
          <p className="status">{msg}</p>

        </form>

      </div>
    </section>
  );
}

export default Contact;
