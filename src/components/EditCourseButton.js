import React from "react";
import EditCourseWindow from "./EditCourseWindow";

class EditCourseButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  
  onClick(e) {
    e.preventDefault();
    this.props.openWindow(
      <EditCourseWindow 
        course={this.props.course}
        editCourse={this.props.editCourse}
        deleteCourse={this.props.deleteCourse}
        closeWindow={this.props.closeWindow}
      />
    );
  }

  render() {
    return <button className="course-edit-button" onClick={this.onClick}></button>;
  }
};

export default EditCourseButton;