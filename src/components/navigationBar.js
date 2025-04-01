import React, { useEffect, useRef, useState } from "react";
import './navigationBar.css';

function NavigationBar() {

  const [activeTab, setActiveTab] = useState("home");
  const [sliderStyle, setSliderStyle] = useState({});
  const navRef = useRef(null);

  const handleClick = (tab, event) => {
    setActiveTab(tab);

    const navItem = event.target;
    setSliderStyle({
      left: navItem.offsetLeft + "px",
      width: navItem.offsetWidth + "px"
    });
  };

  // useEffect(() => {
  //   const activeElement = navRef.current.querySelector(".active");
  //   if (activeElement) {
  //     setSliderStyle({
  //       left: activeElement.offsetLeft + "px",
  //       width: activeElement.offsetWidth + "px"
  //     });
  //   }
  // }, []);

  useEffect(() => {
    if (navRef.current) {
      const activeElement = navRef.current.querySelector(".active");
      if (activeElement) {
        setSliderStyle({
          left: activeElement.offsetLeft + "px",
          width: activeElement.offsetWidth + "px"
        });
      }
    }
  }, [activeTab]);    //// 依赖 activeTab, 每次 activeTab 变化时重新设置滑块样式


  return (
    <div className="App">
      <div className="NavBar" ref={navRef}>
        <a 
          href="#home" 
          className={activeTab === "home" ? "active" : ""} 
          onClick={(event) => handleClick("home", event)}
        >
          Home
        </a>

        <a 
          href="#education" 
          className={activeTab === "education" ? "active" : ""} 
          onClick={(event) => handleClick("education", event)}
        >
          Education
        </a>

        <a 
          href="#projects" 
          className={activeTab === "projects" ? "active" : ""}
          onClick={(event) => handleClick("projects", event)}
          
        >
          Projects
        </a>
        
        <a 
          href="#skills" 
          className={activeTab === "skills" ? "active" : ""}
          onClick={(event) => handleClick("skills", event)}
         
        >
          Skills
        </a>
        <a 
          href="#contact" 
          className={activeTab === "contact" ? "active" : ""}
          onClick={(event) => handleClick("contact", event)}
        >
          Contact
        </a>

        <div className="Slider" style={sliderStyle}></div>  {/* 滑块 */}

      </div>
    </div>
  );
}

export default NavigationBar;