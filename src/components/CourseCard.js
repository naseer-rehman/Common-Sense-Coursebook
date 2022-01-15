import React from "react";
import "./CourseCard.css";

const CourseInfoRow = ({name, value}) => {
  return (
    <>
      <div className="row-left"><span>{name}</span></div>
      <div className="row-right"><span>{value}</span></div>
    </>
  );
};

class CourseCard extends React.Component {
  render() {
    return (
      <div className="course-card">
        <div className="course-name-container">
          <span className="course-name">{this.props.course.name}</span>
        </div>
        <div className="course-info-container">
          <CourseInfoRow name="Average:" value={`${96 + 1}%`}/>
          <CourseInfoRow name="Target Grade:" value={`${96 + 1}%`} />
          <CourseInfoRow name="Credit:" value={`${0.25 * 2}`} />
          <CourseInfoRow name="Weight Achieved:" value={`${0.125 * 2} / 1`} />
        </div>
      </div>);
  }
};

export default CourseCard;
