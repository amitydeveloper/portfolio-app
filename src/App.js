import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar"; 
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
/*import Projects from "./components/Projects";*/
import Contact from "./components/Contact";
import Education from "./components/Education";  
import Experience from "./components/Experience"; 
/*import Resume from "./components/Resume";  */  
import IntroVideo from "./components/IntroVideo"; 

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="app-container">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <div className="content">
          <Home />
          <About />
          <Skills />
          <Education />  
          <Experience />
        {/*<Projects />*/}
         {/*<Resume /> */}
          <IntroVideo />  
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
 