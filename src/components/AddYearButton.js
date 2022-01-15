import React from "react";
import "./AddYearButton.css";
import AddYearWindow from "./AddYearWindow";

class AddYearButton extends React.Component {
  onClick(e) {
    e.preventDefault();
    this.props.openWindow(
      <AddYearWindow
        closeWindow={() => this.props.closeWindow()}
        addYear={(yearName) => this.props.addYear(yearName)}
      />
    );
  }

  render() {
    return (
      <div className="year-container">
        <div className="year-title-container">
          <button 
            onClick={(e) => this.onClick(e)}
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
