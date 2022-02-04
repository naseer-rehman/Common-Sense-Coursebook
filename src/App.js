import React from "react";
import './App.css';
import Header from "./components/Header";
import YearList from "./components/YearList";
import { v4 as uuidv4 } from "uuid";
import Footer from './components/Footer';
import userData from "./modules/userData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      years: [
        {
          hidden: false,
          id: 1,
          name: "Year 1",
          courses: [
            {
              id: 1,
              name: "SPCOM 100",
              targetGrade: 80,
              credit: 0.5,
              assessments: [
                {
                  id: 1,
                  assessmentName: "quizzes",
                  weight: 50,
                  grade: 75,
                },
                {
                  id: 2,
                  assessmentName: "midterm",
                  weight: 25,
                  grade: 50,
                }
              ],
            },
            {
              id: 2,
              name: "CS 135",
              targetGrade: 80,
              credit: 0.5,
              assessments: [
                {
                  id: 1,
                  assessmentName: "quizzes",
                  weight: 50,
                  grade: 75,
                },
                {
                  id: 2,
                  assessmentName: "midterm",
                  weight: 25,
                  grade: 50,
                }
              ],
            },
            {
              id: 3,
              name: "MATH 136",
              targetGrade: 80,
              credit: 0.5,
              assessments: [
                {
                  id: 1,
                  assessmentName: "quizzes",
                  weight: 50,
                  grade: 75,
                },
                {
                  id: 2,
                  assessmentName: "midterm",
                  weight: 25,
                  grade: 50,
                }
              ],
            }
          ],
        },
        {
          hidden: false,
          id: 2,
          name: "Year 2",
          courses: [
            {
              id: 1,
              name: "CS 246",
              targetGrade: 80,
              credit: 0.5,
              assessments: [
                {
                  id: 1,
                  assessmentName: "quizzes",
                  weight: 50,
                  grade: 75,
                },
                {
                  id: 2,
                  assessmentName: "midterm",
                  weight: 25,
                  grade: 50,
                }
              ],
            }
          ],
        },
        {
          hidden: true,
          id: 3,
          name: "Year 3",
          courses: [
            {
              id: 1,
              name: "COMPSCI 1ZD3",
              targetGrade: 80,
              credit: 0.5,
              assessments: [
                {
                  id: 1,
                  assessmentName: "quizzes",
                  weight: 50,
                  grade: 75,
                },
                {
                  id: 2,
                  assessmentName: "midterm",
                  weight: 25,
                  grade: 50,
                }
              ],
            }
          ],
        }
      ],
      theme: userData.getTheme(),
      currentWindow: null,
    };
    this.addCourse = this.addCourse.bind(this);
    this.editCourse = this.editCourse.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
  }

  toggleYearVisible(yearId, isVisible) {
    this.setState((state) => {
      console.log(state.years);
      return {
        ...state,
        years: state.years.map(year => {
          return {
            ...year,
            hidden: yearId === year.id ? !isVisible : year.hidden,
          };
        }),
      };
    });
  }

  openWindow(window) {
    // Make page non-scrollable (body overflow hidden)
    this.setState((state) => {
      return {
        ...state,
        currentWindow: window,
      };
    });
  }

  closeWindow() {
    this.setState((state) => {
      return {
        ...state,
        currentWindow: null,
      };
    });
  }

  addCourse(yearId, course) {
    this.setState(state => {
      const year = state.years.find(year => year.id === yearId);
      if (!year)
        return state;
      year.courses.push(course);
      return { ...state };
    });
  }

  editCourse(yearId, editedCourse) {
    this.setState(state => {
      const year = state.years.find(year => year.id === yearId);
      const courseIndex = year.courses.findIndex(course => course.id === editedCourse.id);
      const course = year.courses[courseIndex];
      year.courses[courseIndex] = {
        ...course,
        ...editedCourse,
      };
      return state;
    });
  }

  addYear(yearName) {
    this.setState((state) => {
      return {
        ...state,
        years: state.years.concat([{
          hidden: false,
          id: uuidv4(),
          name: yearName,
          courses: [],
        }]),
      };
    });
  }

  editYearName(yearId, newYearName) {
    this.setState((state) => {
      return {
        ...state,
        years: state.years.map((year) => {
          return year.id === yearId
            ? {...year, name: newYearName}
            : year;
        }),
      };
    });
  }

  deleteYear(yearId) {
    this.setState((state) => {
      return {
        ...state,
        years: state.years.filter((year) => {
          return year.id !== yearId;
        }),
      };
    });
  }

  addAssessment(yearId, courseId, assessment) {
    this.setState((state) => {
      return {
        ...state,
        years: state.years.map((year) => {
          if (year.id !== yearId)
            return year;
          return {
            ...year,
            courses: year.courses.map((course) => {
              if (course.id !== courseId)
                return course;
              return {
                ...course,
                assessments: course.assessments.concat([{
                  ...assessment
                }]),
              }
            }),
          }
        }),
      };
    });
  }

  editAssessment(yearId, courseId, assessmentId, editedProperties) {
    this.setState(state => {
      const year = state.years.find(year => year.id === yearId);
      const course = year 
        ? year.courses.find(course => course.id === courseId) 
        : null;
      const assessment = course 
        ? course.assessments.find(assessment => assessment.id === assessmentId)
        : null;
      for (const key of editedProperties.keys()) {
        assessment[key] = editedProperties[key];
      }
      return {...state};
    });
  }

  changeTheme(newTheme) {
    this.setState(state => {
      return {
        ...state,
        theme: newTheme,
      };
    });
    userData.saveTheme(newTheme);
  }

  render() {
    return (
      <>
        <Header theme={this.state.theme} changeTheme={this.changeTheme} />
        <YearList 
          toggleYearVisible={(yearId, isVisible) => this.toggleYearVisible(yearId, isVisible)}
          yearList={this.state.years}
          openWindow={(window) => this.openWindow(window)}
          closeWindow={() => this.closeWindow()}
          addYear={(yearName) => this.addYear(yearName)}
          editYearName={(yearId, yearName) => this.editYearName(yearId, yearName)}
          deleteYear={(yearId) => this.deleteYear(yearId)}
          addCourse={this.addCourse}
          editCourse={this.editCourse}
        />
        {this.state.currentWindow}
        <Footer />
      </>
    );
  }
};

export default App;
