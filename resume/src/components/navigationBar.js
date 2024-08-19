import React, { useState } from "react";
import './navigationBar.css';

function NavigationBar() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="App">
      <div className="NavBar">
        <a 
          href="#home" 
          className={activeTab === "home" ? "active" : ""} 
          onClick={() => setActiveTab("home")}
        >
          Home
        </a>
        <a 
          href="#education" 
          className={activeTab === "education" ? "active" : ""} 
          onClick={() => setActiveTab("education")}
        >
          Education
        </a>
        <a 
          href="#projects" 
          className={activeTab === "projects" ? "active" : ""} 
          onClick={() => setActiveTab("projects")}
        >
          Projects
        </a>
        <a 
          href="#skills" 
          className={activeTab === "skills" ? "active" : ""} 
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </a>
        <a 
          href="#contact" 
          className={activeTab === "contact" ? "active" : ""} 
          onClick={() => setActiveTab("contact")}
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default NavigationBar;