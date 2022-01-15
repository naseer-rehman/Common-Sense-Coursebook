import React from "react";
import "./YearEntry.css";

class YearEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="year-container">
        <div className="year-title-container">
          <button className="year-button-dash">
            <span></span>
          </button>
          <button className="year-title-button">
            <span className="year-title">{this.props.name}</span>
          </button>
        </div>
        <ul>
          {
            this.props.courses.map(course => {
              return (<li>{course.name}</li>);
            })
          }
        </ul>
      </div>
    );
  }
}

export default YearEntry;