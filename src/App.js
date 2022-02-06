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
      years: userData.getYearData(),
      theme: userData.getTheme(),
      currentWindow: null,
    };
    this.addCourse = this.addCourse.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);
    this.editCourse = this.editCourse.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
  }

  toggleYearVisible(yearId, isVisible) {
    this.setState((state) => {
      console.log(state.years);
      const newState = {
        ...state,
        years: state.years.map(year => {
          return {
            ...year,
            hidden: yearId === year.id ? !isVisible : year.hidden,
          };
        }),
      };
      userData.saveYearData(newState.years);
      return newState;
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
      userData.saveYearData(state.years);
      return { ...state };
    });
  }

  deleteCourse(yearId, courseId) {
    this.setState(state => {
      const year = state.years.find(year => year.id === yearId);
      year.courses = year.courses.filter(course => course.id !== courseId);
      userData.saveYearData(state.years);
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
      userData.saveYearData(state.years);
      return state;
    });
  }

  addYear(yearName) {
    this.setState((state) => {
      const newState = {
        ...state,
        years: state.years.concat([{
          hidden: false,
          id: uuidv4(),
          name: yearName,
          courses: [],
        }]),
      };
      userData.saveYearData(newState.years);
      return newState;
    });
  }

  editYearName(yearId, newYearName) {
    this.setState((state) => {
      const newState = {
        ...state,
        years: state.years.map((year) => {
          return year.id === yearId
            ? {...year, name: newYearName}
            : year;
        }),
      };
      userData.saveYearData(newState.years);
      return newState;
    });
  }

  deleteYear(yearId) {
    this.setState((state) => {
      const newState = {
        ...state,
        years: state.years.filter((year) => {
          return year.id !== yearId;
        }),
      };
      userData.saveYearData(newState.years);
      return newState;
    });
  }

  addAssessment(yearId, courseId, assessment) {
    this.setState((state) => {
      const year = state.years.find(year => year.id === yearId);
      const course = year 
        ? year.courses.find(course => course.id === courseId)
        : null;
      course.asessments = course 
        ? course.assessments.concat([{ ...assessment }])
        : course.assessments;
      userData.saveYearData(state.years);
      return { ...state };
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
      userData.saveYearData(state.years);
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
          deleteCourse={this.deleteCourse}
          editCourse={this.editCourse}
        />
        {this.state.currentWindow}
        <Footer />
      </>
    );
  }
};

export default App;
