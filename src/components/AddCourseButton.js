import React from "react";
import "./AddCourseButton.css";

class AddCourseButton extends React.Component {
  render() {
    return (
      <div className="course-card course-add-card">
        <button className="course-add-button">
          <div className="plus-sign-container">
            <div className="plus-sign"></div>
          </div>
        </button>
      </div>
    );
  }
};

export default AddCourseButton;