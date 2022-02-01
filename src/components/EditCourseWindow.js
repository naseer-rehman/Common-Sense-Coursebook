import React from "react";
import CourseWindow from "./CourseWindow";

const EditCourseWindow = ({course, editCourse, closeWindow}) => {
  return <CourseWindow
    initialCourseInfo={course} 
    onFinish={(state, initialCourseInfo) => {
      editCourse({
        name: state.courseNameValue,
        targetGrade: Number(state.targetGradeValue),
        credit: Number(state.creditValue),
        assessments: state.assessments.concat([]),
        id: initialCourseInfo.id,
      });
    }}
    closeWindow={closeWindow}
  />;
};

export default EditCourseWindow;
