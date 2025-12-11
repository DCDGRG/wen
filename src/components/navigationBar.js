import React, { useEffect, useRef, useState } from "react";
import './navigationBar.css';

function NavigationBar() {
  const [activeTab, setActiveTab] = useState("home");
  const navRef = useRef(null);

  const handleClick = (tab) => {
    setActiveTab(tab);
    const element = document.getElementById(tab);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <div className="NavBar" ref={navRef}>
        <a 
          href="#home" 
          className={activeTab === "home" ? "active" : ""} 
          onClick={() => handleClick("home")}
        >
          Home
        </a>

        <a 
          href="#education" 
          className={activeTab === "education" ? "active" : ""} 
          onClick={() => handleClick("education")}
        >
          Education
        </a>

        <a 
          href="#projects" 
          className={activeTab === "projects" ? "active" : ""}
          onClick={() => handleClick("projects")}
        >
          Projects
        </a>
        
        <a 
          href="#skills" 
          className={activeTab === "skills" ? "active" : ""}
          onClick={() => handleClick("skills")}
        >
          Skills
        </a>
        <a 
          href="#contact" 
          className={activeTab === "contact" ? "active" : ""}
          onClick={() => handleClick("contact")}
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default NavigationBar;