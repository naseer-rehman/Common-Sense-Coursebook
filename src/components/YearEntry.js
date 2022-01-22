import React from "react";
import "./YearEntry.css";
import CourseCard from "./CourseCard";
import AddCourseButton from "./AddCourseButton";
import EditYearWindow from "./EditYearWindow";

class YearEntry extends React.Component {
  onTitleClick(e) {
    e.preventDefault();
    this.props.openWindow(
      <EditYearWindow
        closeWindow={this.props.closeWindow}
        editYearName={this.props.editYearName}
        deleteYear={this.props.deleteYear}
      />
    );
  }

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
          <button 
            className="year-title-button"
            onClick={(e) => this.onTitleClick(e)}
          >
            <span className="year-title">{this.props.name}</span>
          </button>
        </div>
        <div className="course-card-list">
          {
            this.props.coursesHidden === false 
              ? (
                <>
                  {this.props.courses.map(course => <CourseCard key={course.id} course={course} />)}
                  <AddCourseButton 
                    openWindow={this.props.openWindow}
                    closeWindow={this.props.closeWindow}
                    addCourse={this.props.addCourse}
                  />
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