import React, { useEffect, useState } from "react";
import './navigationBar.css';

const navItems = [
  { id: "home", label: "Home" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

function NavigationBar() {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    let frameId = null;

    const getTarget = (id) => (
      document.querySelector(`[data-nav-target="${id}"]`) ||
      document.getElementById(id)
    );

    const updateActiveTabNow = () => {
      const anchorY = window.scrollY + window.innerHeight * 0.32;
      let current = "home";

      navItems.forEach(({ id }) => {
        const element = getTarget(id);
        if (element && element.offsetTop <= anchorY) {
          current = id;
        }
      });

      setActiveTab(current);
    };

    const updateActiveTab = () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      frameId = window.requestAnimationFrame(() => {
        updateActiveTabNow();
        frameId = null;
      });
    };

    updateActiveTabNow();
    window.addEventListener("scroll", updateActiveTab, { passive: true });
    window.addEventListener("resize", updateActiveTab);
    window.addEventListener("hashchange", updateActiveTab);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", updateActiveTab);
      window.removeEventListener("resize", updateActiveTab);
      window.removeEventListener("hashchange", updateActiveTab);
    };
  }, []);

  const handleClick = (event, tab) => {
    event.preventDefault();
    setActiveTab(tab);
    const element = document.querySelector(`[data-nav-target="${tab}"]`) || document.getElementById(tab);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="NavBar" aria-label="Portfolio navigation">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={activeTab === item.id ? "active" : ""}
          onClick={(event) => handleClick(event, item.id)}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export default NavigationBar;
