import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./AddCourseWindow.css";
import CourseAssessmentsTable from "./CourseAssessmentsTable";
import Window from "./Window";

class AddCourseWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseNameValue: "",
      targetGradeValue: "",
      assessments: [], // [{id:1, name:"Quizzes", grade:69, weight:50},{id:2, name:"Midterm", grade:69, weight:50},{id:3, name:"Assignments", grade:69, weight:50}],
    };
    this.onEditName = this.onEditName.bind(this);
    this.onEditTargetGrade = this.onEditTargetGrade.bind(this);
    this.deleteAssessment = this.deleteAssessment.bind(this);
    this.updateAssessment = this.updateAssessment.bind(this);
    this.addAssessment = this.addAssessment.bind(this);
    this.setAssessments = this.setAssessments.bind(this);
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
        assessments: state.assessments.concat([{
          ...assessment,
          assessmentName: assessment.name,
          id: uuidv4(),
          weight: Number(assessment.weight),
          grade: Number(assessment.grade),
        }]),
      };
    });
  }

  updateAssessment(assessmentId, updatedProperties) {
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

  deleteAssessment(assessmentId) {
    this.setState(state => {
      return  {
        ...state,
        assessments: state.assessments.filter(assessment => assessment.id !== assessmentId),
      }
    });
  }

  onEditName(e) {
    const value = e.target.value;
    this.setState(state => {
      return {
        ...state,
        courseNameValue: value,
      };
    });
  }

  onEditTargetGrade(e) {
    const value = e.target.value;
    this.setState(state => {
      return {
        ...state,
        targetGradeValue: value,
      };
    });
  }

  onCancel() {
    this.props.closeWindow();
  }

  onFinish() {
    console.log(`Target Grade: ${this.state.targetGradeValue}`, `Course Name: ${this.state.courseNameValue}`, "Assessments: ", this.state.assessments);
    this.props.addCourse({
      id: uuidv4(),
      name: this.state.courseNameValue,
      targetGrade: parseInt(this.state.targetGradeValue),
      assessments: this.state.assessments.concat([]),
    });
    this.props.closeWindow();
  }

  render() {
    return (
      <Window classes={[]} >
        <div className="window-scrollable">
          <div className="center-content">
            <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
              <label htmlFor="courseNameInput">Course Name: </label>
              <input onChange={this.onEditName} id="courseNameInput" type="text" />
              <label htmlFor="targetGradeInput">Target Grade: </label>
              <input onChange={this.onEditTargetGrade} id="targetGradeInput" type="text" />
            </form>
          </div>
          <div className="center-content">
            <CourseAssessmentsTable
              initialAssessments={this.state.assessments}
              setAssessments={this.setAssessments}
              addAssessment={this.addAssessment}
              updateAssessment={this.updateAssessment}
              deleteAssessment={this.deleteAssessment}
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
