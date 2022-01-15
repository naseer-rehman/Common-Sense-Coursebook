import React from "react";
import "./YearEntry.css";
import CourseCard from "./CourseCard";
import AddCourseButton from "./AddCourseButton";

class YearEntry extends React.Component {
  render() {
    return (
      <div className="year-container">
        <div className="year-title-container">
          <button 
            className="year-button-dash" 
            onClick={() => {
              this.props.toggleYearVisible(this.props.coursesHidden);
            }}
          >
            <span></span>
          </button>
          <button className="year-title-button">
            <span className="year-title">{this.props.name}</span>
          </button>
        </div>
        <div className="course-card-list">
          {
            this.props.coursesHidden === false 
              ? (
                <>
                  {this.props.courses.map(course => <CourseCard key={course.id} course={course} />)}
                  <AddCourseButton />
                </>
              )
              : null
          }
        </div>
      </div>
    );
  }
}

export default YearEntry;