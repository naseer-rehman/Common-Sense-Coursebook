import React from "react";
import "./Window.css";

const body = document.querySelector("body");

class Window extends React.Component {
  componentWillUnmount() {
    body.classList.remove("lock-scroll");
  }

  render() {
    body.classList.add("lock-scroll");
    let containerClasses = "window-container" + (this.props.classes 
      ? " " + this.props.classes.join(" ")
      : "");
    return (
      <div className="window-background">
        <div className={containerClasses}>
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default Window;