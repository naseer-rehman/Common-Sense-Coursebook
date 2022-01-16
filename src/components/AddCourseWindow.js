import React from "react";
import "./AddCourseWindow.css";
import CourseAssessmentsTable from "./CourseAssessmentsTable";
import Window from "./Window";

class AddCourseWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseNameValue: "",
      targetGradeValue: "",
      assessments: [],
    };
  }
  
  setAssessments(newAssessments) {
    this.setState(state => {
      return {
        ...state,
        assessments: [...newAssessments],
      };
    });
  }

  addAssessment(assessment) {
    this.setState(state => {
      return {
        ...state,
        assessments: state.assessments.concat([assessment]),
      };
    });
  }

  editAssessment(assessmentId, editedAssessment) {
    this.setState(state => {
      return {
        ...state,
        assessments: state.assessments.map(assessment => {
          return assessment.id !== assessmentId
            ? assessment
            : { ...editedAssessment, id: assessmentId };
        }),
      };
    });
  }

  onCancel() {
    this.props.closeWindow();
  }

  onFinish() {

  }

  render() {
    return (
      <Window>
        <div className="window-scrollable">
          <div className="center-content">
            <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
              <label htmlFor="courseNameInput">Course Name: </label>
              <input id="courseNameInput" type="text" />
              <label htmlFor="targetGradeInput">Target Grade: </label>
              <input id="targetGradeInput" type="text" />
            </form>
          </div>
          <div className="center-content">
            <CourseAssessmentsTable
              initialAssessments={[{id:1, name:"Quizzes", grade:69, weight:50},{id:2, name:"Midterm", grade:69, weight:50},{id:3, name:"Assignments", grade:69, weight:50}]}
              setAssessments={(assessments) => this.setAssessments(assessments)}
              addAssessment={(assessment) => this.addAssessment(assessment)}
              editAssessment={(assessmentId, editedAssessment) => this.editAssessment(assessmentId, editedAssessment)}
            />
          </div>
        </div>
        <div className="window-footer">
          <button onClick={() => this.onCancel()} className="cancel-button">Cancel</button>
          <button onClick={() => this.onFinish()} className="finish-button">Finish</button>
        </div>
      </Window>
    );
  }
};

export default AddCourseWindow;