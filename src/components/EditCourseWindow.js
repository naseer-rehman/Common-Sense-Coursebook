import React from "react";
import CourseWindow from "./CourseWindow";

const EditCourseWindow = ({course, editCourse, deleteCourse, closeWindow}) => {
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
    deleteCourse={deleteCourse}
    editingCourse={true}
  />;
};

export default EditCourseWindow;
