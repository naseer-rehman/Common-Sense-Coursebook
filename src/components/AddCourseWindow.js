import "./AddCourseWindow.css";
import React from "react";
import CourseWindow from "./CourseWindow";
import { v4 as uuidv4 } from "uuid";

const AddCourseWindow = ({closeWindow, addCourse}) => {
  return <CourseWindow 
    initialCourseInfo={{
      name: "",
      targetGrade: "",
      credit: "",
      assessments: [],
    }}
    onFinish={(state) => {
      addCourse({
        id: uuidv4(),
        name: state.courseNameValue,
        targetGrade: Number(state.targetGradeValue),
        assessments: state.assessments.concat([]),
        credit: Number(state.creditValue),
      });
    }}
    closeWindow={closeWindow}
    deleteCourse={() => {}}
    editingCourse={false}
  />;
}

export default AddCourseWindow;