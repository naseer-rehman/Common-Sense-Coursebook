import React from "react";
import './App.css';
import Header from "./components/Header";
import YearList from "./components/YearList";
import AddYearWindow from "./components/AddYearWindow";
// import Footer from './components/Footer';

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
      theme: "light",
      currentWindow: null, //<AddYearWindow />,
    };
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

  addCourse(yearId) {
    // adds course to the specified year Id.
  }

  render() {
    return (
      <>
        <Header />
        <YearList 
          toggleYearVisible={(yearId, isVisible) => this.toggleYearVisible(yearId, isVisible)}
          yearList={this.state.years}
          openWindow={(window) => this.openWindow(window)}
        />
        {this.state.currentWindow}
      </>
    );
  }
};

export default App;
