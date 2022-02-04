import React from "react";
import "./CourseAssessmentsTable.css";
import AssessmentTableRow from "./AssessmentTableRow";

class CourseAssessmentsTable extends React.Component {
  addBlankAssessment() {
    this.props.addAssessment({
      assessmentName: "",
      grade: "",
      weight: ""
    });
  }

  render() {
    return (
      <div className="assessments-table-container">
        <form className="course-assessments-table" autoComplete="off">
          <div className="assessments-table-grid-cell">Name</div>
          <div className="assessments-table-grid-cell">Grade</div>
          <div className="assessments-table-grid-cell">Weight</div>
          {
            this.props.initialAssessments.map((assessment) => {
              return (
                <AssessmentTableRow 
                  key={assessment.id}
                  assessmentName={assessment.assessmentName} // Just send the assessment obj
                  assessmentGrade={assessment.grade}
                  assessmentWeight={assessment.weight}
                  assessmentId={assessment.id}
                  updateAssessment={this.props.updateAssessment}
                  deleteAssessment={this.props.deleteAssessment}
                />
              );
            })
          }
        </form>
        <button 
          onClick={(e) => this.addBlankAssessment()}
          className="add-row-button"
        >
          Add Row
        </button>
      </div>
    );
  }
};

export default CourseAssessmentsTable;