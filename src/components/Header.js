import React from "react";
import "./Header.css"
// import lightmode from "../images/lightmode.svg";
import DarkMode from "./DarkMode.js";


class Header extends React.Component {



  render() {

    return (
      <div className="header">
        <div className="header-left">
          <span className="header-title"><span>C</span>ommon <span>S</span>ense <span>C</span>oursebook</span>
        </div>

        <div className="header-right">
          <DarkMode />
          <button className="help-button">Help</button>
        </div>
      </div>

    );
  }
}

export default Header;
