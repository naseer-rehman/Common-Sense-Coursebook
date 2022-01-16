import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./CourseAssessmentsTable.css";
import AssessmentTableRow from "./AssessmentTableRow";

class CourseAssessmentsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assessments: this.props.initialAssessments,
    };
  }
  
  addAssessment(assessment) {
    this.setState((state) => {
      return {
        ...state,
        assessments: state.assessments.concat([{
          ...assessment,
          id: uuidv4(),
        }]),
      };
    });
  }

  updateAssessment(assessmentId, updatedProperties) {
    console.log("updating assessment");
    this.setState(state => {
      return {
        ...state,
        assessments: state.assessments.map(assessment => {
          return assessment.id !== assessmentId
            ? assessment
            : { ...assessment, ...updatedProperties };
        }),
      };
    });
  }

  onLostFocus() {
    // update the assessment's fields
  }

  render() {
    return (
      <div className="assessments-table-container">
        <div className="course-assessments-table">
          <div>Name</div>
          <div>Grade</div>
          <div>Weight</div>
          {
            this.state.assessments.map((assessment) => {
              return (
                <AssessmentTableRow 
                  key={assessment.id}
                  assessmentName={assessment.name}
                  assessmentGrade={assessment.grade}
                  assessmentWeight={assessment.weight}
                  assessmentId={assessment.id}
                  updateAssessment={(assessmentId, updatedProperties) => this.updateAssessment(assessmentId, updatedProperties)}
                />
              );
            })
          }
        </div>
        <button className="add-row-button">Add Row</button>
      </div>
    );
  }
};

export default CourseAssessmentsTable;