import React from "react";
import "./ThemeButton.css";

const LIGHT_THEME = "light";
const DARK_THEME = "dark";

const onChangeTheme = (theme, changeThemeFunc) => {
  changeThemeFunc(theme === DARK_THEME ? LIGHT_THEME : DARK_THEME);
};

const ThemeButton = (props) => {
  const body = document.body;

  if (props.theme === LIGHT_THEME || props.theme === DARK_THEME) {
    body.classList.add(props.theme === DARK_THEME ? DARK_THEME : LIGHT_THEME);
    body.classList.remove(props.theme === DARK_THEME ? LIGHT_THEME : DARK_THEME);
  } else {
    console.error("Unknown theme set");
  }

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
  