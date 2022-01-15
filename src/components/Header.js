import React from "react";
import "./Header.css"
import logo from '../images/darkmode.svg';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <a className="header-title"><span>C</span>ommon <span>S</span>ense <span>C</span>oursebook</a>
        
        <div className="header-right">
          <a onClick="darkMode()">
          <img src={logo} className="App-logo" alt="logo" /></a>
          <a href="#help" className="help-button"><span>Help</span></a>
        </div>

      </div>
    );
  }
}

export default Header;
