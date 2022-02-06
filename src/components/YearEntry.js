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
        {
          this.props.coursesHidden === false 
            ? (
              <div className="course-card-list">
                {
                  this.props.courses.map(course => 
                    <CourseCard 
                      yearId={this.props.yearId} 
                      courseId={course.id} 
                      key={course.id} 
                      course={course} 
                      openWindow={this.props.openWindow} 
                      closeWindow={this.props.closeWindow} 
                      editCourse={this.props.editCourse}
                      deleteCourse={this.props.deleteCourse}
                    />
                  )
                }
                <AddCourseButton 
                  openWindow={this.props.openWindow}
                  closeWindow={this.props.closeWindow}
                  addCourse={this.props.addCourse}
                />
              </div>
            )
            : null
        }
      </div>
    );
  }
}

export default YearEntry;