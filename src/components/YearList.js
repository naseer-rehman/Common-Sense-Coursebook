import React, {Component} from "react";
import "./YearList.css";
import YearEntry from "./YearEntry";
import AddYearButton from "./AddYearButton";

class YearList extends Component {
  constructor(props) {
    super(props);
  }

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
        <AddYearButton />
      </div>
    );
  }
}

export default YearList;