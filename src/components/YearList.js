import React, {Component} from "react";
import "./YearList.css";
import YearEntry from "./YearEntry";
import AddYearButton from "./AddYearButton";

class YearList extends Component {
  render() {
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
              name={year.name} 
              coursesHidden={year.hidden} 
              courses={year.courses}
            />;
          })
        }
        <AddYearButton 
          openWindow={(window) => this.props.openWindow(window)}
          closeWindow={() => this.props.closeWindow()}
          addYear={(yearName) => this.props.addYear(yearName)}
        />
      </div>
    );
  }
}

export default YearList;