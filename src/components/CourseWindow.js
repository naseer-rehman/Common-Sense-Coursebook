import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./CourseWindow.css";
import CourseAssessmentsTable from "./CourseAssessmentsTable";
import Window from "./Window";

class CourseWindow extends React.Component {
  constructor(props) {
    super(props);
    const initialCourseInfo = this.props.initialCourseInfo;
    this.state = {
      courseNameValue: initialCourseInfo.name,
      targetGradeValue: String(initialCourseInfo.targetGrade),
      creditValue: String(initialCourseInfo.credit),
      assessments: initialCourseInfo.assessments.concat([]),
    };
    this.onEditName = this.onEditName.bind(this);
    this.onEditTargetGrade = this.onEditTargetGrade.bind(this);
    this.onEditCredit = this.onEditCredit.bind(this);
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
          assessmentName: assessment.assessmentName,
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

  onEditCredit(e) {
    const value = e.target.value;
    this.setState(state => {
      return {
        ...state,
        creditValue: value,
      };
    });
  }

  onDelete() {
    this.props.deleteCourse(this.props.initialCourseInfo.id); // courseId?
    this.props.closeWindow();
  }

  onCancel() {
    this.props.closeWindow();
  }

  onFinish() {
    this.props.onFinish(this.state, this.props.initialCourseInfo);
    this.props.closeWindow();
  }

  render() {
    return (
      <Window classes={["course-window"]} >
        <div className="window-scrollable">
          <div className="center-content">
            <form className="course-info-form" onSubmit={(e) => e.preventDefault()} autoComplete="off">
              <div className="course-info-form-input-container stacked-input">
                <input onChange={this.onEditName} id="courseNameInput" type="text" value={this.state.courseNameValue} />
                <label htmlFor="courseNameInput">Course Name</label>
              </div>
              <div className="course-info-form-input-container stacked-input">
                <input onChange={this.onEditTargetGrade} id="targetGradeInput" type="text" value={this.state.targetGradeValue} />
                <label htmlFor="targetGradeInput">Target Grade</label>
              </div>
              <div className="course-info-form-input-container stacked-input">
                <input onChange={this.onEditCredit} id="creditsInput" type="text" value={this.state.creditValue}/>
                <label htmlFor="creditsInput">Credits</label>
              </div>
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
        <div className="window-footer window-footer-button-container">
          <div className="left-buttons">
            {
              this.props.editingCourse && 
              <button onClick={() => this.onDelete()} className="delete-button delete-course-button">
                <div className="trash-sign"></div>
              </button>
            }
            <button onClick={() => this.onCancel()} className="cancel-button">Cancel</button>
          </div>
          <div className="right-buttons">
            <button onClick={() => this.onFinish()} className="finish-button">Finish</button>
          </div>
        </div>
      </Window>
    );
  }
};

export default CourseWindow;
