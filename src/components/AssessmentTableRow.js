import React from "react";
import "./AssessmentTableRow.css";

class AssessmentTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.assessmentName,
      weight: this.props.assessmentWeight,
      grade: this.props.assessmentGrade,
    };
  }

  editName(e) {
    const newValue = e.target.value;
    this.setState(state => {
      return {
        ...state,
        name: newValue,
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
    console.log("gonna invoke da ", this.props.updateAssessment);
    this.props.updateAssessment(
      this.props.assessmentId,
      {
        name: this.state.name,
        weight: Number(this.state.weight),
        grade: Number(this.state.grade),
      }
    );
  }

  render() {
    const { name, weight, grade } = this.state;

    return (
      <>
        <input 
          onBlur={() => this.onBlur()}
          onChange={(e) => this.editName(e)} 
          value={name} 
        />
        <input 
          onBlur={() => this.onBlur()}
          onChange={(e) => this.editGrade(e)} 
          value={grade}
        />
        <input 
          onBlur={() => this.onBlur()}
          onChange={(e) => this.editWeight(e)} 
          value={weight}
        />
      </>
    );
  }
};

export default AssessmentTableRow;
