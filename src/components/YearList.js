import React, {Component} from "react";
import "./YearList.css";
import YearEntry from "./YearEntry";

class YearList extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="year-list">
        {
          this.props.yearList.map(year => {
            return <YearEntry key={year.id} name={year.name} courses={year.courses}/>;
          })
        }
      </div>
    );
  }
}

export default YearList;