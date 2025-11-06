import React, { useState } from "react";
import "../styles/IntroVideo.css";

const IntroVideo = () => {
  const [play, setPlay] = useState(false);

  return (
    <section className="video-section" id="introvideo" data-aos="fade-up">
      <h2 className="video-title">Intro Video</h2>
      <h2>Hello viewers i have shared the short video on introduction about myself</h2>
      <h2>To play the introduction video click on below the icon</h2>

      <div className="video-box">
        
        {!play && (
          <div className="play-overlay" onClick={() => setPlay(true)}>
            <span className="play-icon">▶</span>
          </div>
        )}

        <video
          className={`intro-video ${play ? "show-video" : "hide-video"}`}
          controls={play}
          src="/videos/amits_introvideo.mp4"
        />
      </div>
    </section>
  );
};

export default IntroVideo;
