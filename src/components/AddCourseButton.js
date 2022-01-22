import React from "react";
import "./AddCourseButton.css";
import AddCourseWindow from "./AddCourseWindow";

class AddCourseButton extends React.Component {
  onAddClick(e) {
    e.preventDefault();
    this.props.openWindow(
      <AddCourseWindow
        closeWindow={this.props.closeWindow}
        addCourse={this.props.addCourse}
      />
    );
  }

  render() {
    return (
      <div className="course-card course-add-card">
        <button onClick={(e) => this.onAddClick(e)} className="course-add-button">
          <div className="plus-sign-container">
            <div className="plus-sign"></div>
          </div>
        </button>
      </div>
    );
  }
};

export default AddCourseButton;