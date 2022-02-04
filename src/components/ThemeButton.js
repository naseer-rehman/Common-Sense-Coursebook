import React from "react";
import "./ThemeButton.css";

const LIGHT_THEME = "light";
const DARK_THEME = "dark";

const onChangeTheme = (theme, changeThemeFunc) => {
  changeThemeFunc(theme === DARK_THEME ? LIGHT_THEME : DARK_THEME);
};

const ThemeButton = (props) => {
  const body = document.body;
  const clickedClass = "clicked";

  if (props.theme === LIGHT_THEME || props.theme === DARK_THEME) {
    body.classList.add(props.theme === DARK_THEME ? DARK_THEME : LIGHT_THEME);
    body.classList.remove(props.theme === DARK_THEME ? LIGHT_THEME : DARK_THEME);
  } else {
    console.error("Unknown theme set");
  }

  // const switchTheme = (e) => {
  //   const button = document.querySelector("#themeButton");
  //   if (theme === DARK_THEME) {
  //     body.classList.replace(DARK_THEME, LIGHT_THEME);
  //     button.classList.remove(clickedClass);
  //     userData.saveTheme("light");
  //     theme = LIGHT_THEME;
  //   } else {
  //     body.classList.replace(LIGHT_THEME, DARK_THEME);
  //     button.classList.add(clickedClass);
  //     userData.saveTheme("dark");
  //     theme = DARK_THEME;
  //   }
  // };

  return (
    <button 
      className="theme-button" 
      id="themeButton" 
      onClick={() => onChangeTheme(props.theme, props.changeTheme)}
    >
      <div className="theme-button-logo"></div>
    </button>
  );
};
  
export default ThemeButton;
  