import React from "react";
import "./Window.css";

class Window extends React.Component {
  render() {
    document.querySelector("body").classList.add("lock-scroll");
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