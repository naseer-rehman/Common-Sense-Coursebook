import React from "react";
import Window from "./Window";

class AddYearWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yearName: "",
    };
  }
  
  onInputChange(e) {
    const value = e.target.value;
    this.setState((state) => {
      return {
        ...state,
        yearName: value,
      };
    });
  }

  onFinish(e) {
    this.props.addYear(this.state.yearName);
    this.props.closeWindow();
  }

  onCancel(e) {
    this.props.closeWindow();
  }

  render() {
    return (
      <Window>
        <div className="window-scrollable">
          <div className="center-content">
            <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
              <label htmlFor="yearNameInput">Year Name: </label>
              <input id="yearNameInput" type="text" onChange={(e) => this.onInputChange(e)} />
            </form>
          </div>
        </div>
        <div className="window-footer">
          <button onClick={() => this.onCancel()} className="cancel-button">Cancel</button>
          <button onClick={() => this.onFinish()} className="finish-button">Finish</button>
        </div>
      </Window>
    );
  }
}

export default AddYearWindow;