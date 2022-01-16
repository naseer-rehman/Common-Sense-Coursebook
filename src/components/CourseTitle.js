import React from "react";
import "./CourseTitle.css";

const CourseTitle = (props) => {
  return (
    <div className="course-title">
      <span>{props.courseName}</span>
    </div>
  );
};

export default CourseTitle;