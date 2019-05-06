import React from "react";
import "./hover.css";

export default class TextOnHover extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="content">
          <div className="content-overlay" />
          {this.props.children}
          <div className="content-details fadeIn-bottom">
            <h3>{this.props.name}</h3>
            <p>{this.props.blurb}</p>
          </div>
        </div>
      </div>
    );
  }
}
