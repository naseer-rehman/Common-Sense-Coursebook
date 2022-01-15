import React from "react";
import "./Window.css";

const body = document.querySelector("body");

class Window extends React.Component {
  componentWillUnmount() {
    body.classList.remove("lock-scroll");
  }

  render() {
    body.classList.add("lock-scroll");
    return (
      <div className="window-background">
        <div className="window-container">
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default Window;