import React from "react";
import "./AddYearButton.css";

class AddYearButton extends React.Component {
  onClick(e) {
    e.preventDefault();
    console.log("Opening window for new year entry");
  }

  render() {
    return (
      <div className="year-container">
        <div className="year-title-container">
          <button 
            onClick={this.onClick}
            className="year-button-dash add-year-button"
          >
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
