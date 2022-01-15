import React from "react";
import "./AddYearButton.css";
import plusSign from "../images/plus-sign.svg";

class AddYearButton extends React.Component {
  render() {
    return (
      <div className="year-container">
        <div className="year-title-container">
          <button className="year-button-dash add-year-button">
            <span></span>
            <div className="plus-sign-container">
              <div className="plus-sign"></div>
            </div>
          </button>
        </div>
      </div>
    );
  }
};

export default AddYearButton;
