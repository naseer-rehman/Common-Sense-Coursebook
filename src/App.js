import React from "react";
import './App.css';
import Header from "./components/Header";
import YearList from "./components/YearList";
import darkMode from "./components/darkMode";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      years: [
        {
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
            }
          ],
        },
        {
          id: 2,
          name: "Year 2",
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
            }
          ],
        },
        {
          id: 3,
          name: "Year 3",
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
            }
          ],
        }
      ],
    };
    
  }

  render() {
    return (
      <>
        <Header />
        <YearList yearList={this.state.years} />
      </>
    );
  }
};

export default App;
