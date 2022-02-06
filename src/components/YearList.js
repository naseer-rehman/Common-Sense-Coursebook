import React, {Component} from "react";
import "./YearList.css";
import YearEntry from "./YearEntry";
import AddYearButton from "./AddYearButton";

class YearList extends Component {
  render() {
    const openWindow = (window) => {
      this.props.openWindow(window);
    };

    const closeWindow = () => {
      this.props.closeWindow();
    };

    return (
      <div className="year-list">
        {
          this.props.yearList.map(year => {
            return <YearEntry
              toggleYearVisible={(visible) => {
                console.log(`YearList: ${visible}`);
                this.props.toggleYearVisible(year.id, visible);
              }}
              key={year.id} 
              yearId={year.id}
              name={year.name} 
              coursesHidden={year.hidden} 
              courses={year.courses}
              openWindow={openWindow}
              closeWindow={closeWindow}
              editYearName={(newYearName) => this.props.editYearName(year.id, newYearName)}
              deleteYear={() => this.props.deleteYear(year.id)}
              addCourse={(course) => this.props.addCourse(year.id, course)}
              deleteCourse={(courseId) => this.props.deleteCourse(year.id, courseId)}
              editCourse={(course) => this.props.editCourse(year.id, course)}
            />;
          })
        }
        <AddYearButton 
          openWindow={openWindow}
          closeWindow={() => this.props.closeWindow()}
          addYear={(yearName) => this.props.addYear(yearName)}
        />
      </div>
    );
  }
}

export default YearList;