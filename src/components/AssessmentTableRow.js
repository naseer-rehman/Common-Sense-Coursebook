import React from "react";
import "./AssessmentTableRow.css";

class AssessmentTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assessmentName: this.props.assessmentName,
      weight: this.props.assessmentWeight,
      grade: this.props.assessmentGrade,
    };
    this.onDeleteAssessment = this.onDeleteAssessment.bind(this);
  }

  editName(e) {
    const newValue = e.target.value;
    this.setState(state => {
      return {
        ...state,
        assessmentName: newValue,
      }
    });
  }

  editWeight(e) {
    const newValue = e.target.value;
    this.setState(state => {
      return {
        ...state,
        weight: newValue,
      }
    });
  }

  editGrade(e) {
    const newValue = e.target.value;
    this.setState(state => {
      return {
        ...state,
        grade: newValue,
      }
    });
  }

  onBlur() {
    this.props.updateAssessment(
      this.props.assessmentId,
      {
        assessmentName: this.state.assessmentName,
        weight: Number(this.state.weight),
        grade: Number(this.state.grade),
      }
    );
  }

  onDeleteAssessment(e) {
    e.preventDefault();
    this.props.deleteAssessment(this.props.assessmentId);
  }

  render() {
    const { assessmentName , weight, grade } = this.state;

    return (
      <>
        <input
          autoComplete="new-password" 
          onBlur={() => this.onBlur()}
          onChange={(e) => this.editName(e)} 
          value={assessmentName}
          className="assessments-table-grid-cell"
        />
        <input
          autoComplete="new-password" 
          onBlur={() => this.onBlur()}
          onChange={(e) => this.editGrade(e)} 
          value={grade}
          className="assessments-table-grid-cell"
        />
        <div className="assessments-table-grid-cell">
          <input
            autoComplete="new-password" 
            onBlur={() => this.onBlur()}
            onChange={(e) => this.editWeight(e)} 
            value={weight}
          />
          <button className="delete-button" onClick={this.onDeleteAssessment}>
            <div className="trash-sign"></div>
          </button>
        </div>
      </>
    );
  }
};

export default AssessmentTableRow;
