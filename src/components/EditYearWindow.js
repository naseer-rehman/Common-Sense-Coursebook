import React, { Component } from "react";
import "./EditYearWindow.css";
import Window from "./Window";

class EditYearWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newYearName: "",
    };
  }

  onInputChange(e) {
    e.preventDefault();
    const value = e.target.value;
    this.setState((state) => {
      return {
        ...state,
        newYearName: value,
      };
    });
  }

  onDelete() {
    this.props.deleteYear();
    this.props.closeWindow();
  }

  onFinish() {
    this.props.editYearName(this.state.newYearName);
    this.props.closeWindow();
  }
  
  onCancel() {
    this.props.closeWindow();
  }

  render() {
    return (
      <Window>
        <div className="window-scrollable">
          <div className="center-content">
            <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
              <label htmlFor="editYearNameInput">Edit Name:</label>
              <input onChange={(e) => this.onInputChange(e)} type="text" id="editYearNameInput" />
            </form>
          </div>
        </div>
        <div className="window-footer">
          <div className="edit-year-buttons window-footer-button-container">
            <div className="left-half">
              <button onClick={() => this.onDelete()} className="delete-button">
                <div className="trash-sign"></div>
              </button>
              <button onClick={() => this.onCancel()} className="cancel-button">Cancel</button>
            </div>
            <div className="right-half">
              <button onClick={() => this.onFinish()} className="finish-button">Finish</button>
            </div>
          </div>
        </div>
      </Window>
    );
  }
};

export default EditYearWindow;