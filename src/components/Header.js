import React from "react";
import "./Header.css"
// import lightmode from "../images/lightmode.svg";
import DarkMode from "./DarkMode.js";


class Header extends React.Component {



  render() {

    return (
      /*<div className="header">
        <div className="header-left">
          <a className="header-title"><span>C</span>ommon <span>S</span>ense <span>C</span>oursebook</a>
        </div>

        <div className="header-right">
          <DarkMode />
          <a href="#help" className="help-button"><span>Help</span></a>
        </div>

      </div>*/

      <div className="main">
        <div className="left">
          <a className="header-title"><span>C</span>ommon <span>S</span>ense <span>C</span>oursebook</a>
        </div>

        <div className="right">
          <div className="main space-between">
            <div>
              <DarkMode />
              <button class="help">Help</button>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Header;
