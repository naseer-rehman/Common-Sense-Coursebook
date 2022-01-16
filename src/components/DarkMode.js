import React from "react";
import "./DarkMode.css";
// import darkImage from "../images/darkmode.svg"

const DarkMode = () => {
    const clickedClass = "clicked";
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;
  
    if (localStorage) {
      theme = localStorage.getItem("theme");
    }
  
    if (theme === lightTheme || theme === darkTheme) {
      body.classList.add(theme);
    } else {
      body.classList.add(lightTheme);
    }
  
    const switchTheme = (e) => {
      const button = document.querySelector("#darkMode");
      if (theme === darkTheme) {
        body.classList.replace(darkTheme, lightTheme);
        button.classList.remove(clickedClass);
        localStorage.setItem("theme", "light");
        theme = lightTheme;
      } else {
        body.classList.replace(lightTheme, darkTheme);
        button.classList.add(clickedClass);
        localStorage.setItem("theme", "dark");
        theme = darkTheme;
      }
    };
  
    return (
      <button className="theme-button" id="darkMode" onClick={(e) => switchTheme(e)}>
        <div className="theme-button-logo"></div>
      </button>
    );
  };
  
  export default DarkMode;
  