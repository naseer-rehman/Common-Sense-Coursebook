import React from "react";
import "./CourseCard.css";
import { calculateAverageGrade, calculateAchievedWeight, calculateWeightedGrade } from "../modules/gradeCalculator";
import EditCourseButton from "./EditCourseButton";

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
    const round = (num, dp = 0) => Math.floor(num * Math.pow(10, dp) + 0.5) / Math.pow(10, dp);
    const course = this.props.course;
    const assessments = course.assessments;
    const average = round(calculateAverageGrade(assessments), 1);
    const targetGrade = round(course.targetGrade, 2);
    const credit = round(course.credit, 2);
    const weightAchieved = round(calculateAchievedWeight(assessments), 2);
    const weightedGrade = round(calculateWeightedGrade(assessments), 2);

    return (
      <div className="course-card">
        <div className="course-name-container">
          <span className="course-name">{this.props.course.name}</span>
        </div>
        <div className="course-info-container">
          <CourseInfoRow name="Average:" value={`${average}%`}/>
          <CourseInfoRow name="Target Grade:" value={`${targetGrade}%`} />
          <CourseInfoRow name="Credit:" value={`${credit}`} />
          <CourseInfoRow name="Weighted Grade:" value={`${weightedGrade}%`} />
          <CourseInfoRow name="Weight Achieved:" value={`${weightAchieved} / 1`} />
        </div>
        <EditCourseButton 
          openWindow={this.props.openWindow}
          closeWindow={this.props.closeWindow}
          editCourse={this.props.editCourse}
          deleteCourse={this.props.deleteCourse}
          course={this.props.course}
        />
      </div>);
  }
};

export default CourseCard;
